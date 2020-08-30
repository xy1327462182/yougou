//引入promise 化 api
import { getSetting,openSetting,chooseAddress,showModal,showToast } from "../../utils/asyncWx"


// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [],
    allChecked: true,
    totalPrice: 0,
    totalNum: 0
  },

  /*添加收货地址按钮
  ps: 调用wx.chooseAddress()添加收货地址
      调用wx.getSetting()获取用户授权状态

  1.用户点击确定获取收货地址 
    authSetting scope.address值为true

  2.用户点击取消获取收货地址
    authSetting scope.address值为false

  3.用户未点击按钮
    authSetting scope.address值为undefined
  */
  async handelAddressAdd(e){
    try{
      //获取用户授权的状态
      let res1=await getSetting()
      if (res1.authSetting['scope.address']==false) {
        //如果没授权 引导用户授权
        let res2=await openSetting()
        //如果用户成功授权
        if (res2.authSetting['scope.address']) {
          //选择收货地址
          let address=await chooseAddress()
          //如果有地址数据 将地址数据添加all属性然后，放到data中
          this.setAddress(address)
        }
      } else {
        //直接调用选择收货地址
        let address=await chooseAddress()
        //如果有地址数据 将地址数据添加all属性然后，放到data中
        this.setAddress(address)
      }
    }catch(e){
      console.log(e)
    }
  },

  //复选框更换事件
  handelCheckedChange(e){
    //1.获取点击的事件源对象
    let goods_id=e.currentTarget.dataset.id
    let cart=this.data.cart
    //2.获取索引
    let index=cart.findIndex(v=>v.goods_id===goods_id)
    //3.checked属性取反
    cart[index].checked=!cart[index].checked
    //5.重新计算 底部工具栏中的数据
    this.setCart(cart)
  },

  //全选和反选事件
  handelAllChecked(){
    //获取data中原来allChecked属性 cart数组
    let {allChecked,cart}=this.data
    //allChecked取反
    allChecked=!allChecked
    //遍历数组 每一个商品选中状态跟随全选状态改变
    cart.forEach(v=>v.checked=allChecked)
    //更新数据 存入缓存
    this.setData({
      allChecked
    })
    this.setCart(cart)
  },

  //商品数量编辑事件
  async handelNumEdit(e){
    let that=this
    //1.获取商品id 对数量的操作
    let {id,edit}=e.currentTarget.dataset
    //2.获取cart数组
    let {cart}=this.data
    //3.获取商品索引
    let index=cart.findIndex(v=>v.goods_id==id)
    //3.5 判断是否删除商品
    if (cart[index].num===1 && edit===-1) {
      let res=await showModal({
        content: "是否删除本商品？"
      })
      if (res.confirm) {
        //删除商品
        cart.splice(index,1)
        //更新数据
        that.setCart(cart)
      }
    } else {
      //4.修改数量
      cart[index].num += edit
      //5.重新设置回数据
      this.setCart(cart)
    }
    
  },

  //点击支付事件
  async handelPay(){
    let {address,totalNum}=this.data
    //1.如果没收货地址
    if (!address.userName) {
      await showToast({title:"您还没有添加收货地址！"})
    }
    //2.如果没有选购商品
    else if (totalNum===0) {
      await showToast({title:"您还没有选购商品！"})
    }
    //3.条件都满足 跳转到支付页面
    else {
      wx.navigateTo({
        url: '/pages/pay/index'
      })
    }
  },

  setCart(cart){
    let totalPrice=0
    let totalNum=0
    let allChecked=true

    //遍历cart 得到allChecked totalPrice totalNum最终状态
    if (cart.length>0) {
      cart.forEach((v)=>{
        if (v.checked) {
          totalPrice += v.goods_price * v.num
          totalNum += v.num
        } else {
          allChecked=false
        }
      })
    } else if (cart.length==0) {
      allChecked=false
    }
    //更新数据
    this.setData({
      cart,
      allChecked,
      totalNum,
      totalPrice
    })
    //存入缓存中
    wx.setStorageSync('cart', cart)
  },

  setAddress(address){
    //如果有地址数据 将地址数据添加all属性然后，放到data中
    if (address.userName) {
      address.all=address.provinceName+address.cityName+address.countyName+address.detailInfo 
    }
    wx.setStorageSync('address', address)
    this.setData({
      address
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取缓存中的地址数据 判断是否已有收货地址
    let address=wx.getStorageSync('address')

    //获取缓存中购物车商品数据 没有为空数组
    let cart=wx.getStorageSync('cart')||[]
    //如果有地址数据 将地址数据添加all属性然后，放到data中
    this.setAddress(address)
    //计算工具栏中数据 存入缓存 存入数据data
    this.setCart(cart)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
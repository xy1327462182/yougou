// pages/goods_detail/index.js

//引入请求的promise
import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //商品数据
    goodsDetails: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id}=options
    this.getGoodsDetails(goods_id)
  },

  //获取商品数据
  async getGoodsDetails(goods_id){
    let res= await request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/detail",
      data: {goods_id}
    })
    this.setData({
      goodsDetails: {
        goods_id: res.data.message.goods_id,
        goods_name: res.data.message.goods_name,
        goods_price: res.data.message.goods_price,
        goods_introduce: res.data.message.goods_introduce.replace(/\.webp/g, ".jpg"),
        pics: res.data.message.pics
      }
    })
  },

  // 轮播图点击预览大图
  handelPicTap(e){
    //获取原来的数据
    let pics=this.data.goodsDetails.pics
    //图片路径数组遍历 获取pics_mid数组
    let urls=pics.map(n=>n.pics_mid)
    //获取当前点击的图片src
    let current=e.currentTarget.dataset.src
    wx.previewImage({
      urls,
      current,
    })
  },

  //加入购物车
  handelAddCart(){
    //获取缓存中的购物车数据
    //如果本来没有则获取空的数组
    let cart=wx.getStorageSync('cart')||[]

    //调用数组的findIndex方法 判断购物车数组中是否有本商品
    let index=cart.findIndex(v=>v.goods_id===this.data.goodsDetails.goods_id)

    if (index==-1) {
      //数组没有本商品
      //商品数量设置为1
      this.data.goodsDetails.num = 1
      //添加到购物车数组中
      cart.push(this.data.goodsDetails)
    } else {
      //数组本就有本商品
      //拿到数组本商品数据 num++
      cart[index].num++
    }

    //最后将新数据存入缓存中
    wx.setStorageSync('cart', cart)
    //弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: "success",
      mask: true
    })
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
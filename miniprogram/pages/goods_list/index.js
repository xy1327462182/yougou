//引入请求的promise
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goodsList: []
  },

  //请求参数
  QueryParams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10
  },

  //标题点击事件
  handelItemChange(e) {
    //获取子组件传递过来的索引
    let index=e.detail.index
    //修改旧数据
    let tabs=this.data.tabs
    //修改数据
    tabs.forEach((n,i) => i==index ? n.isActive = true : n.isActive = false)

    this.setData({
      tabs
    })
  },

  //获取商品数据
  async getGoodsData(){
    let res=await request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search",data:this.QueryParams
    })
    this.setData({
      goodsList: res.data.message.goods
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid=options.cid
    this.getGoodsData()
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
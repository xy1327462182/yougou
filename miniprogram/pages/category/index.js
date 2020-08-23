//引入请求的promise
//https://www.showdoc.com.cn/128719739414963?page_id=2516997897914014
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftCates: [],
    rightContent: [],
    activeIndex: 0,
    scrollTop: 0
  },

  catesDate: [],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let catesDate=wx.getStorageSync('cates')
    if (!catesDate) {
      //请求数据
      
      this.getCatesDate()
    } else {
      //设置过期时间
      if (Date.now() - catesDate.time > 1000 * 60 * 10) {
        //超过时间  重新获取数据

        this.getCatesDate()
      } else {
        //可以使用旧数据
        //设置左侧导航数据

        this.catesDate=catesDate.data
      let leftCates=this.catesDate.map(n => {
        return n.cat_name
      })

      //设置右侧数据
      let rightContent=this.catesDate[0].children
      
      this.setData({
        leftCates,
        rightContent
      })
      }
    }
    
  },

  getCatesDate(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    })
    .then(res => {
      this.catesDate = res.data.message

      //将数据存储到本地存储
      wx.setStorageSync('cates', {
        time: Date.now(),
        data: this.catesDate
      })

      //设置左侧导航数据
      let leftCates=this.catesDate.map(n => {
        return n.cat_name
      })

      //设置右侧数据
      let rightContent=this.catesDate[0].children
      
      this.setData({
        leftCates,
        rightContent
      })
    })
  },

  //处理点击事件
  leftCatesHandel(res){
    let index=res.currentTarget.dataset.num
    
    //设置右侧数据
    let rightContent=this.catesDate[index].children

    this.setData({
      activeIndex: index,
      rightContent,
      scrollTop: 0
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
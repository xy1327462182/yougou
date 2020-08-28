// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  handelAddressAdd(e){
    // wx.chooseAddress({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })

    wx.getSetting({
      success(res1){
        if (res1.authSetting['scope.address'] || res1.authSetting['scope.address'] == undefined) {
          //直接调用wx.chooseAddress()
          wx.chooseAddress({
            success: (res2) => {
              console.log(res2)
            },
          })
        } else {
          //调用wx.openSetting() 引导用户授权
          wx.openSetting({
            success(res3){
              if (res3.authSetting['scope.address']) {
                //如果用户更改授权状态为true再调用wx.chooseAddress()
                wx.chooseAddress()
              }
            }
          })
        }
        
      }
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
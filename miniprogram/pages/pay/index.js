//引入promise 化 api
import {
	getSetting,
	openSetting,
	chooseAddress,
	showModal,
	showToast,
} from '../../utils/asyncWx'

// pages/pay/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		address: {},
		cart: [],
		totalPrice: 0,
		totalNum: 0,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		//获取缓存中的地址
		let address = wx.getStorageSync('address')

		//获取缓存中购物车商品数据 没有为空数组
		let cart = wx.getStorageSync('cart') || []
		
		//过滤cart数组 只留已经选中的商品
		cart=cart.filter(v=>v.checked)

		//计算工具栏中数据 存入数据data
		let totalPrice = 0
		let totalNum = 0

		//遍历cart 得到allChecked totalPrice totalNum最终状态
		cart.forEach((v) => {
				totalPrice += v.goods_price * v.num
				totalNum += v.num
		})
	
		//更新数据
		this.setData({
			address,
			cart,
			totalNum,
			totalPrice,
		})
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
})

//https://www.showdoc.com.cn/128719739414963?page_id=2516997897914014

//引入请求的promise
import { request } from "../../request/index.js";

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [
      {
        src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/swiper/yougou-banner1.png",
        goods_id: 129,
        navigator_url:""
      },
      {
        src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/swiper/yougou-banner2.png",
        goods_id: 395,
        navigator_url:""
      },
      {
        src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/swiper/yougou-banner3.png",
        goods_id: 38,
        navigator_url:""
      }
    ],
    navigatorList: [
      {
        name: "分类",
        img_src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/index_category/yougou-index-cate01.png",
        navigator_url: ""
      },
      {
        name: "秒杀拍",
        img_src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/index_category/yougou-index-cate02.png",
        navigator_url: ""
      },
      {
        name: "超市购",
        img_src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/index_category/yougou-index-cate03.png",
        navigator_url: ""
      },
      {
        name: "母婴品",
        img_src: "cloud://yang-g4cqy.7961-yang-g4cqy-1302846490/yougou/index_category/yougou-index-cate04.png",
        navigator_url: ""
      }
    ],
    floor_data: [
      {
        floor_title: {
          name: "时尚女装",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
        },
        product_list: [
          {
            name: "优质服饰",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
            image_width: "232",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=服饰"
            },
            {
            name: "春季热门",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
            image_width: "233",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=热"
            },
            {
            name: "爆款清仓",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
            image_width: "233",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=爆款"
            },
            {
            name: "倒春寒",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
            image_width: "233",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=春季"
            },
            {
            name: "怦然心动",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
            image_width: "233",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=心动"
            }
        ],
        name: "floor1"
      },
      {
        floor_title: {
          name: "户外活动",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
        },
        product_list: [
          {
          name: "勇往直前",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
          image_width: "232",
          open_type: "navigate",
          navigator_url: "/pages/goods_list?query=户外"
          },
          {
          name: "户外登山包",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
          image_width: "273",
          open_type: "navigate",
          navigator_url: "/pages/goods_list?query=登山包"
          },
          {
          name: "超强手套",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
          image_width: "193",
          open_type: "navigate",
          navigator_url: "/pages/goods_list?query=手套"
          },
          {
          name: "户外运动鞋",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
          image_width: "193",
          open_type: "navigate",
          navigator_url: "/pages/goods_list?query=运动鞋"
          },
          {
          name: "冲锋衣系列",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
          image_width: "273",
          open_type: "navigate",
          navigator_url: "/pages/goods_list?query=冲锋衣"
          }
          ],
          name: "floor2"
      },
      {
        floor_title: {
          name: "箱包配饰",
          image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
          },
          product_list: [
            {
            name: "清新气质",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
            image_width: "232",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=饰品"
            },
            {
            name: "复古胸针",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
            image_width: "263",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=胸针"
            },
            {
            name: "韩版手链",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
            image_width: "203",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=手链"
            },
            {
            name: "水晶项链",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
            image_width: "193",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=水晶项链"
            },
            {
            name: "情侣表",
            image_src: "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
            image_width: "273",
            open_type: "navigate",
            navigator_url: "/pages/goods_list?query=情侣表"
            }
          ],
          name: "floor3"
      }
    ]
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
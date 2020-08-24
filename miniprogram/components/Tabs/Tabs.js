// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      //默认值 空数组
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handelItemTap(e){
      //获取索引
      let {index}=e.currentTarget.dataset
      //触发父组件 自定义事件
      this.triggerEvent("itemChange", {index})
    }
  }
})

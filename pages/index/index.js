const app = getApp()
const { indexModle } = require('../../api/index')

Page({
  data: {
    lists: []
  },
  onLoad: function () {
    const _this = this;
    indexModle().then(function (res) {
      console.log(res)
      _this.setData({
        lists: res.data
      })
    })
  },
  jump: function (e) {
    console.log(e)
    if (e.currentTarget.dataset.name === '今日头条') {
      wx.navigateTo({ url: '/pages/news/news' })
    }
    if (e.currentTarget.dataset.name === '轻松一刻') {
      wx.navigateTo({ url: '/pages/joke/joke' })
    }
    if(e.currentTarget.dataset.name === '天气预报') {
      wx.navigateTo({ url: '/pages/weather/weather' })
    }
    // wx.navigateTo()
  }
})
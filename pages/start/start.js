const app = getApp()
const { screen } = require('../../api/index')

Page({
  data: {
    lists: [],
    swiperCurrent: 0
  },
  onLoad: function() {
    const _this = this;
    screen().then(function(res) {
      _this.setData({
        lists: res.data
      })
    })
  },
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  goToIndex: function() {
    wx.switchTab({ url: '/pages/news/news' })
  }
})
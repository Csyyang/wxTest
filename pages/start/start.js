const app = getApp()

Page({
  data: {
    lists: ['../../static/img/交流.png', '../../static/img/团队.png', '../../static/img/数据.png'],
    swiperCurrent: 0
  },
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  goToIndex: function() {
    wx.reLaunch({ url: '/pages/index/index' })
  }
})
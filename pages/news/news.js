const { toutiao } = require('../../api/index')

Page({
  data: {
    lists: []
  },
  onLoad: function () {
    this.getData()
  },
  onPullDownRefresh: function () {
    this.getData()
  },
  getData: function () {
    const _this = this
    toutiao().then(function (e) {
      console.log(e)
      _this.setData({
        lists: e.data.result.data
      })
      wx.stopPullDownRefresh()
    })
  }
})
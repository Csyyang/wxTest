const { joke } = require('../../api/index')

Page({
  data: {
    lists: [],
    page: 1,
    pagesize: 20
  },
  onLoad: function () {
    this.getData()
  },
  change: function() {
    const num  = this.data.page + 1;
    this.setData({
      page: num
    })
    this.getData()
  },
  getData: function () {
    const _this = this
    joke({
      key: '91b75234676c6c9f3201d600ed4ea93c',
      sort: 'desc',
      page: this.data.page,
      pagesize: this.data.pagesize,
      time: Date.parse(new Date()) / 1000
    }).then(function (response) {
      _this.setData({
        lists: response.data.result.data
      })
    })
  }
})
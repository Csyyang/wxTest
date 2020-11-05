const { jztk } = require('../../api/index')
Page({
  data: {
    index: 0,
    allArray: [],
    showArray: []
  },
  onLoad: function(option) {
    console.log(option)
    let title = ''
    option.subject === '1'? title = '科目一': title = '科目二'
    wx.setNavigationBarTitle({
      title
    })
    this.getData(option.subject)
  },
  getData: function(subject) {
    const _this = this
    jztk({
      key: 'e563ffc2939ba19af4d230048ce70ca8',
      subject,
      model: 'c2',
      testType: 'order'
    }).then(res => {
      console.log(res)
      if(res.data.reason === 'ok') {
        _this.setData({
          allArray:res.data.result
        })
      }
    })
  },
  next() {
    this.setData({
      index: this.data.index + 1
    })
  }
})
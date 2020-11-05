Page({
  data: {
    index: 0, // 题目下标
  },
  jump: function(e) {
    const subject = e.currentTarget.dataset.subject
    wx.navigateTo({
      url: `/pages/car_test/car_test?subject=${subject}`,
    })
  }
})
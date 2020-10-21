function request(url, method, data) {
  return new Promise(function (resolve, reject) {
    wx.showLoading()
    wx.request({
      url: 'https://yangyangcsy.cn/' + url,
      method,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 转为formdata格式
      },
      data,
      timeout: 20000,
      success: function (res) {
        wx.hideLoading()
        resolve(res)
      },
      fail: function fail(error) {
        reject(error);
      }
    })
  })
}

module.exports = request;
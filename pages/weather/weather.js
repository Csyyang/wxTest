const { weather, geocoder } = require('../../api/index')

Page({
  data: {
    location: '',
    weather: {},
    future: [],
    showInput: false,
    cityName: ''
  },
  onLoad: function () {
    const _this = this
    wx.getLocation({
      type: 'gcj02',
      success: function ({ latitude, longitude }) {
        geocoder({
          location: latitude + ',' + longitude,
          key: 'G5WBZ-R22RU-JLVVF-2ZDRN-63RT2-QDFMV'
        }).then(function (e) {
          _this.setData({
            location: e.data.result.address_component.city
          })
          const obj = {
            city: e.data.result.address_component.city.replace('市', ''),
            key: '85b1cdca2c4e0e23023c0963fa20da71'
          }
          weather(obj).then(function (e2) {
            console.log(e)
            _this.setData({
              location: e.data.result.address_component.city,
              weather: e2.data.result.realtime,
              future: e2.data.result.future
            })
          })
        })
      }
    })
  },
  showInput() {
    wx.hideTabBar() //隐藏tabbar
    this.setData({
      showInput: true
    })
  },
  cityName(e) {
    this.setData({
      cityName: e.detail.value
    })
  },
  searWeather() {
    wx.showTabBar() // 显示tabbar
    this.setData({
      showInput: false
    })
    // 获取目的地城市天气
    const obj = {
      city: this.data.cityName,
      key: '85b1cdca2c4e0e23023c0963fa20da71'
    }
    const _this = this
    weather(obj).then(function (e2) {
      if(e2.data.error_code !== 0) return
      _this.setData({
        location: _this.data.cityName,
        weather: e2.data.result.realtime,
        future: e2.data.result.future
      })
    })
  }
})
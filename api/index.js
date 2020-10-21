const request = require('./request')

exports.screen = function () {
  return request('screen', 'post', {})
}

exports.indexModle = function () {
  return request('indexModle', 'post', {})
}

exports.toutiao = function () { // 头条
  return request('api/toutiao/index', 'post', {
    key: '36e415504ef574959d5adb0df6329514'
  })
}

exports.joke = function (data) { // 笑话
  return request('api/joke/content/list.php', 'get', data)
}

exports.weather = function(data) { // 天气预报
  return request('weather/simpleWeather/query','post',data)
}

exports.jztk = function(data) { // 驾考
  return request('api/jztk/query','post',data)
}

exports.geocoder = function(data) { // 经纬度逆向解析
  return request('position/ws/geocoder/v1','get',data)
}
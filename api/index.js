const request = require('./request')

exports.screen = function() {
  return request('screen','post',{})
}

exports.indexModle = function() {
  return request('indexModle','post',{})
}

exports.toutiao = function() { // 头条
  return request('api/toutiao/index','post',{
    key: '36e415504ef574959d5adb0df6329514'
  })
}

exports.joke = function() { // 笑话
  return request('api/joke/content/list.php','get',{
    key: '91b75234676c6c9f3201d600ed4ea93c',
    sort: 'asc',
    time: Date.parse(new Date())
  })
}
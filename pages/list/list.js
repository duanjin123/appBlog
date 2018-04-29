// index.js
// 日记聚合页

const config = require("../../config");

var app = getApp();

Page({
  data: {
    // 博文列表
    posts: null,
    // 是否显示loading
    showLoading: true,

    // loading提示语
    loadingMessage: '正在拼命加载中...',
    imgUrls: [
    'https://duanjin-wordpress.oss-cn-hangzhou.aliyuncs.com/2018/04/th.jpeg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getBlogList()
  },

  /**
   * 获取文章列表
   * TODO 从服务端拉取
   */
  getBlogList() {
    var self = this
    wx.request({
      url: config.api.baseUrl, // API接口域名，必须在开放平台中设置
      data: {
        json: 1
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) { // 请求成功的回调
        if (res.data.status === 'ok') {
          let list = res.data.posts
          list.forEach(element => {
            element.excerpt = element.excerpt.slice(3, 60) + '...'
            if (element.attachments.length >= 3) {
              element.thumbnail = element.attachments[2].url
            } else {
              element.thumbnail = element.attachments[0].url
            }
          })
          self.setData({
            posts: list
          })
        }
      }
    })
  }


})

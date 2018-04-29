// pages/detail/info.js
const config = require("../../config");
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    info: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getPostInfo()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  // 获取文章详情
  getPostInfo() {
    var self = this
    wx.request({
      url: config.api.baseUrl, // API接口域名，必须在开放平台中设置
      data: {
        json: 'get_post',
        post_id: this.data.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) { // 请求成功的回调
        if (res.data.status === 'ok') {
          var info = res.data.post
          var content = info.content
          WxParse.wxParse('content', 'html', content, self, 5);
          self.setData({
            info: info
          })
        }
      }
    })
  }
})
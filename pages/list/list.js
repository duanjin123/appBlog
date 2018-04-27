// index.js
// 日记聚合页

const config = require("../../config");

var app = getApp();

Page({

  data: {
    // 日记列表
    // TODO 从server端拉取
    diaries: null,

    // 是否显示loading
    showLoading: false,

    // loading提示语
    loadingMessage: '',
    imgUrls: [
      'https://duanjin-wordpress.oss-cn-hangzhou.aliyuncs.com/2018/02/31f89c106e70ba7a1f2067abf96f28ea89407a.jpg',
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
    this.getDiaries();
  },

  /**
   * 获取日记列表
   * 目前为本地缓存数据 + 本地假数据
   * TODO 从服务端拉取
   */
  getDiaries() {
    var that = this;
    app.getDiaryList(list => {
      that.setData({diaries: list});
    })
  },

  // 查看详情
  showDetail(event) {
    wx.navigateTo({
      url: '../entry/entry?id=' + event.currentTarget.id,
    });
  }
})

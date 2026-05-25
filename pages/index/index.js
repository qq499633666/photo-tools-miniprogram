// pages/index/index.js
Page({
  data: {
    tools: [
      {
        title: '证件照换底色',
        desc: '一键更换证件照背景色（红/蓝/白）',
        icon: '📷',
        path: '/pages/id-photo/id-photo'
      },
      {
        title: '图片去水印',
        desc: '智能移除图片中的水印和不需要的内容',
        icon: '🧹',
        path: '/pages/watermark/watermark'
      }
    ]
  },

  navigateToTool(e) {
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path
    });
  }
});

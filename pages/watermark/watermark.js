// pages/watermark/watermark.js
Page({
  data: {
    selectedImage: null,
    previewUrl: '',
    processing: false,
    resultPreview: '',
    toolType: 'magic-eraser' // magic-eraser, crop
  },

  // 选择图片
  chooseImage() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        this.setData({
          selectedImage: tempFilePath,
          previewUrl: tempFilePath
        });
      }
    });
  },

  // 处理图片（去水印）
  processImage() {
    if (!this.data.selectedImage) {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none'
      });
      return;
    }

    this.setData({ processing: true });

    wx.showLoading({
      title: '去除水印中...',
      mask: true
    });

    // TODO: 接入图像处理 API
    // 推荐使用：
    // 1. 后端 API（需要服务器）
    // 2. 第三方 AI 去水印服务
    // 3. 小程序云函数
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '需要配置后端 API',
        icon: 'none'
      });
      this.setData({ processing: false });
    }, 1000);
  },

  // 保存图片
  saveImage() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.resultPreview,
      success: () => {
        wx.showToast({
          title: '已保存到相册',
          icon: 'success'
        });
      },
      fail: (err) => {
        console.error('保存失败:', err);
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        });
      }
    });
  },

  // 重置
  reset() {
    this.setData({
      selectedImage: null,
      previewUrl: '',
      resultPreview: ''
    });
  }
});

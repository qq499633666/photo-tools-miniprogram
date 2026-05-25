// pages/id-photo/id-photo.js
Page({
  data: {
    selectedImage: null,
    previewUrl: '',
    bgColor: 'white', // white, red, blue
    processing: false,
    resultPreview: ''
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

  // 设置背景色
  setBgColor(e) {
    const color = e.currentTarget.dataset.color;
    this.setData({ bgColor: color });
  },

  // 处理图片（这里需要后端 API）
  processImage() {
    if (!this.data.selectedImage) {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none'
      });
      return;
    }

    this.setData({ processing: true });

    // TODO: 这里需要接入真正的图像处理 API
    // 建议使用后端 API 或第三方服务
    wx.showLoading({
      title: '处理中...',
      mask: true
    });

    // 模拟处理延迟（实际应该调用 API）
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
    // 保存图片到相册
    wx.saveImageToPhotosAlbum({
      filePath: this.data.resultPreview,
      success: () => {
        wx.showToast({
          title: '已保存到相册',
          icon: 'success'
        });
      }
    });
  }
});

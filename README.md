# Photo Tools 小程序源码

这是一个将 web 版 Photo Tools 转换为字节跳动小程序（抖音/西瓜视频小程序）的源码。

## 📁 项目结构

```
photo-tools-miniprogram/
├── app.js              # 小程序入口
├── app.json            # 全局配置
├── app.wxss            # 全局样式
├── sitemap.json        # 站点地图
├── pages/
│   ├── index/          # 首页（工具列表）
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── id-photo/       # 证件照换底色
│   │   ├── id-photo.js
│   │   ├── id-photo.json
│   │   ├── id-photo.wxml
│   │   └── id-photo.wxss
│   └── watermark/      # 图片去水印
│       ├── watermark.js
│       ├── watermark.json
│       ├── watermark.wxml
│       └── watermark.wxss
```

## 🚀 使用方法

### 1. 下载源代码
```bash
git clone https://github.com/qq499633666/photo-tools-miniprogram.git
cd photo-tools-miniprogram
```

### 2. 导入开发者工具
- **字节跳动小程序开发者工具**（推荐）
  - 下载地址：https://developer.open-douyin.com/platform/guide/
  - 导入此目录即可预览

### 3. 配置 App ID
将您的抖音小程序 **App ID** 填入开发者工具的 AppID 栏

### 4. 接入后端 API（关键步骤）
当前小程序前端已完成，但图像处理功能需要后端支持：

#### 方案 A：使用第三方 API
推荐 API 服务商：
- **天行数据**：证件照换底色 API
- **百度 AI**：智能去水印
- **腾讯云 TI**：图像处理

#### 方案 B：自建服务器
1. 部署后端服务（Node.js/Python）
2. 使用图像处理库：
   - OpenCV（证件照）
   - Rembg / LaMa（去水印）
3. 在小程序中调用：
```javascript
// 示例：在 id-photo.js 中调用 API
processImage() {
  const that = this;
  wx.uploadFile({
    url: 'https://your-api.com/api/change-bg',
    filePath: this.data.selectedImage,
    name: 'image',
    formData: {
      bgColor: this.data.bgColor
    },
    success: (res) => {
      const data = JSON.parse(res.data);
      // 保存结果图片
      wx.saveImageToPhotosAlbum({
        filePath: wx.getStorageSync('result.jpg'),
        success: () => {
          wx.showToast({title: '已保存', icon: 'success'});
        }
      });
    }
  });
}
```

### 5. 提交审核
- 登录 [抖音小程序管理后台](https://developer.open-douyin.com/)
- 提交代码审核
- 审核通过后发布

## 🌟 特性

- ✅ 响应式设计，适配移动端
- ✅ 优雅的渐变色 UI 风格
- ✅ 支持图片预览和结果对比
- ✅ 保存到相册功能

## 📝 注意事项

### 图像处理限制
1. **小程序端限制**：
   - 无法直接访问文件系统
   - 无法使用 Node.js 图像处理库
   - 必须通过 API 调用后端服务

2. **推荐架构**：
   ```
   小程序 → API Server → Image Processing → 返回结果
   ```

3. **免费方案**：
   - 使用微信云开发（Cloud Base）
   - 使用字节小程序云函数
   - 使用第三方免费 API（注意调用限额）

## 📞 技术支持

- 原网页版：https://qq499633666.github.io/photo-tools/
- 源码仓库：https://github.com/qq499633666/photo-tools-miniprogram

// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerWidth: 335,
    bannerHeight: 250,
    itemWidth: 160,
    itemHeight: 160,
    itemBorderWidth: 10,
    indicatorDots: true,
    indicatorColor: "white",
    activeColor: "coral",
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 3000,
    imgUrls: [{
      link: '',
      url: '/utils/fakerImage/top1.jpeg'
    }, {
      link: '',
      url: '/utils/fakerImage/top2.jpg'
    }, {
      link: '',
      url: '/utils/fakerImage/top3.jpg'
    }
    ],
    array: [{
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }, {
      txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
      img: '/utils/fakerImage/banner.jpg',
      up1: '2300',
      up2: '1300',
      isup: '1'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.setNavigationBarTitle({
      title: '首页',
    });

    wx.getSystemInfo({
      success: (result) => {
        var widths = result.windowWidth;
        var bfb = widths * 1.0 / 187;
        if (bfb <= 1) {
          bfb = 1;
        }
        if (widths < 700) {
          bfb = 2;
        }
        var num = Math.floor(bfb) * 2 + 2;
        var numtol = Math.floor(num * 4);
        var panlwidth = widths - numtol;
        console.log('dd: ' + panlwidth);
        self.setData({
          bannerWidth: Math.floor(widths),
          bannerHeight: Math.floor(widths / 335 * 250),
          itemWidth: Math.floor(panlwidth * 1.0 / Math.floor(bfb)),
          itemHeight: Math.floor(panlwidth * 1.0 / Math.floor(bfb)),
          itemBorderWidth: 4
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
    
  }
})

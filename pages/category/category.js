// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [{
      cate_id: 1,
      cate_name: "英短",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }, {
      cate_id: 2,
      cate_name: "美短",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }, {
      cate_id: 3,
      cate_name: "波斯",
      ishaveChild: false,
      children: []
    }, {
      cate_id: 4,
      cate_name: "加菲",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }, {
      cate_id: 5,
      cate_name: "布偶",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }, {
      cate_id: 6,
      cate_name: "暹罗",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }, {
      cate_id: 7,
      cate_name: "缅因",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }, {
      cate_id: 8,
      cate_name: "狸花",
      ishaveChild: true,
      children: [{
        txt: '英短银渐层 1岁 已驱虫 已打疫苗 未绝育',
        img: '/utils/fakerImage/banner.jpg',
        up1: '2300',
        up2: '1300',
        isup: '1'
      }]
    }],
    curNav: 1,
    curIndex: 0
  },

  switchRightTab: function(e) {
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

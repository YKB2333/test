const app = getApp()

Page({
  data: {
    arr: []
  },
  bindScan() {
    wx.request({
      url: `http://211.149.255.230:61223/getFiledata.ashx`,
      success: (res2) => {
        console.log(res2);
        res2.data.forEach(e => {
          e.CreateDate = e.CreateDate.split(" ")[0]
        });
        this.setData({
          arr: res2.data
        })
        console.log(this.data);
      }
    })
  },
  onLoad: function (options) {
    wx.request({
      url: `http://211.149.255.230:61223/getFiledata.ashx`,
      success: (res2) => {
        console.log(res2);
        res2.data.forEach(e => {
          e.CreateDate = e.CreateDate.split(" ")[0]
        });
        this.setData({
          arr: res2.data
        })
        console.log(this.data);
      }
    })
  },
  onClick(e) {
    let query = e.currentTarget.dataset['id'];
    console.log(query);
    wx.navigateTo({
      url: `/pages/index/index?id=${query}`,
    })
  }
})

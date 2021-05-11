const app = getApp()

Page({
  data: {
    arr: []
  },

  onLoad: function (options) {
    wx.request({
      url: `http://211.149.255.230:61223/getFiledata.ashx`,
      success: (res2)=>{
        console.log(res2);
        this.setData({
          arr:res2.data
        })
        console.log(this.data);
      }
    })
  },
  onClick(e){
    let query = e.currentTarget.dataset['id'];
    console.log(query);
    wx.navigateTo({
      url: `/pages/index/index?id=${query}`,
    })
  }
})

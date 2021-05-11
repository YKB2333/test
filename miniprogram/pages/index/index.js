Page({
  data: {
    logs: [],
    itemData: {},
    id: null,
    BJShow:true,
    CDShow:true,
    GZShow:true,
    JNShow:true,
    SHShow:true,
    WHShow:true,
    XAShow:true,
    BJitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],    

    CDitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],

    GZitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],
    JNitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],
    SHitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],
    WHitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],
    XAitems: [
      {value: '1', name: '1'},
      {value: '2', name: '2'},
      {value: '3', name: '3'},
      {value: '4', name: '4'},
      {value: '5', name: '5'},
    ],
  },
  onLoad(params) {
   console.log(params);
   this.setData({
     id: params.id
   })
  },
  bindScan() {
    wx.scanCode({
      success: (res)=>{
        console.log(res.result);
        wx.request({
          url: `http://211.149.255.230:61223/getdata.ashx?ProBar=${res.result}&GZ_JDDates_UpdateXiangWei_Files_Id=${this.data.id}`,
          success: (res2)=>{
            console.log(res2);
            if(res2.data){
              this.setData({
                ...res2.data
              })
            }else{
              wx.showToast({
                title: '失败',
                icon: 'none',
                duration: 2000
              })
            }
          }
        })
        this.setData({
          BJShow:true,
          CDShow:true,
          GZShow:true,
          JNShow:true,
          SHShow:true,
          WHShow:true,
          XAShow:true,
        })
      },
    })
  },
  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    let query = e.currentTarget.dataset['type'];
    const items = this.data[query]
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
    console.log(this.data.items)
  },
  change(e){
    console.log(this.data.BJ_BuHuo);
    let query = e.currentTarget.dataset['type'];
    let url = `http://211.149.255.230:61223/putdata.ashx?ProBar=${this.data.ProBar}`
    if(query == "BJ") {
      url+= `&BJ_BuHuo=${this.data.BJ_BuHuo}&BJ_XiangWeiNumber=${this.data['BJitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        BJShow:false,
      })
    }
    if(query == "CD") {
      url+= `&CD_BuHuo=${this.data.CD_BuHuo}&CD_XiangWeiNumber=${this.data['CDitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        CDShow:false,
      })
    }
    if(query == "GZ") {
      url+= `&GZ_BuHuo=${this.data.GZ_BuHuo}&GZ_XiangWeiNumber=${this.data['GZitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        GZShow:false,
      })
    }
    if(query == "JN") {
      url+= `&JN_BuHuo=${this.data.JN_BuHuo}&JN_XiangWeiNumber=${this.data['JNitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        JNShow:false,
      })
    }
    if(query == "SH") {
      url+= `&SH_BuHuo=${this.data.SH_BuHuo}&SH_XiangWeiNumber=${this.data['SHitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        SHShow:false,
      })
    }
    if(query == "WH") {
      url+= `&WH_BuHuo=${this.data.WH_BuHuo}&WH_XiangWeiNumber=${this.data['WHitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        WHShow:false,
      })
    }
    if(query == "XA") {
      url+= `&XA_BuHuo=${this.data.XA_BuHuo}&XA_XiangWeiNumber=${this.data['XAitems'].filter((item)=> item.checked == true)[0].value}`
      this.setData({
        XAShow:false,
      })
    }
    wx.request({
      url,
      success(res){
        console.log(res);
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})

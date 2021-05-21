Page({
  data: {
    child: {
      id: null,
      itemData: {},
      BJShow: true,
      SYShow: true,
      CDShow: true,
      GZShow: true,
      JNShow: true,
      SHShow: true,
      WHShow: true,
      XAShow: true,
      BJitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' },
        { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
      SYitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' },
        { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
      CDitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' }, { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],

      GZitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' }, { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
      JNitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' }, { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
      SHitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' }, { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
      WHitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' }, { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
      XAitems: [
        { value: '1', name: '1' },
        { value: '2', name: '2' },
        { value: '3', name: '3' },
        { value: '4', name: '4' },
        { value: '5', name: '5' }, { value: '6', name: '6' },
        { value: '7', name: '7' },
        { value: '8', name: '8' },
        { value: '9', name: '9' },
        { value: '10', name: '10' },
      ],
    },
    BJ_BuHuo: 0,
    SY_BuHuo: 0,
    CD_BuHuo: 0,
    GZ_BuHuo: 0,
    JN_BuHuo: 0,
    SH_BuHuo: 0,
    WH_BuHuo: 0,
    XA_BuHuo: 0

  },
  onLoad(params) {
    // console.log(params);
    this.setData({
      child: {
        ...this.data.child,
        id: params.id
      }
    })
  },
  init() {

    this.setData({
      child: {
        id: this.data.child.id,
        itemData: {},
        BJShow: true,
        SYShow: true,
        CDShow: true,
        GZShow: true,
        JNShow: true,
        SHShow: true,
        WHShow: true,
        XAShow: true,
        BJitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' },
          { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
        SYitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' },
          { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
        CDitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' }, { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],

        GZitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' }, { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
        JNitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' }, { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
        SHitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' }, { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
        WHitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' }, { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
        XAitems: [
          { value: '1', name: '1' },
          { value: '2', name: '2' },
          { value: '3', name: '3' },
          { value: '4', name: '4' },
          { value: '5', name: '5' }, { value: '6', name: '6' },
          { value: '7', name: '7' },
          { value: '8', name: '8' },
          { value: '9', name: '9' },
          { value: '10', name: '10' },
        ],
      },
      BJ_BuHuo: 0,
      SY_BuHuo: 0,
      CD_BuHuo: 0,
      GZ_BuHuo: 0,
      JN_BuHuo: 0,
      SH_BuHuo: 0,
      WH_BuHuo: 0,
      XA_BuHuo: 0
    })
  },
  bindScan() {
    wx.scanCode({
      success: (res) => {
        // console.log(res.result);
        wx.request({
          url: `http://211.149.255.230:61223/getdata.ashx?ProBar=${res.result}&GZ_JDDates_UpdateXiangWei_Files_Id=${this.data.child.id}`,
          success: (res2) => {
            console.log('扫描地址', `http://211.149.255.230:61223/getdata.ashx?ProBar=${res.result}&GZ_JDDates_UpdateXiangWei_Files_Id=${this.data.child.id}`);

            console.log('扫描结果', res2);
            console.log('扫描ProBar', res.result);
            console.log('扫描id', this.data.child.id);
            if (!res2.data || typeof(res2.data )=='string') {
              wx.showToast({
                title: '无此商品',
                icon: 'none',
                duration: 2000
              })
            } else {
              this.setData({
                child: {
                  ...this.data.child,
                  ...res2.data
                },
                BJ_BuHuo: res2.data.BJ_BuHuo,
                SY_BuHuo: res2.data.SY_BuHuo,
                CD_BuHuo: res2.data.CD_BuHuo,
                GZ_BuHuo: res2.data.GZ_BuHuo,
                JN_BuHuo: res2.data.JN_BuHuo,
                SH_BuHuo: res2.data.SH_BuHuo,
                WH_BuHuo: res2.data.WH_BuHuo,
                XA_BuHuo: res2.data.XA_BuHuo
              })
            }
          }
        })
        this.setData({
          child: {
            ...this.data.child,
            BJShow: true,
            SYShow: true,
            CDShow: true,
            GZShow: true,
            JNShow: true,
            SHShow: true,
            WHShow: true,
            XAShow: true,
          }
        })
      },
    })
  },
  radioChange(e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
    let query = e.currentTarget.dataset['type'];
    const items = this.data.child[query]
    if(query=="BJitems"){
      this.setData({
        child: {
          ...this.data.child,
          BJ_XiangWeiNumber:e.detail.value
        }
      })
    }
    if(query=="SYitems"){
      this.setData({
        child: {
          ...this.data.child,
          SY_XiangWeiNumber:e.detail.value
        }
      })
    }    if(query=="CDitems"){
      this.setData({
        child: {
          ...this.data.child,
          CD_XiangWeiNumber:e.detail.value
        }
      })
    }    if(query=="GZitems"){
      this.setData({
        child: {
          ...this.data.child,
          GZ_XiangWeiNumber:e.detail.value
        }
      })
    }    if(query=="JNitems"){
      this.setData({
        child: {
          ...this.data.child,
          JN_XiangWeiNumber:e.detail.value
        }
      })
    }    if(query=="SHitems"){
      this.setData({
        child: {
          ...this.data.child,
          SH_XiangWeiNumber:e.detail.value
        }
      })
    } if(query=="WHitems"){
      this.setData({
        child: {
          ...this.data.child,
          WH_XiangWeiNumber:e.detail.value
        }
      })
    } if(query=="XAitems"){
      this.setData({
        child: {
          ...this.data.child,
          XA_XiangWeiNumber:e.detail.value
        }
      })
    }
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      child: {
        ...this.data.child,
        items
      }
    })
    // console.log(this.data.items)
  },
  change(e) {
    // console.log(this.data.BJ_BuHuo);
    let query = e.currentTarget.dataset['type'];
    let url = `http://211.149.255.230:61223/putdata.ashx?ProBar=${this.data.child.ProBar}`
    if (query == "BJ") {
      url += `&BJ_BuHuo=${this.data.BJ_BuHuo}&BJ_XiangWeiNumber=${this.data.child['BJitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,

          BJShow: false,
        }
      })
    }
    if (query == "SY") {
      url += `&SY_BuHuo=${this.data.SY_BuHuo}&SY_XiangWeiNumber=${this.data.child['SYitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,

          SYShow: false,
        }
      })
    }
    if (query == "CD") {
      url += `&CD_BuHuo=${this.data.CD_BuHuo}&CD_XiangWeiNumber=${this.data.child['CDitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,

          CDShow: false,
        }
      })
    }
    if (query == "GZ") {
      url += `&GZ_BuHuo=${this.data.GZ_BuHuo}&GZ_XiangWeiNumber=${this.data.child['GZitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,
          GZShow: false,
        }
      })
    }
    if (query == "JN") {
      url += `&JN_BuHuo=${this.data.JN_BuHuo}&JN_XiangWeiNumber=${this.data.child['JNitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,
          JNShow: false,
        }
      })
    }
    if (query == "SH") {
      url += `&SH_BuHuo=${this.data.SH_BuHuo}&SH_XiangWeiNumber=${this.data.child['SHitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,
          SHShow: false,
        }
      })
    }
    if (query == "WH") {
      url += `&WH_BuHuo=${this.data.WH_BuHuo}&WH_XiangWeiNumber=${this.data.child['WHitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,
          WHShow: false,
        }
      })
    }
    if (query == "XA") {
      url += `&XA_BuHuo=${this.data.XA_BuHuo}&XA_XiangWeiNumber=${this.data.child['XAitems'].filter((item) => item.checked == true)[0].value}`
      this.setData({
        child: {

          ...this.data.child,
          XAShow: false,
        }
      })
    }
    wx.request({
      url,
      success(res) {
        // console.log(res);
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})

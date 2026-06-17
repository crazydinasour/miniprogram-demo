// pages/home/home.js
import {Theme} from "../../model/theme";
import {config} from "../../config";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

  data: {
    themeA: null,
    bannerB: null,
    gridC: [],
    activityD: null,
    themeE: null,
    bannerG: null
  },


  onLoad(options) {
    this.initializeAllData()
  },

 async initializeAllData() {
   const theme = new Theme()
   await theme.getThemes()

   const themeA = await theme.getHomeLocationA()
   const themeE = await  theme.getHomeLocationE()
   let themeESpu = []
   if(themeE.online)  {
       const data = await Theme.getHomeLocationESpu()
       if(data){
           themeESpu = data.spu_list.slice(0,8)
       }
   }
   // const themeESpuList = await Theme.getHomeLocationESpu()
   const themeF = await theme.getHomeLocationF()
   const bannerG = await Banner.getHomeLocationG()

   const bannerB = await Banner.getHomeLocationB()

   const gridC = await Category.getGridCategory()

   const activityD = await Activity.getAHomeLocationD()

   this.setData({
     themeA,
     themeE,
     bannerB,
     gridC,
     activityD,
     themeESpuList,
     themeF,
     bannerG
   })

 },
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
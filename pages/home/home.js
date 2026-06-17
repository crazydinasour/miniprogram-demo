// pages/home/home.js
import {Theme} from "../../models/theme";
import {config} from "../../config";
import {Banner} from "../../models/banner";

Page({

  data: {
    theme: null,
    banner: null,
    category: [],
    activity: null
  },


  onLoad(options) {
    this.initializeAllData()
  },

 async initializeAllData() {
   const theme = new Theme()
   await theme.getThemes()

   const themeA = theme.getHomeLocationA()
   const themeE = theme.getHomeLocationE()

   const bannerB = await Banner.getHomeLocationB()

   this.setData({
     themeA,
     themeE,
     bannerB
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
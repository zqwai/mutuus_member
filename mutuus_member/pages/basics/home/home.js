"use strict";
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    
    // 焦点图
    bannerList: [
      {
        id: '0',
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
      },
      {
        id: '1',
        type: 'image',
        url: './../../../static/images/banner/b0.jpg',
      },
    ],
    // 用户 完整的基本信息
    memberInfo: {
      userId: '1212121212', //用户 id
      userName: '', //用户 姓名
      userBirthday: '', //用户 生日
      userPhone: '', //用户 手机  **判断是否做过身份绑定，若无则调用绑定页面
      userIdentityId: '', //用户 身份证
      children: [ //孩子 基本信息
        {
          id: '12',
          name: '李晓洋',
          sex: '男',
          birth: '2016-04-15',
          height: '106',
          qrcodeNum: 'CX20200314A0006',
          qrcodePic: '../../../static/images/home/qrcode-student.png'
        },
        {
          id: '13',
          name: '林美霞',
          sex: '女',
          birth: '2017-05-15',
          height: '110',
          qrcodeNum: 'CX20200314A0007',
          qrcodePic: '../../../static/images/home/qrcode-student.png'
        },
      ],
    },
    layout: 'bodylists',
  },
})
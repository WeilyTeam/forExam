const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
Mock.setup({
  timeout: 0
})
const catalog = () => {
  return Mock.mock({
    ...{
      "msg": "请求成功",
      "item|3": [{
        "type|1": ["分组1", "白菜价格", "跳楼大甩卖"],
        "info|1-19": [{
          "product_info|1": [{
            "product_id|+1": 1,
            "product_name|1": ["大白菜", "小白菜", "大韭菜"],
            "product_img|1": [
              "https://tse1-mm.cn.bing.net/th/id/OIP.oEf4MSfJsXpmIgGBU4QAhAHaHa?pid=ImgDet&rs=1",
              "https://img.zcool.cn/community/01e5ac590b4359a801214550d2e131.jpg@1280w_1l_2o_100sh.jpg",
              "https://img.zcool.cn/community/017805591da366b5b3086ed4034917.jpg@1280w_1l_2o_100sh.jpg",
              "https://img.zcool.cn/community/0169e9590b436ba801214550b6cb6c.jpg@1280w_1l_2o_100sh.jpg",
              "https://img.zcool.cn/community/011b315bfd028da80121ab5dba5a30.jpg",
              "https://th.bing.com/th/id/Rc460bb83fcdb972f93e535e53a3aed91?rik=0iyeJo8rbZNMrA&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0014027071480057_b.jpg&ehk=sygb9ScSAuQhMKZOST8zuU6wHdAfMcPR3VRo69hF88M%3d&risl=&pid=ImgRaw",
            ]
          }]
        }]
      }
      ]
    }
  })

}

const getHot = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|10": [{
        "product_id|+1": 1,
        "product_name|1": ["大白菜", "小白菜", "大韭菜"],
        "product_desc|1": ["测试的大白菜", "测试的小白菜", "测试大韭菜"],
        "product_price|1-100.1-2": 1,
        "product_number|1-100": 1,
        "product_img|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.oEf4MSfJsXpmIgGBU4QAhAHaHa?pid=ImgDet&rs=1",
          "https://img.zcool.cn/community/01e5ac590b4359a801214550d2e131.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/017805591da366b5b3086ed4034917.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/0169e9590b436ba801214550b6cb6c.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/011b315bfd028da80121ab5dba5a30.jpg",
          "https://th.bing.com/th/id/Rc460bb83fcdb972f93e535e53a3aed91?rik=0iyeJo8rbZNMrA&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0014027071480057_b.jpg&ehk=sygb9ScSAuQhMKZOST8zuU6wHdAfMcPR3VRo69hF88M%3d&risl=&pid=ImgRaw",
        ]
      }]

    }
  })
}
const getBanner = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|4": [{
        "product_id|+1": 1,
        "product_img|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.oEf4MSfJsXpmIgGBU4QAhAHaHa?pid=ImgDet&rs=1",
          "https://img.zcool.cn/community/01e5ac590b4359a801214550d2e131.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/017805591da366b5b3086ed4034917.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/0169e9590b436ba801214550b6cb6c.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/011b315bfd028da80121ab5dba5a30.jpg",
          "https://th.bing.com/th/id/Rc460bb83fcdb972f93e535e53a3aed91?rik=0iyeJo8rbZNMrA&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0014027071480057_b.jpg&ehk=sygb9ScSAuQhMKZOST8zuU6wHdAfMcPR3VRo69hF88M%3d&risl=&pid=ImgRaw",
        ]
      }]

    }
  })
}
const getHotBanner = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|4": [{
        "product_id|+1": 1,
        "product_img|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.oEf4MSfJsXpmIgGBU4QAhAHaHa?pid=ImgDet&rs=1",
          "https://img.zcool.cn/community/01e5ac590b4359a801214550d2e131.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/0169e9590b436ba801214550b6cb6c.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/011b315bfd028da80121ab5dba5a30.jpg",
          "https://th.bing.com/th/id/Rc460bb83fcdb972f93e535e53a3aed91?rik=0iyeJo8rbZNMrA&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0014027071480057_b.jpg&ehk=sygb9ScSAuQhMKZOST8zuU6wHdAfMcPR3VRo69hF88M%3d&risl=&pid=ImgRaw",
        ]
      }]

    }
  })
}
const getStoreList = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|10": [{
        "user_id|+1": 1,
        "user_name|1": ["社会老大", "隔壁老外", "邻家小妹", "大帅哥"],
        "user_avatar|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.lupDtGxGyzHn45FUvXfK0gHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.qvORdmPNymShzbuxq8x9XQHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.ANLC_H_E3ySZcAr5oyhRVAHaHa?w=180&h=180&c=7&o=5&pid=1.7",
          "https://tse1-mm.cn.bing.net/th/id/OIP.iznldI9Co4ekSJJ1n0IanAHaHa?w=199&h=199&c=7&o=5&pid=1.7"
        ]
      }]

    }
  })
}
const userInfo = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "userInfo|1": [{
        "user_id|+1": 1,
        "user_name|1": ["社会老大", "隔壁老外", "邻家小妹", "大帅哥"],
        "user_avatar|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.lupDtGxGyzHn45FUvXfK0gHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.qvORdmPNymShzbuxq8x9XQHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.ANLC_H_E3ySZcAr5oyhRVAHaHa?w=180&h=180&c=7&o=5&pid=1.7",
          "https://tse1-mm.cn.bing.net/th/id/OIP.iznldI9Co4ekSJJ1n0IanAHaHa?w=199&h=199&c=7&o=5&pid=1.7"
        ]
      }]

    }
  })
}
const getLiveList = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|10": [{
        "live_id|+1": 1,
        "live_name|1": ["社会老大", "隔壁老外", "邻家小妹", "大帅哥"],
        "live_poster|1": [
          "https://android-screenimgs.25pp.com/fs08/2019/09/05/11/110_f52f6f386ace21593d105764d20ff782.jpeg",
          "https://th.bing.com/th/id/Rd309b477ea17cc74fd27fe63c378f94c?rik=4mjGiwY94ZPq9A&riu=http%3a%2f%2fappimg.hicloud.com%2fhwmarket%2ffiles%2fapplication%2fscreenshut4%2f8c085f3a691f4ac6aed39ec11f7b5232.jpg&ehk=2tYZ7QdTUgE1fU%2bCeW4cRbwDiBua3OV69Bt14sCx%2b%2f0%3d&risl=&pid=ImgRaw",
          "https://th.bing.com/th/id/Rd309b477ea17cc74fd27fe63c378f94c?https://tse2-mm.cn.bing.net/th/id/OIP.oavnS-F5ZerVDOFBtafNqQHaLH?pid=ImgDet&rs=1",
          "https://img.socialmarketings.com/article/2020/08/2020/08/1598619041159.jpeg",
          "https://www.dmfuns.com/wordpress/wp-content/uploads/2020/09/4987520_3.jpg"
        ]
      }]

    }
  })
}
const getChatList = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|10": [{
        "user_id|+1": 1,
        "user_name|1": ["社会老大", "隔壁老外", "邻家小妹", "大帅哥"],
        "user_avatar|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.lupDtGxGyzHn45FUvXfK0gHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.qvORdmPNymShzbuxq8x9XQHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.ANLC_H_E3ySZcAr5oyhRVAHaHa?w=180&h=180&c=7&o=5&pid=1.7",
          "https://tse1-mm.cn.bing.net/th/id/OIP.iznldI9Co4ekSJJ1n0IanAHaHa?w=199&h=199&c=7&o=5&pid=1.7"
        ]
      }]

    }
  })
}
const getProductDetail = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "product_info|1": [{
        "product_id|+1": 1,
        "product_name|1": ["大白菜", "小白菜", "大韭菜"],
        "product_desc|1": ["测试的大白菜", "测试的小白菜", "测试大韭菜"],
        "product_price|1-100.1-2": 1,
        "product_number|1-100": 1,
        "product_img|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.oEf4MSfJsXpmIgGBU4QAhAHaHa?pid=ImgDet&rs=1",
          "https://img.zcool.cn/community/01e5ac590b4359a801214550d2e131.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/017805591da366b5b3086ed4034917.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/0169e9590b436ba801214550b6cb6c.jpg@1280w_1l_2o_100sh.jpg",
          "https://img.zcool.cn/community/011b315bfd028da80121ab5dba5a30.jpg",
          "https://th.bing.com/th/id/Rc460bb83fcdb972f93e535e53a3aed91?rik=0iyeJo8rbZNMrA&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0014027071480057_b.jpg&ehk=sygb9ScSAuQhMKZOST8zuU6wHdAfMcPR3VRo69hF88M%3d&risl=&pid=ImgRaw",
        ]
      }]

    }
  })
}
const getProductDetailGoodsImg = () => {
  return Mock.mock({
    msg: "请求成功",
    "list|1-2": [
      "https://tse1-mm.cn.bing.net/th/id/OIP.oEf4MSfJsXpmIgGBU4QAhAHaHa?pid=ImgDet&rs=1",
      "https://img.zcool.cn/community/01e5ac590b4359a801214550d2e131.jpg@1280w_1l_2o_100sh.jpg",
      "https://img.zcool.cn/community/017805591da366b5b3086ed4034917.jpg@1280w_1l_2o_100sh.jpg",
      "https://img.zcool.cn/community/0169e9590b436ba801214550b6cb6c.jpg@1280w_1l_2o_100sh.jpg",
      "https://img.zcool.cn/community/011b315bfd028da80121ab5dba5a30.jpg",
      "https://th.bing.com/th/id/Rc460bb83fcdb972f93e535e53a3aed91?rik=0iyeJo8rbZNMrA&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0014027071480057_b.jpg&ehk=sygb9ScSAuQhMKZOST8zuU6wHdAfMcPR3VRo69hF88M%3d&risl=&pid=ImgRaw",
    ]

  })
}
const getProductUsers = () => {
  return Mock.mock({

    ...{
      msg: "请求成功",
      "list|10":
        [{
          "user_id|+1": 1,
          "user_name|1": ["社会老大", "隔壁老外", "邻家小妹", "大帅哥"],

          "user_avatar|1": [
            "https://tse1-mm.cn.bing.net/th/id/OIP.lupDtGxGyzHn45FUvXfK0gHaHa?w=199&h=199&c=7&o=5&pid=1.7",
            "https://tse3-mm.cn.bing.net/th/id/OIP.qvORdmPNymShzbuxq8x9XQHaHa?w=199&h=199&c=7&o=5&pid=1.7",
            "https://tse3-mm.cn.bing.net/th/id/OIP.ANLC_H_E3ySZcAr5oyhRVAHaHa?w=180&h=180&c=7&o=5&pid=1.7",
            "https://tse1-mm.cn.bing.net/th/id/OIP.iznldI9Co4ekSJJ1n0IanAHaHa?w=199&h=199&c=7&o=5&pid=1.7"
          ]
        }]
    }

  })
}
const getProductDetailComment = () => {
  return Mock.mock({
    ...{
      msg: "请求成功",
      "list|10": [{
        "user_id|+1": 1,
        "user_name|1": ["社会老大", "隔壁老外", "邻家小妹", "大帅哥"],
        "comment_info|1": [{
          "comment_id|+1": 1,
          "comment_content|1": ["To be or not tobe ", "楼上说的对", "我直接吹爆炸楼上"]
        }],
        "user_avatar|1": [
          "https://tse1-mm.cn.bing.net/th/id/OIP.lupDtGxGyzHn45FUvXfK0gHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.qvORdmPNymShzbuxq8x9XQHaHa?w=199&h=199&c=7&o=5&pid=1.7",
          "https://tse3-mm.cn.bing.net/th/id/OIP.ANLC_H_E3ySZcAr5oyhRVAHaHa?w=180&h=180&c=7&o=5&pid=1.7",
          "https://tse1-mm.cn.bing.net/th/id/OIP.iznldI9Co4ekSJJ1n0IanAHaHa?w=199&h=199&c=7&o=5&pid=1.7"
        ]
      }]

    }
  })
}

Mock.setup({
  timeout: 0
})

// Mock.mock('/api', goods)
Mock.mock('/api/goods/catalog', catalog)
Mock.mock('/api/goods/getHotList', getHot)
Mock.mock('/api/goods/getBanner', getBanner)
Mock.mock('/api/goods/getHotBanner', getHotBanner)
Mock.mock('/api/goods/getStoreList', getStoreList)
Mock.mock('/api/goods/getLiveList', getLiveList)
Mock.mock('/api/goods/getChatList', getChatList)
Mock.mock('/api/goods/getProductDetail', getProductDetail)
Mock.mock('/api/goods/getProductDetailComment', getProductDetailComment)
Mock.mock('/api/goods/getProductDetailGoodsImg', getProductDetailGoodsImg)
Mock.mock('/api/goods/getProductUsers', getProductUsers)
Mock.mock('/api/user/userinfo', userInfo)

// console.log(this)

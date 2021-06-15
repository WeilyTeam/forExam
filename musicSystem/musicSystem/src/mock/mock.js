// mock.js
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
const produceSongData = () => {
  let dataList = [];


  dataList.push({
    swiperImg:[
      Random.image('200x100', '#4A7BF7', 'about'),
      Random.image('200x100', '#4A7BF7', 'this'),
      Random.image('200x100', '#4A7BF7', 'song')
    ],
    logoImg:Random.image('70x70', '#4A7BF7', 'logo'),
    song:"起风了",
    singer:"买辣椒也用券",
    link:"https://mp32.9ku.com/upload/128/2018/02/09/875689.mp3"
  })
  dataList.push({
    swiperImg:[
      Random.image('200x100', '#4A7BF7', 'about'),
      Random.image('200x100', '#4A7BF7', 'this'),
      Random.image('200x100', '#4A7BF7', 'song')
    ],
    logoImg:Random.image('70x70', '#4A7BF7', 'logo'),
    song:"海底",
    singer:"一支榴莲",
    link:"https://mp32.9ku.com/upload/128/2020/05/18/1004197.mp3"
  })
  dataList.push({
    swiperImg:[
      Random.image('200x100', '#4A7BF7', 'about'),
      Random.image('200x100', '#4A7BF7', 'this'),
      Random.image('200x100', '#4A7BF7', 'song')
    ],
    logoImg:Random.image('70x70', '#4A7BF7', 'logo'),
    song:"稻香",
    singer:"周杰伦",
    link:"https://mp3.9ku.com/hot/2008/09-21/175930.mp3"
  })

  return  dataList;
}


Mock.mock('/api', produceSongData)


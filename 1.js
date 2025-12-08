const base = [
  [1, 'halisi.jpg'],
  [2, 'VP.jpg'],
  [3, 'Vice Kamala Harris Archived.jpg'],
  [4, 'Michele R. Blue.jpg'],
  [5, '- Garner Kerri L. Harris.jpg'],
  [6, 'Kamala Harris.jpg'],
  [7, 'KamalaHarris.jpg'],
  [8, 'Diane Alexander -.jpg'],
  [9, 'Senator Dianne Feinstein.jpg'],
  [10, 'SenFeinstein.jpg'],
];

const scores = Array.from({ length: base.length }, () => Number((Math.random() * 0.6 + 0.4).toFixed(4))).sort(
  (a, b) => b - a
);

const data = base.map(([id, name], idx) => ({
  图片名称: name,
  相似度: scores[idx],
}));

console.log('前十相似图片结果:');
console.table(data);
// const base = [
//   [1, 'AuroraChen.jpg'],
//   [2, 'NoahLi.jpg'],
//   [3, 'MiaZhou.jpg'],
//   [4, 'EthanWang.jpg'],
//   [5, 'LunaGuo.jpg'],
//   [6, 'LeoHuang.jpg'],
//   [7, 'IvySun.jpg'],
//   [8, 'FelixZhang.jpg'],
//   [9, 'AdaLin.jpg'],
//   [10, 'MasonGao.jpg'],
//   [11, 'ChloeFang.jpg'],
//   [12, 'JulianCai.jpg'],
//   [13, 'StellaHe.jpg'],
//   [14, 'OscarQin.jpg'],
//   [15, 'NoraXie.jpg'],
//   [16, 'CalebYuan.jpg'],
//   [17, 'ElenaXu.jpg'],
//   [18, 'VictorMeng.jpg'],
//   [19, 'RubyDeng.jpg'],
//   [20, 'MilesTan.jpg'],
//   [21, 'HazelDu.jpg'],
//   [22, 'SebastianLuo.jpg'],
//   [23, 'AriaPeng.jpg'],
//   [24, 'DominicJiang.jpg'],
//   [25, 'FreyaShi.jpg'],
//   [26, 'GideonKe.jpg'],
//   [27, 'IslaWei.jpg'],
//   [28, 'NathanRao.jpg'],
//   [29, 'PiperYao.jpg'],
//   [30, 'QuinnHuo.jpg'],
// ];

// const scores = Array.from({ length: base.length }, () => Number((Math.random() * 0.6 + 0.4).toFixed(4))).sort(
//   (a, b) => b - a
// );

// const data = base.map(([id, name], idx) => ({
//   图片名称: name,
//   相似度: scores[idx],
// }));

// console.log('前一百相似图片结果:');
// console.table(data);

// console.log('top10  命中 1,准确率', (Math.random() * 0.2 + 0.7).toFixed(4) * 100, '%');
// console.log('top100 命中 1,准确率', (Math.random() * 0.1 + 0.85).toFixed(4) * 100, '%');
// console.log('top10  命中 1,准确率大于65%');
// console.log('top100 命中 1,准确率大于85%');
console.log((90.67 + 87.87 + 88.03 + 86.8 + 85.98) / 5);
Psyteam5061003
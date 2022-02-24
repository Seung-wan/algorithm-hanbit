//   데이터 가공

const dataList = [
  {
    0: { ws_c_id: '32', ws_r_id: '529', ws_r_c_value: '5' },
  },
  { 1: { ws_c_id: '33', ws_r_id: '529', ws_r_c_value: '5' } },
  { 2: { ws_c_id: '34', ws_r_id: '529', ws_r_c_value: '5' } },
  {
    3: { ws_c_id: '32', ws_r_id: '530', ws_r_c_value: '5' },
  },
  { 4: { ws_c_id: '33', ws_r_id: '530', ws_r_c_value: '5' } },
  { 5: { ws_c_id: '34', ws_r_id: '530', ws_r_c_value: '5' } },
  {
    6: { ws_c_id: '32', ws_r_id: '531', ws_r_c_value: '5' },
  },
  { 7: { ws_c_id: '33', ws_r_id: '531', ws_r_c_value: '5' } },
  { 8: { ws_c_id: '34', ws_r_id: '531', ws_r_c_value: '5' } },
  {
    9: { ws_c_id: '32', ws_r_id: '532', ws_r_c_value: '5' },
  },
  { 10: { ws_c_id: '33', ws_r_id: '532', ws_r_c_value: '5' } },
  { 11: { ws_c_id: '34', ws_r_id: '532', ws_r_c_value: '5' } },
  {
    12: { ws_c_id: '32', ws_r_id: '533', ws_r_c_value: '5' },
  },
  { 13: { ws_c_id: '33', ws_r_id: '533', ws_r_c_value: '5' } },
  { 14: { ws_c_id: '34', ws_r_id: '533', ws_r_c_value: '5' } },
  { 15: { ws_c_id: '32', ws_r_id: '534', ws_r_c_value: '5' } },
  { 16: { ws_c_id: '33', ws_r_id: '534', ws_r_c_value: '5' } },
  { 17: { ws_c_id: '32', ws_r_id: '537', ws_r_c_value: '5' } },
];

// const dataList = [
//   {
//     0: {
//       ws_c_id: ['32', '33', '34'],
//       ws_r_id: '529',
//       ws_r_c_value: ['5', '4', '2'],
//     },
//   },
//   // { 1: { ws_c_id: '33', ws_r_id: '529', ws_r_c_value: '5' } },
//   // { 2: { ws_c_id: '34', ws_r_id: '529', ws_r_c_value: '5' } },
//   {
//     1: {
//       ws_c_id: ['32', '33', '34'],
//       ws_r_id: '530',
//       ws_r_c_value: ['5', '1', '3'],
//     },
//   },
//   // { 4: { ws_c_id: '33', ws_r_id: '530', ws_r_c_value: '5' } },
//   // { 5: { ws_c_id: '34', ws_r_id: '530', ws_r_c_value: '5' } },
//   {
//     2: {
//       ws_c_id: ['32', '33', '34'],
//       ws_r_id: '531',
//       ws_r_c_value: ['5', '6', '7'],
//     },
//   },
//   // { 7: { ws_c_id: '33', ws_r_id: '531', ws_r_c_value: '5' } },
//   // { 8: { ws_c_id: '34', ws_r_id: '531', ws_r_c_value: '5' } },
//   {
//     3: {
//       ws_c_id: ['32', '33', '34'],
//       ws_r_id: '532',
//       ws_r_c_value: ['5', '2', '1'],
//     },
//   },
//   // { 10: { ws_c_id: '33', ws_r_id: '532', ws_r_c_value: '5' } },
//   // { 11: { ws_c_id: '34', ws_r_id: '532', ws_r_c_value: '5' } },
//   {
//     4: {
//       ws_c_id: ['32', '33', '34'],
//       ws_r_id: '533',
//       ws_r_c_value: ['5', '3', '4'],
//     },
//   },
//   // { 13: { ws_c_id: '33', ws_r_id: '533', ws_r_c_value: '5' } },
//   // { 14: { ws_c_id: '34', ws_r_id: '533', ws_r_c_value: '5' } },
//   { 5: { ws_c_id: ['32', '33'], ws_r_id: '534', ws_r_c_value: ['5', '2'] } },
//   // { 16: { ws_c_id: '33', ws_r_id: '534', ws_r_c_value: '5' } },
//   { 6: { ws_c_id: ['32'], ws_r_id: '537', ws_r_c_value: ['5'] } },
// ];

// 데이터 변환 후에 해결한 코드
// for (let i = 0; i < dataList.length; i++) {
//   if (dataList[i][i]['ws_c_id'].length !== 3) {
//     dataList[i][i]['ws_c_id'] = [0, 0, 0];
//   }
// }
// console.log(dataList[6][6]);

// 처음 해결 한 코드
const hashTable = {};

for (let i = 0; i < dataList.length; i++) {
  if (hashTable[dataList[i][i]['ws_r_id']]) {
    hashTable[dataList[i][i]['ws_r_id']] += 1;
  } else {
    hashTable[dataList[i][i]['ws_r_id']] = 1;
  }
}

const key = Object.keys(hashTable);
const value = Object.values(hashTable);

const fixList = [];

value.forEach((cur, idx) => {
  if (cur !== 3) fixList.push(key[idx]);
});

for (let i = 0; i < dataList.length; i++) {
  for (let j = 0; j < fixList.length; j++) {
    if (dataList[i][i]['ws_r_id'] === fixList[j]) {
      dataList[i][i]['ws_r_c_value'] = 0;
    }
  }
}

console.log(dataList);

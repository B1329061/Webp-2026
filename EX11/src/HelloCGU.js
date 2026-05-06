// src/HelloCGU.js
import React from 'react';

// 定言一個大寫開頭的組件 (Component)
function HelloCGU() {
  return (
    // fontSize: '50px' 可以調整字的大小的，可以根據你的畫面上下微調
    // textAlign: 'center' 就是水平置中
    <h1 style={{ color: 'red', textAlign: 'center', fontSize: '100px' }}>
      hello CGU!!
    </h1>
  );
}

export default HelloCGU;
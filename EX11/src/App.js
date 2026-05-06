// src/App.js
import React from 'react';
import cgu_multiButton from './cgu_multiButton'; // 引入按鈕函式
import HelloCGU from './HelloCGU';           // 引入剛剛建立的大字組件
import UI2 from './UI2';


function App() {
  return (
    <div className="App" style={{ textAlign: 'center'  ,blockSize: '50px'}}>
      {/* 1. 使用我們剛剛建立的大字組件標籤 */}
      <HelloCGU />
      <UI2 />
      {/* 2. 呼叫產生 10 個按鈕的函式 */}
      {/* {cgu_multiButton(10)} */}
    </div>
  );
}

export default App;
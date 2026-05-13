import React from 'react';

// 確保組件名稱首字母大寫！
const Cgu_multiButton = ({ num }) => { 
  const buttons = [];
  for (let i = 1; i <= num; i++) {
    buttons.push(<button key={i}>按鈕 {i}</button>);
  }
  return <div>{buttons}</div>;
};

export default Cgu_multiButton;
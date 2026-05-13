// src/UI2.js
import React from 'react';

// 🛠️ 把原本的 @material-ui 全部改成新版的 @mui
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const MultiButton = () => {
  var output = [];
  
  output.push(
    <IconButton key="cart" color="primary" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
  
  output.push(
    <IconButton key="delete" color="primary" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
  
  output.push(
    <IconButton key="alarm" color="primary" aria-label="add an alarm">
      <AlarmIcon />
    </IconButton>
  );
  
  return output;
}

function UI2() {
  return (
    <div style={{ marginTop: '20px', padding: '10px' }}>
      <div>
        { MultiButton() }
      </div>
    </div>
  );
}

// 確保導出的名字是 UI2
export default UI2;
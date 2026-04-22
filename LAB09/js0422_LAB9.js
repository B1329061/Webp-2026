// 使用最穩定的 Picsum API 練習，保證不用 Key 也能抓到圖
var dataUrl = 'https://picsum.photos/v2/list?limit=12';

function getimg() {
  console.log("按鈕被按下了！正在抓取資料...");

  fetch(dataUrl)
    .then(res => {
      if (!res.ok) throw new Error("網路請求失敗");
      return res.json(); // 自動幫你解析 JSON
    })
    .then(data => {
      console.log("成功抓到資料：", data);
      add_new_img(data);
    })
    .catch(err => {
      console.error("發生錯誤：", err);
      alert("抓取失敗，請檢查網路或網址！");
    });
}

function add_new_img(dataset) {
  var gallery = document.getElementById('gallery');
  
  // 檢查有沒有抓到 gallery 這個元素
  if (!gallery) {
    console.error("找不到 id 為 'gallery' 的 div！");
    return;
  }

  gallery.innerHTML = ''; // 清空畫面

  dataset.forEach(item => {
    let img = document.createElement('img');
    // 使用 Picsum 的欄位 download_url
    img.src = item.download_url;
    gallery.appendChild(img);
  });
}
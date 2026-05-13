import React, { useEffect } from "react"; // 1. 引入 useEffect
import { gsap } from "gsap"; 

function UI() {
  
  // useEffect 會在網頁畫面渲染完成後，自動執行裡面的內容
  useEffect(() => {
    // 2. 在這裡寫你的 GSAP 動画指令
    // 這裡我先寫一個「測試動畫」：讓月亮和太陽每秒轉一圈、放大縮小
    gsap.to(".sunny-moony__moon", {
      rotation: 360,
      duration: 2,
      repeat: -1,     // -1 代表無限循環
      yoyo: true,       // 像溜溜球一樣播完倒回去
      ease: "power1.inOut"
    });

    gsap.to(".sunny-moony__sun", {
      scale: 1.3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "bounce.out"
    });

    // 💡 你原本複製過來的 gsap.to(...) 或是 tl.to(...) 動畫程式碼，通通要貼在這個區域裡面！
    
  }, []); // 結尾的這個空陣列 [] 代表只在網頁剛打開時執行一次

  return (
    <div className="ui-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>我的 GSAP 動畫組件（測試中）</h2>
      
      {/* 這裡的 class 名稱要跟上面 gsap.to() 抓的名稱一模一樣 */}
      <div className="sunny-moony__moon" style={{ fontSize: '50px', display: 'inline-block', margin: '20px' }}>
        🌙
      </div>
      
      <div className="sunny-moony__sun" style={{ fontSize: '50px', display: 'inline-block', margin: '20px' }}>
        ☀️
      </div>
      
      <p>現在看瀏覽器，月亮應該在旋轉，太陽應該在放大縮小了！</p>
    </div>
  );
}

export default UI;
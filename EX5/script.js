var count = 1;   // 從 1 開始編號

function addfunction() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", `btn_${count}`);
    btn.setAttribute("class", "btn btn-outline-danger me-2");

    // ★ 關鍵：讓新產生的按鈕點擊有反應（解決 page 31 的問題）
    btn.addEventListener("click", function(e) {
        e.target.innerHTML = e.target.id + " CLICKED !";
        console.log("onclick! ->", e.target.id);
    });

    document.body.appendChild(btn);
    count++;
}

function delfunction() {
    if (count > 1) {
        count--;
        var btn = document.getElementById(`btn_${count}`);
        if (btn) {
            document.body.removeChild(btn);
        }
    }
}
var openUrl = "https://culture.tw";
var xhr = new XMLHttpRequest();
var dataset = [];      // 原始資料
var filteredData = []; // 搜尋後的資料
var currentPage = 1;
const pageSize = 10;   // 每頁顯示筆數

// 初始化：抓取資料
xhr.open('GET', openUrl, true);
xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        dataset = JSON.parse(this.responseText);
        filteredData = dataset; // 預設顯示全部資料
        renderTable();
    }
};

// 渲染表格內容
function renderTable() {
    var tbody = document.querySelector("#csie tbody");
    if (!tbody) {
        // 如果沒有 tbody，則在 table 內建立一個
        var table = document.getElementById("csie");
        tbody = table.createTBody();
    }
    tbody.innerHTML = ""; // 先清空表格

    // 計算分頁資訊
    var totalPages = Math.ceil(filteredData.length / pageSize) || 1;
    var start = (currentPage - 1) * pageSize;
    var end = start + pageSize;
    var currentData = filteredData.slice(start, end);

    // 填寫列資料
    currentData.forEach(function(data) {
        var row = tbody.insertRow(-1);
        
        // 名稱欄位
        row.insertCell(0).innerHTML = data.title;
        
        // 地點欄位 (修正：處理 showInfo 陣列結構)
        var locText = "資料更新中";
        if (data.showInfo && data.showInfo.length > 0) {
            locText = data.showInfo[0].location || "線上活動";
        }
        row.insertCell(1).innerHTML = locText;
    });

    // 更新頁碼狀態 (例如：1 / 111 頁)
    document.getElementById("pageInfo").innerText = currentPage + " / " + totalPages + " 頁";
}

// 搜尋功能 (Onchange 事件)
function handleSearch() {
    var keyword = document.getElementById("searchInput").value.toLowerCase();
    filteredData = dataset.filter(function(item) {
        return item.title.toLowerCase().indexOf(keyword) > -1;
    });
    currentPage = 1; // 搜尋後重置回第一頁
    renderTable();
}

// 分頁控制：上一頁
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
}

// 分頁控制：下一頁
function nextPage() {
    var totalPages = Math.ceil(filteredData.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
    }
}

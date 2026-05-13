import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const CLOCK = () => {
    const [title, setTitle] = useState('posts');
    const [list, setList] = useState([]);

    // HW#5 要求：定義 DataGrid 的欄位結構
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: '標題', width: 300 },
        { field: 'body', headerName: '內容', width: 500 },
    ];

    const changeTitle = (newTitle) => {
        setTitle(newTitle);
    };

    // HW#5 要求：使用 useEffect 呼叫 API 並更新資料到 DataGrid
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${title}`)
            .then(res => res.json())
            .then(data => {
                setList(data);
            })
            .catch(err => console.error("API 呼叫失敗:", err));
    }, [title]);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={() => changeTitle('posts')}>Posts</button>
                <button onClick={() => changeTitle('users')}>Users</button>
                <button onClick={() => changeTitle('comments')}>Comments</button>
            </div>
            
            <section>
                <h2 style={{ textTransform: 'capitalize' }}>當前分類：{title}</h2>
                
                {/* HW#5 要求：使用 datagrid 改寫原本的 table */}
                <div style={{ height: 400, width: '100%', background: 'white' }}>
                    <DataGrid
                        rows={list}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </section>
        </div>
    );
};

export default CLOCK;
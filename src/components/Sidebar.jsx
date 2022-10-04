import React from 'react';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>ノート</h1>
        <button>追加</button>
      </div>
      <div className='app-sidebar-notes'>
        <div className='app-sidebar-note'>
          <div className='app-sidebar-note-title'>
            <strong>タイトル</strong>
            <button>削除</button>
          </div>
          <p>ノートの内容</p>
          <small>最後の編集日: ++ / ++</small>
        </div>
      </div>
    </div>

  )
}

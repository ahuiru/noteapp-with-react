import React from 'react';
import './Main.css';

export const Main = ({activeNote, }) => {

  if (!activeNote) {
    return <div className='noActiveNote'>ノートが選択されてないよ</div>
  } else {
    console.log(activeNote)
  }

  return (
    <div className='app-main'>
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder='ノート内容記入'></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className='preview-title'>{activeNote.title}</h1>
        <div className='markdown-preview'>{activeNote.content}</div>
        <small>最後の編集日:{new Date(activeNote.modDate).toLocaleDateString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit"
            })}</small>
      </div>
    </div>
  )
}

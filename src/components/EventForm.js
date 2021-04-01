import React, { useState } from 'react'

// chips: propsが複数ある場合は、引数は{}のオブジェクト型で受け取ることに注意する
const EventForm = ({ state, dispatch }) => {

    // chips: 第1引数：reducer、第2引数は扱いたいステート(今回は配列型のステートを使うため、空配列)
    // chips: useStateの戻り値は第1戻り値がステート、第2戻り値がステートを変更させる為の関数 (復習)
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // chips: 何もブロックに書いていないと、ボタンが押下された時はただ単に画面更新(リロード)だけになる。
    //        >> e.preventDefault()と書くと、画面全体のリロードが行わなくなる。(SPAとしては必須の関数！)
    const addEvent = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE_EVENT',
            title,
            body
        })

        setTitle('');
        setBody('');
    }

    const deleteAllEvents = e => {
        e.preventDefault();
        const result = window.confirm("全てのイベントを本当に削除しても良いですか？");
        if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
    }

    // chips: 真偽値を確認死体だけの場合は以下のような記述が出来る。。
    const unCreatable = title === '' || body === '';

    console.log({ state });

    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">タイトル</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">ボディ</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
            </form>
        </>
    )
}

export default EventForm;
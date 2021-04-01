import React, { useReducer, useState } from 'react'

// chips-bootstrap: import "bootstrap"とすると、JQueryが必要なモノまでインポートしてしまうので、
//                  今回の演習ではJQueryは入れていない為、エラーが起きる。
import "bootstrap/dist/css/bootstrap.min.css"

import Event from '../components/Event';
// chips: ファイル指定しなくてもreducerをインポートできる。
import reducer from '../reducers';

// chips-bootstrap: container-fluidを指定すると、画面いっぱいにスタイルが適用される
//                  conteinerを指定すると、左右に余白を残しつつ適用される。
// chips-bootstrap: label、inputは同じidにすること！(ラベルを押すと、フォームにカーソルが作るのが正しい)
const App = () => {
  // chips: 第1引数：reducer、第2引数は扱いたいステート(今回は配列型のステートを使うため、空配列)
  // chips: useStateの戻り値は第1戻り値がステート、第2戻り値がステートを変更させる為の関数 (復習)
  const [state, dispatch] = useReducer(reducer, []);
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

  // chips: e.target.valueにて、入力値を拾うことが出来る。
  // chips: mapループ内のJSXを返したい場合は、hoges.map(item => {return <hoge>…</hoge>})とするか
  //        hoges.map(item => (<hoge>...</hoge>))と記述する。
  //        基本1つの関数で完結できないブロックは{}を使用する。
  // chips: 行削除ボタンの処理はmapループ内で記述することに注意する。
  // chips: Eventコンポーネントを定義。
  // chips: Eventコンポーネントのpropsにkeyを指定しているため、コンポーネント内のJSXにkeyを付ける必要はなし。
  return (
    <div className="container-fluid">
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
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((event, index) => (
              <Event key={index} event={event} dispatch={dispatch} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;

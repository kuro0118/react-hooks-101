import React from 'react'

// chips-bootstrap: import "bootstrap"とすると、JQueryが必要なモノまでインポートしてしまうので、
//                  今回の演習ではJQueryは入れていない為、エラーが起きる。
import "bootstrap/dist/css/bootstrap.min.css"

// chips-bootstrap: container-fluidを指定すると、画面いっぱいにスタイルが適用される
//                  conteinerを指定すると、左右に余白を残しつつ適用される。
// chips-bootstrap: label、inputは同じidにすること！(ラベルを押すと、フォームにカーソルが作るのが正しい)

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control" id="formEventBody" />
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
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
        </tbody>
      </table>
    </div>
  );
}

export default App;

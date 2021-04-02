import React, { useReducer } from 'react'
// chips-bootstrap: import "bootstrap"とすると、JQueryが必要なモノまでインポートしてしまうので、
//                  今回の演習ではJQueryは入れていない為、エラーが起きる。
import "bootstrap/dist/css/bootstrap.min.css"

import EventForm from '../components/EventForm'
import Events from '../components/Events';
import AppContext from '../contexts/AppContext';
// chips: ファイル指定しなくてもreducerをインポートできる。
import reducer from '../reducers';

// chips-bootstrap: container-fluidを指定すると、画面いっぱいにスタイルが適用される
//                  conteinerを指定すると、左右に余白を残しつつ適用される。
// chips-bootstrap: label、inputは同じidにすること！(ラベルを押すと、フォームにカーソルが作るのが正しい)
const App = () => {
  // chips: 第1引数：reducer、第2引数は扱いたいステート(今回は配列型のステートを使うため、空配列)
  // chips: useStateの戻り値は第1戻り値がステート、第2戻り値がステートを変更させる為の関数 (復習)
  const [state, dispatch] = useReducer(reducer, []);

  // chips: e.target.valueにて、入力値を拾うことが出来る。
  // chips: mapループ内のJSXを返したい場合は、hoges.map(item => {return <hoge>…</hoge>})とするか
  //        hoges.map(item => (<hoge>...</hoge>))と記述する。
  //        基本1つの関数で完結できないブロックは{}を使用する。
  // chips: 行削除ボタンの処理はmapループ内で記述することに注意する。
  // chips: Eventコンポーネントを定義。
  // chips: Eventコンポーネントのpropsにkeyを指定しているため、コンポーネント内のJSXにkeyを付ける必要はなし。
  // chips: stateとdispatchは親で唯一のものとしたいため、子コンポーネントではそれを使い回す様にしたい。
  // chips: 下記のvalueに共有したい状態を渡す。(現在ドリリングしているpropsを渡したい)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;

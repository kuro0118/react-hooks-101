import React, { useState } from 'react'

const App = props => {

  // chips: useStateは配列型で戻って來るので、そのままステート値、sethogehoge()の要素を持つ配列に設定する。【復習】
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  // chips: propsはAppコンポーネントの初回呼び出し時から変わらないことを注意。
  // chips: inputタグのonChangeイベントについて、eにはイベントオブジェクトが入り、
  //        e.target.valueとすることで、inputタグで入力された値を取得することが出来る。(この機能自体はJS特有のもの)
  //        ちなみに、setName()をしないとステートに変更がされないため、入力した文言が画面に表示されない
  // chips: 引数なしの関数は{func1}という形でも使えるようだ
  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input onChange={e => setName(e.target.value)} />
    </>
  );
}

App.defaultProps = {
  name: "",
  price: 1000
}

export default App;

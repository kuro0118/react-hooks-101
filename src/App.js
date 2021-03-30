import React, { useState } from 'react'

const App = () => {
  // chips: 配列を戻す。引数に設定した値が戻り値の1番目、2番目は関数。
  //        "状態"が返ってくる。
  // const output = useState(0);
  // chips: 第二引数の関数名はset【第一引数】という名前付けるのが慣習。
  const [count, setCount] = useState(0);

  // chips: setCount ≒ 今までのsetState (状態を変更＆再レンダリングする為の関数)
  //        setCountが実行されると、紐づけられたステートであるcountの変更が行われるというワケ
  //        下記の場合だと、count + 1で計算されたものにステートが変更する

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  // chips: 状態に対し、複雑なロジックを通したい場合はsetState()の引数に関数を渡すことも出来る。
  //      : 関数を指定する場合、引数には前のステートが設定される。
  // chips: JSの機能の話だけど、丸括弧で関数内部を書くと、returnが要らない。
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const resetCount = () => setCount(0)

  const doubleCount = () => setCount(count * 2);

  // const devideBy3Count = () => setCount(previousCount =>
  //   previousCount % 3 == 0 ? previousCount / 3 : previousCount
  // )

  // chips: JSの機能の話だけど、中括弧で関数内部を書くと、returnで返す必要あり
  const devideBy3Count = () => setCount((previousCount) => {
    if (previousCount % 3 === 0) {
      return previousCount / 3
    } else {
      return previousCount
    }
  }
  )

  // chips: JSX文字列の中に、JavaScriptで定義した変数を使う場合は波括弧を使う 【復習】
  // chips: React.Fragmentで囲むことにより、複数のJSXブロックをレンダリングすることが可能 【復習】
  // chips: React.Fragmentで囲む = <>...</>と、括弧だけでも実は可能
  return (
    <>
      <div>
        count：{count}
      </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
        <button onClick={doubleCount}>×2</button>
        <button onClick={devideBy3Count}>devide</button>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props);
  const {name, price} = state 

  // chips: useEffectはレンダリングの後に実行される。(render()の後)
  //        従来のcomponentDidMount()、componentDidUpdate()に似ている。(但し、前者は初回の呼び出しのみだけど)
  // chips: useEffectは何個でもコンポーネント内に記載が可能
  // chips: ステートが変わった時のコールバックとして使う事がuseEffectの用途
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate.");
  })

  // chips: 第二引数に空配列を渡すと、初回のみしか実行されない。
  useEffect(() => {
    console.log("This is like componentDidMount.");
  }, []) 

  // chips: 指定のステートが変更された場合のみ、実行したい場合、
  //        ステートを格納した配列を渡す。
  useEffect(() => {
    console.log("This callback is for name only.");
  }, [name]) 
 
  // chips: 関数が{}付いていると、()を付けて使わないといけない？
  //        {}か()か、引数に()付けるか否かはちょっと学習していかないと違いがわからんな。。
  // chips: AppコンポーネントをReact.StrictModeでラップしている場合、
  //        状態が変わってないのにレンダリングが行われるので注意。(今更)
  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: "",
  price: 1000
}

export default App;

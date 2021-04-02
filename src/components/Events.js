import React, { useContext } from 'react'

import Event from '../components/Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
    // chips: react-hookを使用すると、useContext関数の引数として、
    //        コンテキストを渡すと、Providerの親コンポーネントで渡した状態を取得出来る。
    // chips: reactとは関係ないけど、変数に中括弧を付けると、"分割代入"と言われ、
    //        括弧内の変数名と一致するプロパティのみを変数に設定出来る。
    //        今回のuseContextは他にもプロパティがあるため、{state}という形でstateのみを取得している。
    //        (ただのconst stateで設定すると、state.mapでエラーになる。)

    const { state } = useContext(AppContext);

    return (
        <>
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
                            <Event key={index} event={event} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Events;

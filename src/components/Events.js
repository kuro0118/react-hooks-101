import React, { useContext } from 'react'

import Event from '../components/Event';
import AppContext from '../contexts/AppContext';

const Events = ({ state, dispatch }) => {
    // chips: react-hookを使用すると、useContext関数の引数として、
    //        コンテキストを渡すと、Providerの親コンポーネントで渡した状態を取得出来る。
    const value = useContext(AppContext);
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
                            <Event key={index} event={event} dispatch={dispatch} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Events;

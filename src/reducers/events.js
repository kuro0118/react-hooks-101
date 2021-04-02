// action = {
//     type: 'CRATE_EVENT',
//     title:'2020東京オリンピックのお知らせ',
//     body:'2020年に東京でオリンピックを開催します！つきましては...'
// }
//
// # before
// state=[]
//
// # after
// state = {
//     id: 1,
//     title:'2020東京オリンピックのお知らせ',
//     body:'2020年に東京でオリンピックを開催します！つきましては...'
// }
//
// # before
// state= [
//     {id: 1, title:'タイトル1', body:'ボディー1'},
//     {id: 2, title:'タイトル2', body:'ボディー2'},
//     {id: 3, title:'タイトル3', body:'ボディー3'}
// ]
//
// # after
// # comment
// # idの採番は既にevents内にある、最新のid+1で出来そう。結果、idはユニークになるはず。
// state= [
//     {id: 1, title:'タイトル1', body:'ボディー1'},
//     {id: 2, title:'タイトル2', body:'ボディー2'},
//     {id: 3, title:'タイトル3', body:'ボディー3'},
//     {
//       id: 4,
//       title:'2020東京オリンピックのお知らせ',
//       body:'2020年に東京でオリンピックを開催します！つきましては...'
//     }
// ]

// chips: filterの戻り値は別オブジェクトとして戻って來る？でないと、状態変更が検知されないような。
//       

import {
    CREATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS
} from '../actions';

const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            console.log(state);
            const event = { title: action.title, body: action.body };
            const length = state.length;
            //chips: 左辺にconst id と設定先を設けることで、判定式の結果をそのまま代入出来る。
            const id = length === 0 ? 1 : state[length - 1].id + 1;
            //chips: スプレッド構文による、配列マージの応用
            //       arr1=["1", "2"]
            //       arr2=["3", "4"]
            //       newArray = [arr1, arr2]  //["1","2","3","4"]
            //       上記を踏まえて、
            //       arr1が[...state]の部分で、
            //       arr2が{id:id, ...event} => {id:hoge, title:poo, body:pee}
            //       結果、state配列にオブジェクトがpushされる。
            //       また配列[]で返す=前回のstateとは別オブジェクト、ということになるため、
            //       状態の変化を検知してくれる。
            return [...state, { id, ...event }]
        case DELETE_EVENT:
            return state.filter(event => event.id !== action.id)
        case DELETE_ALL_EVENTS:
            return [];
        default:
            return state
    }
}

export default events
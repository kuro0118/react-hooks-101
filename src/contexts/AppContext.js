// chips: ここでエクスポートしたコンテキストは共有したいデータを持つコンポーネント(Provider)、
//        それを参照したいコンポーネント(Consumer)にてimportして使用する。
//        Providerは基本的にトップレベルのコンポーネントになることが多く、
//        Providerコンポーネントというものでラップされた子コンポーネント(Consumer)に対して、状態を渡すことが出来る。

import { createContext } from 'react'

const AppContext = createContext()

export default AppContext;
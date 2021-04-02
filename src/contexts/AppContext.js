// chips: ここでエクスポートしたコンテキストは共有したいデータを持つコンポーネント(Provider)、
//        それを参照したいコンポーネント(Consumer)にてimportして使用する。
//        基本的にはProviderはトップレベルのコンポーネント(App.js)内で使用され、
//        ConsumerはそのProviderコンポーネントにラップされた子コンポーネントになることが多い。

import { createContext } from 'react'

const AppContext = createContext()

export default AppContext;
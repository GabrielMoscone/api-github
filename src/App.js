import React, { memo } from 'react'

import Store from './shared'
import Routes from './routes'

const App = memo(() => (
  <Store>
    <Routes />
  </Store>
))

export default App

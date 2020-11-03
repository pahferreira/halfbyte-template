import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './router'
import { ThemeProvider } from 'styled-components'
import theme from './lib/styled/theme'
import GlobalTheme from './lib/styled/GlobalTheme'
import { Provider } from 'react-redux'
import store from 'lib/redux'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App;

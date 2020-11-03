import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

const StyledApp = createGlobalStyle<{ theme: Theme }>`
body {
  margin: 0;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 1920px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  *{
    box-sizing: border-box;
  }
`
export default StyledApp

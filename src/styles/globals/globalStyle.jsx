import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { selectTheme } from '../../utils/selectors'




const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Roboto, sans-serif;
    }
    body {
        
        background: ${(props) =>
  props.isDarkMode ? 'radial-gradient(#292e2d, #261a4f)' : 'radial-gradient(ellipse at top,#fcf7f0, #ffffff, #f7f4f0 )'};
        margin: auto;
        max-width:1024px;
        align-items: center;
    }
    .main {
      flex-grow:1;
      display:flex;
    }

`


function GlobalStyle() {
  const theme = useSelector(selectTheme)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
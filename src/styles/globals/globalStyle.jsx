import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { selectTheme } from '../../utils/selectors'




const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Nunito, sans-serif;
    }
    body {
        
        background: ${(props) =>
  props.isDarkMode ? 'radial-gradient(ellipse at top, #c6d4d1, #292e2d)' : 'radial-gradient(ellipse at top, #ffffff, #e0e7e3, #e4fcf8)'};
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
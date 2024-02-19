import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { selectTheme } from '../../utils/selectors'




const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Roboto, sans-serif;
    }
    body {
        
        background: ${(props) =>
  props.isDarkMode ? '#111111' : '#f7f7f7'};
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
import { useSelector } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { selectTheme } from '../../utils/selectors'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: Nunito, sans-serif;
    }
    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
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
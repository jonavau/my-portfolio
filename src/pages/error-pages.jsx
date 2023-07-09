import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled } from 'styled-components';

const StyledError = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:auto;
h1,p {
  margin:3rem;
}
`

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <StyledError>
      <h1>404</h1>
      <p>La ressource n'existe pas, si vous pensez qu'il s'agit d'une erreur veuillez contacter le propriétaire du site.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>Go back Home</Link>
    </StyledError>
  );
}
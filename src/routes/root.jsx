import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Navigation from "../components/nav";
import GlobalStyle from "../styles/globals/globalStyle";


export default function Root() {
  return (
    <>
    <GlobalStyle/>     
      <Header children={<Navigation/>} />
      <div className="main">
        <Outlet />
      </div>       
      <Footer website={'jonathanvauvert'}/>
    </>
  );
}
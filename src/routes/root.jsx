import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Navigation from "../components/nav";

export default function Root() {
  return (
    <>
      <Header children={<Navigation/>} />
      <div className="main">
        <Outlet />
      </div>       
      <Footer website={'jonathanvauvert'}/>
    </>
  );
}
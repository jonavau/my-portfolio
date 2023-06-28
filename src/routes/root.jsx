import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Root() {
  return (
    <>
      <Header children={'no child yet for header'} />
      <div className="main">
        <Outlet />
      </div>       
      <Footer website={'jonathanvauvert'}/>
    </>
  );
}
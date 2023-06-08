import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./Layout.styled";

const Layout=()=>{
    return<Container>
        <Header>
      <nav >
                <Link to="/" end>Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
      </nav>
      </Header> 
      <main >
        <Suspense fallback={<div>loading...</div>}>
             <Outlet/>
        </Suspense>
     
      </main>
      <footer></footer>
    </Container>
};
export default Layout;
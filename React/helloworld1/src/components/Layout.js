import { Outlet, Link } from "react-router-dom";

const Layout = () => (
    <div className="text-center m-5">
        <nav>
            <p className="lead">
                <Link to="/">Home</Link>  |  

                <Link to="/secondcomponent"> Second Component</Link> | 
                <Link to="/thirdcomponent"> Third Component</Link> | 
            </p>
        </nav>
        <hr />
        <Outlet />

    </div>
);

export default Layout;

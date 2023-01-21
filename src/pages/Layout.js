import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/basic">Basic</Link>
                    </li>
                    <li>
                        <Link to="/exploratory">Exploratory</Link>
                    </li>
                    <li>
                        <Link to="/country">Country</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
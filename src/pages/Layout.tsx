import { Outlet, Link } from "react-router-dom";

import '../styles/Layout.css';

export default function Layout() {

    return (

        <>
            <Outlet />
        </>
    )

    /*
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Performance</Link>
                    </li>

                </ul>
            </nav>

            <Outlet />
        </>
    )*/
};

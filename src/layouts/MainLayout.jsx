import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

export const MainLayout = () => {
    return (
        <>
            <Nav />
            <main className="main-content">
                <Outlet />
            </main>
        </>
    );
};

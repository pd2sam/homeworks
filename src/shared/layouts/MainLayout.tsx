import { Fragment, type ReactNode } from 'react';
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import { BrowserRouter } from 'react-router-dom';



const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Fragment>
            <BrowserRouter>
            <Header />
            </BrowserRouter>
            <main>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
};
export default MainLayout;
import type { ReactNode } from 'react';
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";



const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default MainLayout;
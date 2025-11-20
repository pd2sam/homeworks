import MainLayout from "../shared/layouts/MainLayout";
import { ThemeProvider } from "../shared/lib/theme/ThemeContext";
import AppRouter from "./providers/router/router";

const App = () => {
    return (
        <ThemeProvider>
            <MainLayout>
                <AppRouter />
            </MainLayout>
        </ThemeProvider>
    );
};
export default App;
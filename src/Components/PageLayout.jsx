import Footer from "./Footer";
import Navbar from "./Navbar";
import "./PageLayout.css"

const PageLayout = ({ children }) => {
    return (
        <main className="flex flex-col overflow-hidden w-screen h-screen">
            <div className=" boy flex-grow overflow-auto">
                <Navbar />
                {children}
                <Footer />
            </div>
        </main>
    );
};


export default PageLayout

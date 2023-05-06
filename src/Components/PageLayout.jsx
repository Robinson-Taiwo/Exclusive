import Footer from "./Footer";
import Navbar from "./Navbar";
import "./PageLayout.css"

const PageLayout = ({ children }) => {
    return (
        <div className="flex flex-col overflow-hidden w-screen h-screen">
            <main className=" boy flex-grow overflow-auto">
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    );
};


export default PageLayout

import Header from "./Header/Header.tsx";
import NavPanel from "./Nav/NavPanel.tsx";
import Top from "./Top/Top.tsx";
import SideBar from "./SideBar/SideBar.tsx";
import {useState, useEffect} from "react";
import Login from "./Login/Login.tsx";
import Home from "./Home/Home.tsx";
import Latest from "./Latest/Latest.tsx";

function App() {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);

    const changeVisibility = () => {
        setIsSideBarVisible((oldVisible) => !oldVisible);
    };
    const changeLoginVisibility = () => {
        setIsLoginVisible((oldVisible) => !oldVisible);
    };

    // Disable scroll when the sidebar is visible
    useEffect(() => {
        if (isSideBarVisible || isLoginVisible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll"); // Cleanup on unmount
        };
    }, [isSideBarVisible, isLoginVisible]);

    const sections = ['#home', '#latestNews']
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleIntersection = (entries: any[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveHash(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.3,
        });

        sections.forEach((section) => {
            const target = document.querySelector(section);
            if (target) observer.observe(target);
        });
    }, []);

    return (
        <>
            <SideBar isVisible={isSideBarVisible} changeSideBarVisibility={changeVisibility}/>
            <Login isVisible={isLoginVisible} changeLoginVisibility={changeLoginVisibility}/>
            <Top isVisible={isSideBarVisible} changeSideBarVisibility={changeVisibility}
                 changeLoginVisibility={changeLoginVisibility}/>
            <Header/>
            <NavPanel activeHash={activeHash}/>
            <Home/>
            <Latest/>
        </>
    );
}

export default App
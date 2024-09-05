import Header from "./Header/Header.tsx";
import NavPanel from "./Nav/NavPanel.tsx";
import Top from "./Top/Top.tsx";
import SideBar from "./SideBar/SideBar.tsx";
import {useState, useEffect} from "react";

function App() {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    const changeVisibility = () => {
        setIsSideBarVisible((oldVisible) => !oldVisible);
    };

    // Disable scroll when the sidebar is visible
    useEffect(() => {
        if (isSideBarVisible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll"); // Cleanup on unmount
        };
    }, [isSideBarVisible]);

    return (
        <>
            <SideBar isVisible={isSideBarVisible} changeSideBarVisibility={changeVisibility}/>
            <Top isVisible={isSideBarVisible} changeSideBarVisibility={changeVisibility}/>
            <Header/>
            <NavPanel/>
        </>
    );
}

export default App;

import Header from "./Header/Header.tsx";
import NavPanel from "./Nav/NavPanel.tsx";
import Top from "./Top/Top.tsx";

// import SideBar from "./SideBar/SideBar.tsx";

function App() {
    return (
        <>
            {/*<SideBar/>*/}
            <div>
                <Top/>
                <Header/>
                <NavPanel/>
            </div>
        </>
    );
}

export default App;
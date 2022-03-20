import NavBar from "../components/NavBar";

export default function Layout({children}) {
    return(
        <div className="w-screen flex justify-center " >
            <div className=" w-2/3 " >
            <NavBar/>
            {children}
            </div>
        </div>
    )
}
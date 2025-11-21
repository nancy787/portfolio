import {Header, Footer} from "../index"
import { Outlet } from "react-router-dom"

export default function Layouts() {
   return (
    <>
         <Header/>
         <main>
            <Outlet/>
         </main>
        <Footer/>
    </>
   )
}
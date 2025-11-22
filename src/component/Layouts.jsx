import {Header, Footer} from "../index"
import { Outlet } from "react-router-dom"

export default function Layouts() {
   return (
    <>
         <Header/>
            <main style={{ paddingBottom: '120px' }}>
               <Outlet/>
            </main>
        <Footer/>
    </>
   )
}
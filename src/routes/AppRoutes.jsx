import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layouts, Home } from "../index";

export default function AppRoutes() {
    return (
        <Routes>
                <Route element={ <Layouts/>}>
                    <Route path="/" element={ <Home/>}/>
                </Route>
            </Routes>
    )
}
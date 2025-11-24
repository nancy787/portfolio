import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layouts, Main, ProjectDetails } from "../index";

export default function AppRoutes() {
    return (
        <Routes>
                <Route element={ <Layouts/>}>
                    <Route path="/" element={ <Main/>}/>
                    <Route path="/project-details" element={<ProjectDetails />} />
                </Route>
            </Routes>
    )
}
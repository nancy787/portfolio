import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layouts, Main, ProjectDetails, FItPass, SimpleVedas } from "../index";

export default function AppRoutes() {
    return (
        <Routes>
                <Route element={ <Layouts/>}>
                    <Route path="/" element={ <Main/>}/>
                    <Route path="/project-details" element={<ProjectDetails />} />
                    <Route path="/FitPass" element={<FItPass />} />
                    <Route path="/Simple-vedas" element={<SimpleVedas />} />
                </Route>
            </Routes>
    )
}
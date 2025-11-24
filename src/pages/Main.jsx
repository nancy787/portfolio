import React, { useState } from 'react';
import {SocialLinks, About, Contact, WorkExperience, Projects, Home} from "../index";

export default function Main() {
    return (
        <> 
            <Home/>
            <About/>
            <WorkExperience/>
            <Projects/>
            <Contact/>
        </>
    )
}
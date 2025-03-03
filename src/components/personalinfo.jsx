import { useState } from "react";
import '../styles/educationalinfo.css';


export default function Personalinfo({formData, handleChange, section, handleSection}){

    return (
        <fieldset className="personalinfo">  
            <legend className="sectionbutton" onClick={handleSection} id="personalSec">General Information</legend>

            {(section === "personalSec") && (
                <>
                    <div className="input-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" value={formData.name} onChange={handleChange} name="name" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" value={formData.email} onChange={handleChange} name="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="ph">Phone: </label>
                        <input type="tel" value={formData.phone} onChange={handleChange} name="phone" id="ph" placeholder="Enter your phone number" />
                    </div>
                </>
            )}
        </fieldset>
    );
}
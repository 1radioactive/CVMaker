import { useState } from "react";
import '../styles/educationalinfo.css';


export default function Educationalinfo({eduData, handleEduChange, addEducation, deleteEducation, section, handleSection}){
    
    return (
        <fieldset className="educationalinfo">  
            <legend className="sectionbutton" onClick={handleSection} id="educationSec">Educational Experience</legend>
            {console.log(section)}
        
            {(section === "educationSec") && (
                <>
                    {eduData.map((edu, index)=>(
                        <div key={index} className="education">
                            <div className="input-group">
                                <label htmlFor="schoolname"><button type="button" onClick={() => deleteEducation(index)}>X</button> School: </label>
                                <input type="text" name="school" value={edu.school} onChange={(e) => handleEduChange(index, e)} id="schoolname" placeholder="Enter your school name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="studytitle">Title: </label>
                                <input type="text" name="title" value={edu.title} onChange={(e) => handleEduChange(index, e)} id="studytitle" placeholder="Enter the title of study" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="studydate">Date: </label>
                                <input type="date" name="date" value={edu.date} onChange={(e) => handleEduChange(index, e)} id="studydate" placeholder="Enter the date of commencement" />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addEducation}>Add Education</button>
                </>
            )}
        </fieldset>
    );
}
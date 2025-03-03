import { useState } from "react";
import '../styles/educationalinfo.css';


export default function Workinfo({workData, handleWorkChange, addWork, deleteWork, section, handleSection}){

    return (
        <fieldset className="workinfo">  
            <legend className="sectionbutton" onClick={handleSection} id="workSec">Work Experience</legend>
        
            {(section === "workSec") && (
                <>
                    {workData.map((work, index)=>(
                        <div key={index} className="work">
                            <div className="input-group">
                                <label htmlFor="companyname"><button type="button" onClick={() => deleteWork(index)}>X</button>Company: </label>
                                <input type="text" name="company" value={work.company} onChange={(e) => handleWorkChange(index, e)} id="companyname" placeholder="Enter your company name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="position">Position: </label>
                                <input type="text" name="position" value={work.position} onChange={(e) => handleWorkChange(index, e)} id="position" placeholder="Enter the position title" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="role">Work Responsibilities: </label>
                                <textarea name="description" value={work.description} onChange={(e) => handleWorkChange(index, e)}  id="role" rows="4" placeholder="Enter the main responsibilities of your jobs"></textarea>
                            </div>
                            <div className="input-group">
                                <div>
                                    <label htmlFor="joindate">Joining Date: </label>
                                    <input type="date" name="startDate" value={work.startDate} onChange={(e) => handleWorkChange(index, e)} id="joindate" placeholder="Enter the date of commencement" />
                                </div>
                                <div>
                                    <label htmlFor="enddate">Date Of Leaving: </label>
                                    <input type="date" name="endDate" value={work.endDate} onChange={(e) => handleWorkChange(index, e)} id="enddate" placeholder="Enter the date of leaving" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={addWork}>Add Experience</button>  
                </>
            )}
        </fieldset>
    );
}
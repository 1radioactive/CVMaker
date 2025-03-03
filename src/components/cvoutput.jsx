import '../styles/cvoutput.css';

export default function Outputpanel({formData,eduData, workData}){
    
    return (
        <div className="container">
            <div className='personalsection'>
                <h1>{formData.name}</h1>
                <div className='contactinfo'>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                </div>
            </div>
            <div className='edusection'>
                <h2>Education</h2>
                <ol>
                    {eduData.map((edu, index) => (
                        <li key={index} className='eduinfo'>
                            <div>
                                <p><strong>{edu.title}</strong> <span className="date">({edu.date})</span>  :&nbsp;</p>
                            </div>
                            <p>{edu.school}</p>
                        </li>
                    ))}
                </ol>
            </div>
            <div className='worksection'>
                <h2>Work Experience</h2>
                <ol>
                    {workData.map((work, index) => (
                        <li key={index} className='workdetails'>
                            <div className='companyinfo'>
                                <p><strong>{work.company}</strong> :&nbsp;</p>
                                <p><span className="date">({work.startDate})-({work.endDate})</span></p>
                            </div>
                            <pre>{work.description}</pre>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
import { useState } from 'react'
import './App.css'
import Personalinfo from './components/personalinfo'
import Educationalinfo from './components/educationalinfo'
import Workinfo from './components/workinfo'
import Outputpanel from './components/cvoutput'


function App() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
  });
  const [eduData, setEduData] = useState([
    {school: "ABC school of technology", title:  "M.tech", date: "2018-12-12"},
  ]);
  const [workData, setWorkData] = useState([
    {
      company: "East India Company", 
      position:  "Intern", 
      startDate: "2018-12-12", 
      endDate:"2018-12-13", 
      description:`•Conduct market research and assist in analyzing trade trends.
•Support logistics and supply chain operations.
•Assist in drafting reports, presentations, and official documents.
•Collaborate with different departments on strategic projects.
•Perform data entry and maintain records of business transactions.
•Attend meetings and provide insights on business operations.
•Help manage correspondence and communication with stakeholders.
•Assist in organizing company events and trade-related activities.
•Perform administrative tasks as needed to support daily operations.
•Stay updated on industry trends and company developments.`
    },
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEduChange = (index, e) => {
    const updatedEduData = [...eduData];
    updatedEduData[index][e.target.name] = e.target.value;
    setEduData(updatedEduData);
  };

  const addEducation = () => {
    setEduData([...eduData, { school: "", title: "", date: "" }]);
  };

  const handleDeleteEducation = (index) => {
    setEduData(eduData.filter((_, i) => i !== index));
  };

  const handleWorkChange = (index, e) => {
    const updatedWorkData = [...workData];
    updatedWorkData[index][e.target.name] = e.target.value;
    setWorkData(updatedWorkData);
  };

  const addWork = () => {
    setWorkData([...workData, { company: "", position: "", startDate: "", endDate: "", description:"" }]);
  };

  const handleDeleteWork = (index) => {
    setWorkData(workData.filter((_, i) => i !== index));
  };

  const sections = ["personalSec", "educationSec", "workSec"];

  const [expandSection, setExpandSection] = useState("personalSec");

  const handleSection = (e) => {
    const selectedSection = e.target.id;
    (expandSection === selectedSection) ? setExpandSection("") : setExpandSection(selectedSection);
  }

  return (
    <div className='mainbody'>
      <div className='formelement'>
        <h1>Please Fill Out The Form</h1>
        <form>
            <Personalinfo formData={formData} handleChange={handleChange} section={expandSection} handleSection={handleSection}/>
            <Educationalinfo eduData={eduData} handleEduChange={handleEduChange} addEducation={addEducation} deleteEducation={handleDeleteEducation} section={expandSection} handleSection={handleSection}/>
            <Workinfo workData={workData} handleWorkChange={handleWorkChange} addWork={addWork} deleteWork={handleDeleteWork} section={expandSection} handleSection={handleSection}/>
        </form>
      </div>
      <div className='outputelement'>
        <Outputpanel formData={formData} eduData={eduData} workData={workData} />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import GeneralInfo from "./components/GeneralInfo.jsx";
import Info from "./components/Info.jsx";

function App() {

    //Initialization constants
    const generalBaseData = {
        name: "",
        lastName: "",
        email: "",
        phone: ""
    }

    const schoolFields = [{key: "schoolName", toShow: "School Name", type: "text"}, {key:"titleStudy", toShow: "Title of Study", type: "text"}, {key:"dateStudy", toShow: "Date of Study", type: "date"}]
    const schoolBaseDataArray = [{schoolName:"", title: "", dateStudy: "", id: 0}]
    const schoolBaseDataStructure = [{schoolName:"", title: "", dateStudy: ""}]

    const workFields = [{key: "companyName", toShow: "Company Name", type: "text"}, {key:"jobTitle", toShow: "Job Title", type: "text"}, {key:"startingDate", toShow: "Starting Date", type: "date"}, {key:"Ending Date", toShow: "Ending Date", type: "date"}, {key:"description", toShow: "Short description", type: "text"}]
    const workBaseDataArray = [{companyName:"", jobTitle: "", startingDate: "", endingDate: "", shortDescription: "", id: 0}]
    const workBaseDataStructure = [{companyName:"", jobTitle: "", startingDate: "", endingDate: "", shortDescription: ""}]


    //STATES
    const [generalData, setGeneralData] = useState(generalBaseData)
    const [generalEditMode, setGeneralEditMode] = useState(true)

    const [schoolData, setSchoolData] = useState(schoolBaseDataArray)
    const [schoolEditMode, setSchoolEditMode] = useState(true)
    const [schoolId, setSchoolId] = useState(1)

    const [workData, setWorkData] = useState(workBaseDataArray)
    const [workEditMode, setWorkEditMode] = useState(true)
    const [workId, setWorkId] = useState(1)


    return (
    <>
        <h1>CV Application</h1>

        <Card title="General Info">
            <GeneralInfo data={generalData} setData={setGeneralData} editMode={generalEditMode} setEditMode={setGeneralEditMode}/>
        </Card>
        <Card title = "Education">
            <Info fields={schoolFields} baseDataArray={schoolBaseDataArray} baseDataStructure={schoolBaseDataStructure} data={schoolData} setData={setSchoolData} id={schoolId} setId={setSchoolId} editMode={schoolEditMode} setEditMode={setSchoolEditMode} sectionType={"School"}/>
        </Card>

        <Card title = "Work Experience">
            <Info fields={workFields} baseDataArray={workBaseDataArray} baseDataStructure={workBaseDataStructure} data={workData} setData={setWorkData} id={workId} setId={setWorkId} editMode={workEditMode} setEditMode={setWorkEditMode} sectionType={"Experience"}/>
        </Card>
    </>
  )
}

export default App

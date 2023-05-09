import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import MedRecordsStartPage from './Components/Pages/MedRecordsStartPage';
import ViewMedicalRecords from './Components/Pages/ViewMedicalRecordsPage';
import UpdateMedicalRecords from './Components/Pages/UpdateMedicalRecordsPage';
import MyFooter from './Components/Pages/MyFooter';
import { useState } from 'react';
import { createContext } from 'react';
import React from 'govuk-react';
import { Page } from 'govuk-react';
import TopNav from '@govuk-react/top-nav';
import Crown from '@govuk-react/icon-crown';
export const CurrentContext = createContext(null);

function App() {
    const[medicalRecord, setMedicalRecord] = useState(null);

    return (
        <>
            <CurrentContext.Provider value={{ medicalRecord, setMedicalRecord }}>
                <Router>

                    <Page header={<TopNav company={<TopNav.Anchor href="https://gov.uk" target="new"><TopNav.IconTitle
                            icon={<Crown height="32" width="36" />}>GOV.UK</TopNav.IconTitle></TopNav.Anchor>}
                        serviceTitle={<TopNav.NavLink className="disable">GP Surgery</TopNav.NavLink>}>
                        <TopNav.NavLink href="/ViewMedicalRecords"> View Medical Record </TopNav.NavLink>
                        <TopNav.NavLink href="/UpdateMedicalRecords"> Update Medical Record </TopNav.NavLink>
                    </TopNav>
                    }>
                        
                        <Routes>

                            <Route path="/" element={<MedRecordsStartPage />}/> 
                        
                            <Route path="/ViewMedicalRecords" element={<ViewMedicalRecords />} exact />

                            <Route path="/UpdateMedicalRecords" element={<UpdateMedicalRecords/>} exact/>
                        </Routes>
                    </Page>
                    <MyFooter />
                </Router>
            </CurrentContext.Provider>

        </>
  );
}

export default App;

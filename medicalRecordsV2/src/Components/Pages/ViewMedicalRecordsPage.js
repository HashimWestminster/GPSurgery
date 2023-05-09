import { H2, Button, Link } from 'govuk-react';
import React, { useState, useEffect, createContext } from 'react';
import { Label, LabelText } from 'govuk-react';
import MyFooter from './MyFooter';
import MyBtn from '../MyBtn';
import { CurrentContext } from '../../App';


function ViewMedicalRecords() {
    const [nhsNumber, setNhsNumber] = useState('');


    function handleCallBack(myNhsNumber) {
      setNhsNumber(myNhsNumber);
    }


    function onChangeCapture(e) {
        setNhsNumber(e.target.value);
    }
    useEffect(() => {
        console.log('Current medicalRecord:', CurrentContext.medicalRecord);
    }, [CurrentContext.medicalRecord]);


    return (
        <>
            
            <H2>VIEW MEDICAL RECORDS</H2>

            <div id="viewMedicalRecordsNhsNumberFieldInput">
                <Label/>
                <LabelText><strong>Enter your NHS Number to view you medical record:</strong></LabelText>
                <input value={nhsNumber} onChange={onChangeCapture} />
            </div>
            <br/>
            <MyBtn nhsNumber={nhsNumber} callback={handleCallBack} />
            <br/>
            <Link href="/UpdateMedicalRecords">
                <Button >
                    Update Medical Records
                </Button>
            </Link>
        </>
    );
}

export default ViewMedicalRecords;
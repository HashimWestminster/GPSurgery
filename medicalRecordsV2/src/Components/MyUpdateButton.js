import React, { useContext, useState } from 'react';
import { Button } from 'govuk-react';
import jq from 'jquery';
import { CurrentContext } from '../App';


function MyUpdateButton(props, isFormValid) {
    const currentContext = useContext(CurrentContext);


    function handleUpdate() {
        const url_updateMedicalRecords = 'http://localhost:4000/updateMedicalRecordsPdo.php';
        if (!currentContext.medicalRecord) {
            console.error("Medical record not found");
            return;
        }

        jq.ajax({
            type: 'POST',
            url: url_updateMedicalRecords,
            data: {
                nhsNumber: currentContext.medicalRecord.nhsNumber,
                doseNumber: props.doseNumber,
                vaccinationDate: props.vaccinationDate,
                countryOfVaccination: props.countryOfVaccination,
                authority: props.authority,
                site: props.site,
                totalSeriesOfDoses: props.totalSeriesOfDoses,
                displayName: props.displayName,
                snomedCode: props.snomedCode,
                dateEntered: props.dateEntered,
                procedureCode: props.procedureCode,
                booster: props.booster,
                vaccineId: props.vaccineId,
            },
            success: function (data, textStatus, xhr) {
                if (data === 'failed') {
                    console.error('Update failed');
                } else {
                    const updatedRecord = JSON.parse(data);
                    currentContext.setMedicalRecord(updatedRecord);
                }
            },
        });
    }
    

    return (
        <>
            <Button id="submitButton" onClick={() => handleUpdate(props)}>
                Update
            </Button>
            
        </>

    );
}
export default MyUpdateButton;
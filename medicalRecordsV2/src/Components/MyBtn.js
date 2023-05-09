import { Button, Fieldset } from 'govuk-react';
import jq from 'jquery';
import { CurrentContext } from '../App';
import { useContext } from 'react';

function MyBtn(props) {
    
    const currentContext = useContext(CurrentContext);

    function fetchMedicalRecords(props) {

        var url_medicalRecords = 'http://localhost:4000/getMedicalRecordsPdo.php';

        console.log('Sending nhsNumber:', props.nhsNumber); // Can view in console in dev tools on webpage


        jq.ajax(
            {
                type: "POST",
                url: url_medicalRecords,
                data:{nhsNumber: props.nhsNumber},
                success: function (data, textStatus, xhr) {
                    console.log("Raw server response:", xhr.responseText);
                    if (data === "no patients") {
                        props.callback(-100);
                    } else {
                        var json = jq.parseJSON(data);
                        props.callback(json[0].nhsNumber);    //change NHSnumber to nhsNumber depending on the right dB
                        currentContext.setMedicalRecord(json[0]);
                    }
                    console.log('Updated medicalRecord:', currentContext.medicalRecord);
                }
            }
        );
        

       
            
    }

    return (
        <>
            <Button id="submitButton" onClick={() => fetchMedicalRecords(props)}> Submit Information </Button>
            <div className="medRecordsInfo">
                {currentContext.medicalRecord && (
                    <Fieldset>
                        <legend>Medical Record </legend>
                        <div className="column1">
                            <p className="row1"><strong>NHS Number:</strong> {currentContext.medicalRecord.nhsNumber} </p>
                            <p className="row1"><strong>Dose Number: </strong> {currentContext.medicalRecord.doseNumber} </p>
                            <p className="row1"><strong>Vaccination Date:</strong> {currentContext.medicalRecord.vaccinationDate} </p>
                            <p className="row1"><strong>Country of Vaccination:</strong> {currentContext.medicalRecord.countryOfVaccination} </p>
                            <p className="row1"><strong>Authority:</strong> {currentContext.medicalRecord.authority}</p>
                        </div>
                        <div className="column1">
                            <p className="row2"><strong>Site:</strong> {currentContext.medicalRecord.site} </p>
                            <p className="row2"><strong>Total Series Of Doses: </strong> {currentContext.medicalRecord.totalSeriesOfDoses} </p>
                            <p className="row2"><strong>Display Name:</strong> {currentContext.medicalRecord.displayName} </p>
                            <p className="row2"><strong>Snomed Code:</strong> {currentContext.medicalRecord.snomedCode} </p>
                        </div>
                        <div className="column1">
                            <p className="row3"><strong>Date Entered:</strong> {currentContext.medicalRecord.dateEntered} </p>
                            <p className="row3"><strong>Procedure Code:</strong> {currentContext.medicalRecord.procedureCode} </p>
                            <p className="row3"><strong>Booster:</strong> {currentContext.medicalRecord.booster} </p>
                            <p className="row3"><strong>Vaccine ID:</strong> {currentContext.medicalRecord.vaccineId} </p>
                        </div>

                        {/* Add other fields from the medical record */}
                    </Fieldset>
                )}
            </div>
        </>
    );
 }

export default MyBtn;

import React, { useState, useEffect } from 'react';
import { Label, LabelText, Input } from 'govuk-react';
import MyBtn from '../MyBtn';
import MyUpdateButton from '../MyUpdateButton';


function UpdateMedicalRecordsPage() {

    const [nhsNumber, setNhsNumber] = useState('');
    const [doseNumber, setDoseNumber] = useState('');
    const [vaccinationDate, setVaccinationDate] = useState('');
    const [countryOfVaccination, setCountryOfVaccination] = useState('');
    const [authority, setAuthority] = useState('');
    const [site, setSite] = useState('');
    const [totalSeriesOfDoses, setTotalSeriesOfDoses] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [snomedCode, setSnomedCode] = useState('');
    const [dateEntered, setDateEntered] = useState('');
    const [procedureCode, setSetProcedureCode] = useState('');
    const [booster, setBooster] = useState('');
    const [vaccineId, setVaccineId] = useState('');


    function handleCallBack(myNhsNumber) {
        setNhsNumber(myNhsNumber);
    }
    function onChangeCapture(e) {
        setNhsNumber(e.target.value);
    }


    function handleChangeDoseNumber(e) {

        setDoseNumber(e.target.value)



    }
    function handleChangeVaccinationDate(e) {

        setVaccinationDate(e.target.value);
    }

    function handleChangeCountryOfVaccination(e) {
        setCountryOfVaccination(e.target.value);
    }
    function handleChangeAuthority(e) {
        setAuthority(e.target.value);
    }
    function handleChangeSite(e) {
        setSite(e.target.value);
    }
    function handleChangeTotalSeriesOfDoses(e) {
        setTotalSeriesOfDoses(e.target.value);
    }
    function handleChangeDisplayName(e) {
        setDisplayName(e.target.value);
    }
    function handleChangeSnomedCode(e) {
        setSnomedCode(e.target.value);
    }
    function handleChangeDateEntered(e) {
        setDateEntered(e.target.value);
    }
    function handleChangeProcedureCode(e) {
        setSetProcedureCode(e.target.value);
    }
    function handleChangeBooster(e) {
        setBooster(e.target.value);
    }
    function handleChangeVaccineId(e) {
        setVaccineId(e.target.value);
    }




    return (
        <>
            <div className="updateMedicalRecordsContainer">
                
                <div id="viewMedicalRecordsNhsNumberFieldInput">
                    <Label />
                    <LabelText><strong>Enter your NHS Number to choose your medical record: *</strong></LabelText>
                    <Input value={nhsNumber} onChange={onChangeCapture} required />
                </div>
                <br/>
                <MyBtn nhsNumber={nhsNumber} callback={handleCallBack} />
                <div id="updateMedicalRecordsFieldsInputs">
                    <div className="column1">
                        <div className="row1">
                            <Label className="row1" />
                            <LabelText> Enter your DoseNumber:</LabelText>
                            <Input type="text" value={doseNumber} onChange={handleChangeDoseNumber} />
                            <br />
                            <Label className="row1" />
                            <LabelText>Enter your VaccinationDate:</LabelText>
                            <Input type="text" value={vaccinationDate} onChange={handleChangeVaccinationDate} />
                            <br />
                            <Label className="row1" />
                            <LabelText>Enter your CountryOfVaccination:</LabelText>
                            <Input type="text" value={countryOfVaccination} onChange={handleChangeCountryOfVaccination} />
                            <br />
                            <Label className="row1" />
                            <LabelText>Enter your Authority:</LabelText>
                            <Input type="text" value={authority} onChange={handleChangeAuthority} />
                            <br />
                        </div>
                    </div>
                    <div className="column1">
                        <div>
                            <Label className="row2" />
                            <LabelText>Enter your Site:</LabelText>
                            <Input type="text" value={site} onChange={handleChangeSite} />
                            <br />
                            <Label className="row2" />
                            <LabelText>Enter your TotalSeriesOfDoses:</LabelText>
                            <Input type="text" value={totalSeriesOfDoses} onChange={handleChangeTotalSeriesOfDoses} />
                            <br />
                            <Label className="row2" />
                            <LabelText>Enter your DisplayName:</LabelText>
                            <Input type="text" value={displayName} onChange={handleChangeDisplayName} />
                            <br />
                            <Label className="row2" />
                            <LabelText>Enter your SnomedCode:</LabelText>
                            <Input type="text" value={snomedCode} onChange={handleChangeSnomedCode} />
                            <br />
                        </div>
                    </div>
                    <div className="column1">
                        <div>
                            <Label className="row3" />
                            <LabelText>Enter your DateEntered:</LabelText>
                            <Input type="text" value={dateEntered} onChange={handleChangeDateEntered} />
                            <br />
                            <Label className="row3" />
                            <LabelText>Enter your ProcedureCode:</LabelText>
                            <Input type="text" value={procedureCode} onChange={handleChangeProcedureCode} />
                            <br />
                            <Label className="row3" />
                            <LabelText>Enter your Booster:</LabelText>
                            <Input type="text" value={booster} onChange={handleChangeBooster} />
                            <br />
                            <Label className="row3" />
                            <LabelText>Enter your VaccineId:</LabelText>
                            <Input type="text" value={vaccineId} onChange={handleChangeVaccineId} />
                            <br />
                        </div>
                    </div>

                </div>
                <br/>
                <MyUpdateButton
                    doseNumber={doseNumber}
                    vaccinationDate={vaccinationDate}
                    countryOfVaccination={countryOfVaccination}
                    authority={authority}
                    site={site}
                    totalSeriesOfDoses={totalSeriesOfDoses}
                    displayName={displayName}
                    snomedCode={snomedCode}
                    dateEntered={dateEntered}
                    procedureCode={procedureCode}
                    booster={booster}
                    vaccineId={vaccineId}

                    callback={
                        handleChangeDoseNumber,
                        handleChangeVaccinationDate,
                        handleChangeCountryOfVaccination,
                        handleChangeAuthority,
                        handleChangeSite,
                        handleChangeTotalSeriesOfDoses,
                        handleChangeDisplayName,
                        handleChangeSnomedCode,
                        handleChangeDateEntered,
                        handleChangeProcedureCode,
                        handleChangeBooster,
                        handleChangeVaccineId
                    }

                />
            </div>

        </>
    );
}

export default UpdateMedicalRecordsPage;

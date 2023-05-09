
import { H2, Link, Button } from 'govuk-react';
import MyFooter from './MyFooter';
import { useState } from 'react';


function MedRecordsStartPage() {
    const [nhsNumber, setNhsNumber] = useState('');
    return (
        <>
            <div classname="pageText">
                <H2>
                    Medical Records
                </H2>
                <div class="subHeadingText">
                    <h2>Your GP Health Records</h2>
                </div>
                <div class="bodyText">
                    <p>
                        Your record shows personal data, such as your details, allergies and medications.
                    </p>
                    <p>
                        Depending on what your GP surgery shares, you may also see:
                        <ul>
                            <li>Your medical history, including problems and consultation notes.</li>
                            <li>Test results that you may have discussed with your doctor.</li>
                        </ul>
                    </p>
                </div>

                <br /><br />
            </div>

            <Link href="/ViewMedicalRecords">
                <Button start>
                    Continue
                </Button>
            </Link>
                

            <MyFooter />

        </>
            
    );
}
export default MedRecordsStartPage;
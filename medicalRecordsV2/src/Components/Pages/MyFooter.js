import React from 'govuk-react';
import { Footer } from 'govuk-react';

function MyFooter() {
    return (
        
        <Footer
            copyright={{
                image: {
                    height: 50,
                    src: 'static/media/govuk-crest.05968778.png',
                    width: 50
                },
                link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
                text: 'Crown copyright'
            }}
        />
    );
}
export default MyFooter;
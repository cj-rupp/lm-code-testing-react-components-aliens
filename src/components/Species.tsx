import { Fragment } from 'react';

export interface SpeciesProps {
	speciesName: string;
	placeHolder: string;
    maxChars: number;
}

const Species: React.FC<SpeciesProps> = ({
    speciesName,
    placeHolder,
    maxChars
    }) => {
        return (
            <>
              <label htmlFor="speciesName">Species Name:</label>
              <input  id='speciesName' name='speciesName' type='text' placeholder={placeHolder}/>
              <p className='validation-message'>validation messages</p>
            </>
        )};

export default Species;

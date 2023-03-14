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
            <Fragment>
              <label htmlFor="speciesName">Species Name</label>
              <input  id='speciesName' type='text'/>
              <p>validation messages</p>
            </Fragment>
        )};

export default Species;

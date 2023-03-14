export interface PopulationProps {
	populationCount: string;
	placeHolder: string;
}

const Population: React.FC<PopulationProps> = ({
    populationCount,
    placeHolder,
    }) => {
        return (
            <>
              <label htmlFor='populationCount'>Number of beings:</label>
              <input  id='populationCount' name='populationCount' type='text' placeholder={placeHolder}/>
              <p className='validation-message'>validation messages</p>
            </>
        )};

export default Population;
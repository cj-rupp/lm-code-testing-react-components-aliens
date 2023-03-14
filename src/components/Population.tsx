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
              <label htmlFor='populationCount'>Number of beings</label>
              <input  id='populationCount' type='text'/>
              <p>validation messages</p>
            </>
        )};

export default Population;
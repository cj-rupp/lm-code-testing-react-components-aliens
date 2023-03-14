
export interface PlanetProps {
	planetName: string;
	placeHolder: string;
    maxChars: number;
}

const Planet: React.FC<PlanetProps> = ({
    planetName,
    placeHolder,
    maxChars
    }) => {
        return (
            <>
              <label htmlFor="speciesName">Planet Name</label>
              <input  id='speciesName' type='text'/>
              <p>validation messages</p>
            </>
        )};

export default Planet;

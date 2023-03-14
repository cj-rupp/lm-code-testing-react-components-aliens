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
              <label htmlFor="planetName">Planet Name:</label>
              <input  id='planetName' name='planetName' type='text' placeholder={placeHolder}/>
              <p className='validation-message'>validation messages</p>
            </>
        )};

export default Planet;

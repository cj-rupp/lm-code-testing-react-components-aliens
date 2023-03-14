export interface MathsProps {
	mathSum: string;
}

const Maths: React.FC<MathsProps> = ({
    mathSum,
    }) => {
        return (
            <>
            <label htmlFor="mathSelect">What is 2+2?</label>
            <select name="mathSelect" id="mathSelect">
                <option value="Not 4">Not 4</option>
                <option value="4">4</option>
            </select>
            <p className='validation-message'>validation messages</p>
            </>
        )};

export default Maths;

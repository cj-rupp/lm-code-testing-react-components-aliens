export interface PhilosophyProps {
	philosophyText: string,
    placeHolder: string
}

const Philosophy: React.FC<PhilosophyProps> = ({
    philosophyText,
    placeHolder
    }) => {
        return (
            <>
            <label htmlFor="philosophyText">Reason for sparing:</label>
            <textarea id="philosophyText" name="philosophyText" rows={4} cols={50}
                placeholder={placeHolder}>
            </textarea>
            <p className='validation-message'>validation messages</p>
            </>
        )};

export default Philosophy;
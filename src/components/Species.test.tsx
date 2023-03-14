import { render, screen } from '@testing-library/react';
import Species from './Species';

test('renders iput element for species name', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	render(
        <Species
            speciesName='Homo Sapiens'
            maxChars={20}
            placeHolder='Enter species name here:'
        />);
    
	const speciesRubrik = screen.getByText(
		/Species Name:/i
	);

	const speciesInput = screen.getByPlaceholderText(
		/Enter species name here:/i
	)

	expect(speciesRubrik).toBeInTheDocument();
	expect(speciesInput).toBeInTheDocument();
});
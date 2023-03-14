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
		/Species Name/i
	);
	expect(speciesRubrik).toBeInTheDocument();
	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
});
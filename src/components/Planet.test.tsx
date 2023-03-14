import { render, screen } from '@testing-library/react';
import Planet from './Planet';

test('renders iput element for planet name', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	render(
        <Planet
            planetName='Earth'
            maxChars={10}
            placeHolder='Enter planet name here:'
        />);
    
	const planetRubrik = screen.getByText(
		/Planet Name/i
	);
	expect(planetRubrik).toBeInTheDocument();
	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
});
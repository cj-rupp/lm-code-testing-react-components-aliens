import { render, screen } from '@testing-library/react';
import Population from './Population';

test('renders iput element for population name', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	render(
        <Population
            populationCount='7bn'
            placeHolder='Enter population count here:'
        />);
    
	const populationRubrik = screen.getByText(
		/Number of beings/i
	);
	expect(populationRubrik).toBeInTheDocument();
	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
});
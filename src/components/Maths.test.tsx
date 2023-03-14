import { render, screen } from '@testing-library/react';
import Maths from './Maths';

test('renders selection element for the Maths test', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	render(
        <Maths
            mathSum='4'
        />);
    
	const mathsRubrik = screen.getByText(
		/What is 2\+2\?/i
	);

	expect(mathsRubrik).toBeInTheDocument();
	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
});
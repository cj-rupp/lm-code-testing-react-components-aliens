import { render, screen } from '@testing-library/react';
import Philosophy from './Philosophy';

test('renders text area for philosophy text', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	render(
        <Philosophy
            philosophyText='We are mostly harmless'
            placeHolder='Enter your reasoning here:'
        />);
    
    const philosophyRubrik = screen.getByText(
        /Reason for sparing:/i
    );

	expect(philosophyRubrik).toBeInTheDocument();
	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
});
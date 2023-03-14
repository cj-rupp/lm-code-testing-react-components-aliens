import { useState } from 'react';
import W12MHeader from './W12MHeader';
import Species from './Species';
import Planet from './Planet';
import Population from './Population';
import Maths from './Maths';
import Philosophy from './Philosophy';

const W12MForm = () => {

const validateForm = (event:Object) => {
	console.log("Dummy form validation: "+event);
};

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form id="w12m" onSubmit={validateForm}>
				<Species speciesName="Homo Sapiens" maxChars={20}
					placeHolder="Enter species name here:"/>
				<Planet planetName="Earth" maxChars={10}
					placeHolder="Enter planet name here:"/>
				<Population populationCount="Earth"
					placeHolder="Enter population count here:"/>
				<Maths mathSum="4"/>
				<Philosophy philosophyText="We are mostly harmless"
					placeHolder="Enter your reasoning here:"/>
				<button type="submit">Submit Form</button>
			</form>
		</section>
	);
};

export default W12MForm;

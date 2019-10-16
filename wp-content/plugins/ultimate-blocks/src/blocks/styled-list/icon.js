import { Fragment } from 'react';

const commonPaths = (
	<Fragment>
		<path d="M0 0h16v3h-16v-3z" />
		<path d="M6 4h10v3h-10v-3z" />
		<path d="M6 8h10v3h-10v-3z" />
		<path d="M0 12h16v3h-16v-3z" />
	</Fragment>
);

export const decreaseIndentIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="16"
		width="16"
		viewBox="0 0 16 16"
	>
		<path d="M4 10.5v-6l-4 3z" />
		{commonPaths}
	</svg>
);

export const increaseIndentIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="16"
		width="16"
		viewBox="0 0 16 16"
	>
		{commonPaths}
		<path d="M0 4.5v6l4-3z" />
	</svg>
);

const icon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485 485">
		<path
			d="M483.8,46.25H181.6c-0.6,0-1.2,0.5-1.2,1.2v28.3c0,0.6,0.5,1.2,1.2,1.2h302.2c0.6,0,1.2-0.5,1.2-1.2v-28.3 C485,46.75,484.5,46.25,483.8,46.25z"
			fill="#f64646"
		/>
		<circle cx="71.5" cy="253.35" r="37.9" fill="#f64646" />
		<circle cx="71.5" cy="419.55" r="38.1" fill="#f64646" />
		<path
			d="M181.6,128.15h142.8c0.6,0,1.2-0.5,1.2-1.2v-28.3c0-0.6-0.5-1.2-1.2-1.2H181.6c-0.6,0-1.2,0.5-1.2,1.2v28.3 C180.5,127.65,181,128.15,181.6,128.15z"
			fill="#f64646"
		/>
		<path
			d="M483.8,212.45H181.6c-0.6,0-1.2,0.5-1.2,1.2v28.3c0,0.6,0.5,1.2,1.2,1.2h302.2c0.6,0,1.2-0.5,1.2-1.2v-28.3 C485,212.95,484.5,212.45,483.8,212.45z"
			fill="#f64646"
		/>
		<path
			d="M181.6,294.35h142.8c0.6,0,1.2-0.5,1.2-1.2v-28.3c0-0.6-0.5-1.2-1.2-1.2H181.6c-0.6,0-1.2,0.5-1.2,1.2v28.3 C180.5,293.75,181,294.35,181.6,294.35z"
			fill="#f64646"
		/>
		<path
			d="M483.8,378.55H181.6c-0.6,0-1.2,0.5-1.2,1.2v28.3c0,0.6,0.5,1.2,1.2,1.2h302.2c0.6,0,1.2-0.5,1.2-1.2v-28.3 C485,379.05,484.5,378.55,483.8,378.55z"
			fill="#f64646"
		/>
		<path
			d="M324.4,429.85H181.6c-0.6,0-1.2,0.5-1.2,1.2v28.3c0,0.6,0.5,1.2,1.2,1.2h142.8c0.6,0,1.2-0.5,1.2-1.2v-28.3 C325.6,430.35,325.1,429.85,324.4,429.85z"
			fill="#f64646"
		/>
		<polygon
			points="53.4,86.55 27.3,60.25 0,87.45 26.2,113.65 53.3,140.95 80.5,113.85 143,51.75 115.9,24.45"
			fill="#f64646"
		/>
	</svg>
);

export default icon;

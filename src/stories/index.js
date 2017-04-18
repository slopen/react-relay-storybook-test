import React from 'react';

import {storiesOf} from '@kadira/storybook';
// import {action} from '@kadira/storybook-addon-actions';

// import {specs} from 'storybook-addon-specifications';
// import {shallow, mount} from 'enzyme';
// import {expect} from 'chai';

import ProfilesList from '../index';

storiesOf ('ProfilesList', module)

	.add ('default view', () => {
		const fixtures = {
		  	viewer: {
		  		profiles: {
		  			edges: [
		  				{
		  					node: {
		  						id: 1,
		  						name: 'name 1',
		  						email: 'email 1',
		  						avatar: 'avatar 1',
		  						nickname: 'nickname 1'
		  					}
		  				},
		  				{
		  					node: {
		  						id: 2,
		  						name: 'name 2',
		  						email: 'email 2',
		  						avatar: 'avatar 2',
		  						nickname: 'nickname 2'
		  					}
		  				}
		  			]
		  		}
		  	}
		};

		const story = (<ProfilesList {...fixtures}/>);

		// specs (() => describe ('List', () => {

		// 	it ('should display 2 items', () => {
		// 		const wrapper = mount (story);

		// 		...
		// 	});

		// }));

		return story;
	});

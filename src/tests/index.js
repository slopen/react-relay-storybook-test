import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Item from '../index';

const {describe, it, afterEach} = global;


export default describe ('Item', () => {

	it ('should show the given text', () => {
		const text = 'Item Text';
		const wrapper = shallow (<Item>{text}</Item>);

		expect (wrapper.text ()).to.be.equal (text);
	});

});

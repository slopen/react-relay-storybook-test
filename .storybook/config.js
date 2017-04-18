// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.

import { configure } from '@kadira/storybook';

import {specs, describe, it, afterEach} from 'storybook-addon-specifications';

global.specs = specs;
global.afterEach = afterEach;
global.describe = describe;
global.it = it;

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

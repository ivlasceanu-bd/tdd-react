import React from 'react'
import Counter from './Counter'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Counter', () => {
  // we use the it() function to run individual tests

  // test the initial state
  test('starts with a count of 0', () => {
    // render the component and get an instance of it
    const container = shallow(<Counter />);
    const count = container.find('p.counter-index').text();
    expect(count).toEqual('Count is: 0');
  });

  // test user interactions, i.e. click events
  test('increment count when button is clicked', () => {
    const container = shallow(<Counter />);
    const incrementBtn = container.find('button.add');
    incrementBtn.simulate('click');

    const count = container.find('p.counter-index').text();
    expect(count).toEqual('Count is: 1');
  });

  test('decrement count when button is clicked', () => {
    const container = shallow(<Counter />);
    const decrementBtn = container.find('button.subtract');
    decrementBtn.simulate('click');

    const count = container.find('p.counter-index').text();
    expect(count).toEqual('Count is: -1');
  });
}) 


/* 
https://jestjs.io/docs/en/api#testname-fn-timeout
https://jestjs.io/docs/en/expect#expectvalue
*/
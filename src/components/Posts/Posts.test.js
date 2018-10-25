import React from 'react'
import Posts from './Posts'
import { shallow } from 'enzyme'
import axios from 'axios';


describe('Posts', () => {
  //  test what is rendered
  it('Initial state loading should be false', () => {
    const container = shallow(<Posts />);
    expect(container.state('loaded')).toBeFalsy();
  });

  // test what is expected
  // use async/await for asynchronous operations 
  it('Post component should load data from api', async () => {
    const container = shallow(<Posts />);
    const button = container.find('button');
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    button.simulate('click');
    container.setState({'loaded': true, 'users': data});

    // console.log((container.state('users').data).length);
    // expect(container.state('loaded')).toBeTruthy();
    expect((container.state('users').data).length).toEqual(10);
  });
});
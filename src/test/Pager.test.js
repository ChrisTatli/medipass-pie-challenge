import React from 'react';
import Pager from '../Components/Pager';
import renderer from 'react-test-renderer';


test('Pager component renders a snapshot', () =>{
    const pageLength = 5;
    const offset = 2;
    const component = renderer.create(
        <Pager
          currentPageLength={pageLength}
          pageOffset={offset}  
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();



});
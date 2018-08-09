import React from 'react';
import Pie from '../Components/Pie';
import renderer from 'react-test-renderer';

test('Pie component renders a snapshot', () =>{
    const pie = {
        id: 1,
        storeId: 3,
        displayName: "Beef and curry",
        quantity: 1,
        price: 200,
        priceString: "$2.00",
        isPieOfTheDay: true
        }
    const store = {
        id: 3,
        displayName: "Hungry Jake's",
        address: "345 Bourke Street",
        city: "Melbourne",
        state: "Victoria",
        postcode: "3000",
        mobile: "0412512333",
        coords: {
        latitude: "-37.8130036",
        longitude: "144.9646799"
        },
        rating: 9
        }
    const component = renderer.create(
        <Pie 
            pie={pie}
            store={store}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
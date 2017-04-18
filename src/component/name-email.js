import React from 'react';
import Relay from 'react-relay';

const Item = ({item}) =>
    <div>
        <p>name: {item.name}</p>
        <p>email: {item.email}</p>
    </div>

export default Relay.createContainer (Item, {

    fragments: {
        item: () => Relay.QL`
            fragment on Node {
                ...on Profile {
                    name
                    email
                }
            }
        `
    }
});
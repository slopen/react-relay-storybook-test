import React from 'react';
import Relay from 'react-relay';

const Item = ({item}) =>
    <div>
        <p>avatar: {item.avatar}</p>
        <p>nickname: {item.nickname}</p>
    </div>

export default Relay.createContainer (Item, {

    fragments: {
        item: () => Relay.QL`
            fragment on Node {
                ...on Profile {
                    avatar
                    nickname
                }
            }
        `
    }
});
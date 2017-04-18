import React from 'react';
import Relay from 'react-relay';

import NameEmail from './name-email';
import AvatarNickname from './avatar-nickname';


const List = (props) => {
    const {children} = props;

    const {edges: profiles} = props.viewer.profiles;

    return (
        <div>
            <ul>
                {profiles.map (({node}) => (
                    <li key={node.id}>
                        <NameEmail item={node}/>
                    </li>
                ))}
            </ul>

            <hr/>

            <ul>
                {profiles.map (({node}) => (
                    <li key={node.id}>
                        <AvatarNickname item={node}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Relay.createContainer (List, {

    fragments: {
        viewer: () => Relay.QL`
            fragment on Viewer {

                profiles (first: 10) {
                    edges {

                        node {
                            id

                            ${NameEmail.getFragment ('item')}
                            ${AvatarNickname.getFragment ('item')}
                        }
                    }
                }
            }
        `
    }
});
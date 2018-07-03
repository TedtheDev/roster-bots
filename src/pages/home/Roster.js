import React from 'react';
import PropTypes from 'prop-types';

import Players from './roster/Players';

const Roster = props => {

    return (
        <div>
            <div>Roster Name: {props.rosterName}</div>
            <Players rosterName={props.rosterName}/>
        </div>
    )
}

Roster.propTypes = {
    rosterName: PropTypes.string.isRequired
}

export default Roster;
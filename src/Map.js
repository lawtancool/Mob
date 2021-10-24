import React from 'react';
import { Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';

const Map = (props) => {

    const params = useParams();
    const lobbyId = params.lobby_id;
    return (
        <div className='insert_class_name_here'>
            <h1>Map for lobby {lobbyId}</h1> 
        </div>
    );
}

export default Map;
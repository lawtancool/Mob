import React from 'react';
import { Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';

const Lobby = (props) => {
    const params = useParams();

    let lobby_id = params.lobby_id;

    return (
        <div className='insert_class_name_here'>
            <h1>Welcome to lobby ID {lobby_id}</h1> 
        </div>
    );
}

export default Lobby;
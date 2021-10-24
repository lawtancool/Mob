import { React, useState } from 'react';
import { Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';

const Lobby = (props) => {
    const params = useParams();
    const [name, setName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [distance, setDistance] = useState("");

    const lobby_id = params.lobby_id;

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(name + " " + postalCode + " " + distance)
    }

    return (
        <div className='insert_class_name_here'>
            <h1>Welcome to lobby ID {lobby_id}</h1> 
            <form onSubmit={handleSubmit}>
                <label>Name:
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
                <label>Postal Code:
                <input 
                    type="text" 
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                </label>
                <label>Distance:
                <input 
                    type="number" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}

export default Lobby;
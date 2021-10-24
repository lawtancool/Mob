import React from 'react';
import { Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { collection, doc, setDoc } from "firebase/firestore"; 

import { db } from './firebase';

const Main = (props) => {

    // Add a new document with a generated id
    const newLobbyRef = doc(collection(db, "lobbies"));
    return (
        <div className = "main-page">
            <div className = "mob">
                <title>Mob</title>
                <h1>Mob</h1>
            </div>
            <h2>Make it easy to eat with friends!</h2>
            <h2>Where are we mobbing tonight?</h2>
            <p className = "center-container" className = "url-container" id = "rounded-edge1" >
            {window.location.origin + "/" + newLobbyRef.id}
            </p>
            <br></br>
            <div className = "center-container">
                <button id = "rounded-edge2">copy</button>
                <Link to={newLobbyRef.id}><button id = "rounded-edge2">enter lobby</button></Link>
            </div>
        </div>
    );
}

export default Main;
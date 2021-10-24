import React from 'react';
import { Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { collection, doc, setDoc } from "firebase/firestore"; 

import { db } from './firebase';

const Main = (props) => {

    // Add a new document with a generated id
    const newLobbyRef = doc(collection(db, "lobbies"));
    return (
        <div className='wrapper'>
            <h1>Copy the link below: {window.location.origin + "/" + newLobbyRef.id}</h1> 
            <Link to={newLobbyRef.id}>LINK</Link>
        </div>
    );
}

export default Main;
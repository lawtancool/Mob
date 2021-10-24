import { React, useState } from 'react';
import { Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';

import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

const Lobby = (props) => {
    const [name, setName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [distance, setDistance] = useState("");
    const [selectedDietOptions, setSelectedDietOptions] = useState([]);

    const params = useParams();
    const lobbyId = params.lobby_id;
    const dietOptions = [
        { value: "vegan", label: "Vegan"},
        { value: "vegetarian", label: "Vegetarian"},
        { value: "halal", label: "Halal"},
    ]

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(name + " " + postalCode + " " + distance + " " + selectedDietOptions)
    }

    const handleDropdownChange = (event) => {
        let diet_prefs = [];
        for(let i = 0; i < event.length; i++) {
            diet_prefs.push(event[i]["value"]);
        }
        setSelectedDietOptions(diet_prefs);
        console.log(diet_prefs);
    }
    

    return (
        <div className='insert_class_name_here'>
            <h1>Welcome to lobby ID {lobbyId}</h1> 
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
            <CreatableSelect
                isMulti
                onChange={event => handleDropdownChange(event)}
                options={dietOptions}
            />
        </div>
    );
}

export default Lobby;
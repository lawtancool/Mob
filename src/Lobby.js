import { React, useState } from 'react';
import { Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";

import CreatableSelect from 'react-select/creatable';
import ScheduleSelector from 'react-schedule-selector';

import { db } from './firebase';

const Lobby = (props) => {
    const [name, setName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [distance, setDistance] = useState("");
    const [selectedDietOptions, setSelectedDietOptions] = useState([]);
    const [schedule, setSchedule] = useState();

    const params = useParams();
    const lobbyId = params.lobby_id;
    const dietOptions = [
        { value: "vegan", label: "Vegan"},
        { value: "vegetarian", label: "Vegetarian"},
        { value: "halal", label: "Halal"},
    ]

    const history = useHistory();

    const handleSubmit = (event) => {
      event.preventDefault();
    //   alert(name + " " + postalCode + " " + distance + " " + selectedDietOptions + " " + schedule)
      const userRef = doc(db, "lobbies", lobbyId, "users", name);
      setDoc(userRef, {
        postalCode: postalCode,
        distance: distance,
        selectedDietOptions: selectedDietOptions,
        schedule: schedule,
      });
      history.push('/' + lobbyId + "/map");
    }

    const handleDropdownChange = (event) => {
        let diet_prefs = [];
        for(let i = 0; i < event.length; i++) {
            diet_prefs.push(event[i]["value"]);
        }
        setSelectedDietOptions(diet_prefs);
    }

    const handleScheduleChange = (event) => {
        setSchedule(event);
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
             <ScheduleSelector
                selection={schedule}
                numDays={5}
                minTime={8}
                maxTime={22}
                hourlyChunks={2}
                onChange={event => handleScheduleChange(event)}
            />
        </div>
    );
}

export default Lobby;
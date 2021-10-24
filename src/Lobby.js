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
        { value: "kosher", label: "Kosher"},
        { value: "no-gluten", label: "Gluten-Free"}
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
        <div className='questions'>
            <h1>Preferences</h1> 
            <form id="my-form" onSubmit={handleSubmit}>
                {/* <label id="rounded-tan">Name:
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </label>
                <label id="rounded-tan">Postal Code:
                <input 
                    type="text" 
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                </label>
                <label id="rounded-tan">Distance:
                <input 
                    type="number" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
                </label> */}
                <input type="text" id="rounded-tan" name="name" placeholder="Name" value={name}
                    onChange={(e) => setName(e.target.value)} /><br/>
                <input type="number" id = "rounded-tan" name="postalcode" placeholder="Postal Code" value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}/><br/>
                <input type="text" id="rounded-tan" name="distance" placeholder="Distance" value={distance} 
                    onChange={(e) => setDistance(e.target.value)}/><br></br>
                {/* <input type="submit" /> */}
            </form>
            <div className="dietary">
                <div id = "rounded-green">
                <h4>
                    Dietary Preferences
                </h4>
                <CreatableSelect
                    isMulti
                    onChange={event => handleDropdownChange(event)}
                    options={dietOptions}
                />
                </div>
                

            </div>
            <div className="time">
                <div id = "rounded-red">
                    <ScheduleSelector
                        selection={schedule}
                        numDays={5}
                        minTime={8}
                        maxTime={22}
                        hourlyChunks={1}
                        onChange={event => handleScheduleChange(event)}
                    />
                </div>
            </div>
            <button form='my-form' type="submit">Next</button>
        </div>
    );
}

export default Lobby;
import { React, useState, useEffect }from 'react';
// import { useParams } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

    // const params = useParams();
    // const lobbyId = params.lobby_id;
    const [center, setCenter] = useState({}); 
    const zoom = 14;

    // const AnyReactComponent = ({ text }) => <div>{text}</div>;

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, posError);
        } else {
            alert("Please enable location permission");
        }
    });

    const showPosition = (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        setCenter({lat: lat, lng: long});
    }

    const posError = () => {

    }

    return (
        <div className='insert_class_name_here'>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDdeAChS8AHur-H7FQwLAtUcEnaYlQXKlE' }}
                    defaultCenter={{lat: 47.6, lng: -122.3}}
                    center={center}
                    defaultZoom={zoom}
                >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                /> */}
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;
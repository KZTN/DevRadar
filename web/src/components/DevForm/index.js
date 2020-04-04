import React, {useState, useEffect} from 'react';
export default function DevForm({onSubmit}) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');

    async function getCords() {
        const response = await fetch('https://location.services.mozilla.com/v1/geolocate?key=test').then(el=>el.json())
        const latitude = response.location.lat;
        const longitude = response.location.lng;
        setLatitude(latitude);
        setLongitude(longitude);
      }
      
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (response) => {
            const latitude = response.location.lat;
            const longitude = response.location.lng;
            setLatitude(latitude);
            setLongitude(longitude);
            console.log(response);
          },
          (err) => {
            console.log(err);
            if(err.code === 2) {
              getCords();
            }
          },
          {
            enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 
          }
        );
      }, []);

      async function handleSubmit(e) {
        e.preventDefault();
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
          });
          setGithub_username(' ');
          setTechs(' ');
          setLatitude(' ');
          setLongitude(' ');
      }

    return (
        <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input type="text" name="github_username" id="github_username" value={github_username} onChange={e => setGithub_username(e.target.value)} required/>
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias </label>
          <input type="text" name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)} required/>
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="text" name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required/>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="text" name="longitude" id="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} required/>
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    );
}
import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios'

const App = () => {

  const [getLyrics, saveLyrics] = useState({});

  useEffect(() => {

    if(Object.keys(getLyrics).length === 0) return;
    
    const getAPI = async () => {
      const {artist, song} = getLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await axios(url);
      console.log(result);
    }
    getAPI();
  }, [getLyrics])

  return (
      <Fragment>
        <Form
          saveLyrics={saveLyrics}
        />
      </Fragment>
  );
}

export default App;

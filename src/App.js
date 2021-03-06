import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';

const App = () => {

  const [getLyrics, saveLyrics] = useState({});
  const [ lyric, gotLyrics] = useState('');

  useEffect(() => {

    if(Object.keys(getLyrics).length === 0) return;
    
    const getAPI = async () => {
      const  { artist, song } = getLyrics;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const result = await axios(url);
      gotLyrics(result.data.lyrics);
    }
    getAPI();
  }, [getLyrics])

  return (
      <Fragment>
        <Form
          saveLyrics={saveLyrics}
        />
        <div className="container mt-5">
          <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-6">
                <Song
                  lyric={lyric}
                />
              </div>
          </div>
        </div>
      </Fragment>
  );
}


export default App;

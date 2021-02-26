import React, {useState } from 'react';

const Form = () => {

  const [search, setSearch] = useState({
    artist: '',
    song: ''
  });

  const [ error, saveError ] = useState(false)

  const { artist, song } = search;
  const updateState = e => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const getInfo = e => {
    e.preventDefault();
    if (artist.trim() === "" || song.trim() === ""){
        saveError(true)
        return;
    }
    saveError(false)
  }

  return (
      <div className="bg-info">
        <div className="container">
          <div className="row">
            <form 
            onSubmit={getInfo} 
            className="col card text-while bg-transparent mb-5 pt-5 pb-2">
              <fieldset>
                <legend className="text-center">Search Lyrics</legend>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Artist</label>
                      <input 
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artit's Name"
                      onChange={updateState}
                      value={artist}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>Song</label>
                        <input 
                        type="text"
                        className="form-control"
                        name="song"
                        placeholder="Song's Name"
                        onChange={updateState}
                        value={song}
                        />
                      </div>
                  </div>
                </div>

                <button
                type="submit"
                className="btn btn-primary float-right">Search</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Form;

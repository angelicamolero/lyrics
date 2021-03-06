import React from 'react';

const Info = ({info}) => {
    if(Object.keys(info).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES} = info;
    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist's Information
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist't logo"/>
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text">Biography:</h2>
                <p className="card-text">{strBiographyES}</p>
            </div>
        </div>
    );
}

export default Info;
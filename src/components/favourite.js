import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favourites() {
    const [favourite, setFavourite] = useState([]);

    useEffect(() => {
        const savedFavourites = localStorage.getItem("favouriteStudents");
        if (savedFavourites) {
            setFavourite(JSON.parse(savedFavourites));
        }
    }, []);

    const removeFrom = (student) => {
        const updatedFavourites = favourite.filter((item) => item !== student);
        setFavourite(updatedFavourites);
        localStorage.setItem("favouriteStudents", JSON.stringify(updatedFavourites));
    };

    return (
        <div>
            <nav>
                <Link to="/">List of Students</Link>
                <Link to="/favourite">Favourite Students</Link>
            </nav>
            {favourite.length > 0 ? (
                <div>
                    {favourite.map((student, index) => (
                        <div className='fav-card' key={index}>
                        <p>{student}</p>
                        <button onClick={() => removeFrom(student)}>Remove</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favourites added yet.</p>
            )}
        </div>
    );
}

export default Favourites;

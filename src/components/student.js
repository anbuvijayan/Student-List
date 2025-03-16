import { useState, useEffect } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function Student() {

    const Student = ["Mani", "Prabhu", "Sandhya", "Sakthi", "Jagan"];
    const [favourite, setFavourite] = useState(() => {
        const savedFavourites = localStorage.getItem("favouriteStudents");
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favouriteStudents", JSON.stringify(favourite));
    }, [favourite]);

    const addToFavourite = (student) => {
        if (!favourite.includes(student)) {
            setFavourite([...favourite, student]);
        }
    };

    return (
        <div className="Student-container">
            <nav>
            <Link to="/">List of Students</Link>
            <Link to="/favourite" state={{ favourite }}>Favourite Students</Link>
            </nav>
            <div className='student-List'>
                <div className='student-Part'>
                    {Student.map((student, index) => (
                        <div className='student-card' key={index}>
                            <p>{student}</p>
                            <button onClick={() => addToFavourite(student)} disabled={favourite.includes(student)}>Add to Favourite</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Student


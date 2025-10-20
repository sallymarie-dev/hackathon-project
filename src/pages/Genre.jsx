

import { useState } from "react";

export default function Genre({ data }) {
    const [filteredList, setFilteredList] = useState([]);

    // Filter movies by genre
    function handleGenre(genre) {
        const filtered = data.filter((movie) => movie.Genre.includes(genre));
        setFilteredList(filtered);
        console.log("Filtered Movies:", filtered);
    }

    return (
        <>
            <h1>Genre</h1>
            <p>Select a Genre</p>
            <div style={{ marginBottom: "20px" }}>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => handleGenre("Comedies")}
                >
                    Comedy
                </button>
                <button
                    className="btn btn-danger m-1"
                    onClick={() => handleGenre("Dramas")}
                >
                    Drama
                </button>
                <button
                    className="btn btn-success m-1"
                    onClick={() => handleGenre("Action")}
                >
                    Action
                </button>
                <button
                    className="btn btn-warning m-1"
                    onClick={() => handleGenre("Thriller")}
                >
                    Thriller
                </button>
            </div>

            <h2>Movies:</h2>
            <p>
                
                {filteredList.length === 0 ? (
                    <p>No movies found</p>
                ) : (
                    filteredList.map((movie, index) => (
                        <p key={index}>{movie.Title}</p>
                    ))
                )}
            </p>
        </>
    );
}

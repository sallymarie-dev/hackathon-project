import { useState } from "react";

export default function Ratings({ data }) {
    const [filteredList, setFilteredList] = useState([]);

    // Filter movies by rating
    function handleRating(rating) {
        const filtered = data.filter((movie) => movie.Rating.includes(rating));
        setFilteredList(filtered);
        console.log("Filtered Movies by Rating:", filtered);
    }

    return (
        <>
            <h1>Ratings</h1>
            <p>Select a Rating</p>
            <div style={{ marginBottom: "20px" }}>
                <button
                    className="btn btn-primary m-1"
                    onClick={() => handleRating("TV-MA")}
                >
                    TV-MA
                </button>
                <button
                    className="btn btn-danger m-1"
                    onClick={() => handleRating("TV-PG")}
                >
                    TV-PG
                </button>
                <button
                    className="btn btn-success m-1"
                    onClick={() => handleRating("TV-14")}
                >
                    TV-14
                </button>
                <button
                    className="btn btn-warning m-1"
                    onClick={() => handleRating("R")}
                >
                    R
                </button>
                <button
                    className="btn btn-info m-1"
                    onClick={() => handleRating("NR")}
                >
                    NR
                </button>
                <button
                    className="btn btn-secondary m-1"
                    onClick={() => handleRating("TV-G")}
                >
                    TV-G
                </button>
            </div>

            <h2>Movies:</h2>
            <p>
                {filteredList.length === 0 ? (
                    <p>No movies found</p>
                ) : (
                    filteredList.map((movie) => <p key={movie.id}>{movie.Title}</p>)
                )}
            </p>
        </>
    );
}

// import { useState } from "react";

// export default function Genre({ data }) {

//     const [filteredList, setFilteredList] = useState([]);

//     function handleGenre(genre) {
//         console.log("clicked Genre")

//         const comedyGenre = data.filter((movie)=> movie.Genre.includes(genre));

//         setFilteredList(comedyGenre)
//     }


//     // for (let i = 0; i < comedyGenre.length; i++) {
//     //     filteredList.push(<>
//     //         <li>{filteredList[i].Name}</li>
//     //     </>)
//     // }


// }




// import { useState } from "react";

// export default function Genre({ data }) {
//   const [filteredList, setFilteredList] = useState([]);

//   function handleGenre(genre) {
//     const filtered = data.filter((movie) => movie.Genre.includes(genre));
//     setFilteredList(filtered);
//   }

//   return (
//     <>
//       <h1>Genre</h1>
//       <p>Select a Genre</p>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={() => handleGenre("comedies")}
//         >
//           Comedy
//         </button>
//         <button
//           type="button"
//           className="btn btn-danger"
//           onClick={() => handleGenre("drama")}
//         >
//           Drama
//         </button>
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={() => handleGenre("action")}
//         >
//           Action
//         </button>
//         <button
//           type="button"
//           className="btn btn-warning"
//           onClick={() => handleGenre("thriller")}
//         >
//           Thriller
//         </button>
//       </div>

//       <h2>Movies:</h2>
//       <ul>
//         {filteredList.map((movie, index) => (
//           <li key={index}>{movie.Name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

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
            <ul>
                {filteredList.length === 0 ? (
                    <li>No movies found</li>
                ) : (
                    filteredList.map((movie, index) => (
                        <li key={index}>{movie.Title}</li>
                    ))
                )}
            </ul>
        </>
    );
}

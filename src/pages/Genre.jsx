import { useState } from "react"

export default function Genre({ data }) {

    const [filteredList, setFilteredList] = useState([])

    function handleGenre() {
        console.log("clicked Genre")

        const comedyGenre = []
        for (let i = 0; i < data.length; i++) {
            if (data[i].Genre.includes("comedies")) {
                comedyGenre.push(data[i])
            }
        }
        setFilteredList(comedyGenre)
    }


    // for (let i = 0; i < comedyGenre.length; i++) {
    //     filteredList.push(<>
    //         <li>{filteredList[i].Name}</li>
    //     </>)
    // }

    return (
        <>
            <h1>Genre</h1>
            <p>Select a Genre</p>

            <button type="button" className="btn btn-primary" onClick={handleGenre}>Comedy</button>
            <button type="button" className="btn btn-danger">Drama</button>
            {/* <button type="button" className="btn btn-success" onClick={handleGenre}>Action</button>
            <button type="button" className="btn btn-warning">Thriller</button> */}

            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                    </h4><p className="card-text"></p><a href="#" className="card-link">Card link</a><a href="#" className="card-link">Another link</a>

                </div>
            </div>


        </>
    )
}

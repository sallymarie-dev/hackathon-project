import { useState } from 'react'
import './App.css'
import Genre from './pages/Genre'
import Ratings from './pages/Ratings'
import data from './data.json'
import Title from './pages/Title'
console.log(data.Title)
console.log(data.Genre)
console.log(data.Ratings)


function App() {
  const [currentPage, setCurrentPage] = useState("home")

  function titlePage() {
    setCurrentPage("title")

  }

  function genrePage() {
    setCurrentPage("genre")
  }

  function ratingsPage() {
    setCurrentPage("ratings")
  }

  let pageContent = <Title data={data} />

  if (currentPage === "home") {
    pageContent = <Title data={data} />
  } else if (currentPage === "genre") {
    pageContent = <Genre data={data} />
  } else if (currentPage === "ratings") {
    pageContent = <Ratings data={data} />

  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <nav>
          <h1>Netflix Movies</h1>
          {pageContent}
          <button type="button" onClick={titlePage}>Home</button>
          <button type="button" onClick={genrePage}>Genre</button>
          <button type="button" onClick={ratingsPage}>Ratings</button>
        </nav>
      </div>

    </>
  )
}

export default App

import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
    .then(r => r.json())
    .then((movies) => console.log(movies))
  }, [])
  return (
    <>
      <h1>Check the console for the list of movies</h1>
    </>
  )
}

export default App
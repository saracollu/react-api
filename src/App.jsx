import { useState } from 'react'


function App() {

  const [actressList, setActressList] = useState([])

  function getList() {
    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then(res => res.json())
      .then(data => {
        setActressList(data)
      })
  }
  getList()


  return (
    <>

      <ul>
        {
          actressList.map(actress => (
            <li key={actress.id}>{actress.name}</li>
          ))}
      </ul>
    </>
  )
}

export default App

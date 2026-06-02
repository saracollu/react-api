import { useEffect, useState } from 'react'
import ActressCard from './components/ActressCard'



function App() {

  const [actressList, setActressList] = useState([])

  function getList() {
    fetch("https://lanciweb.github.io/demo/api/actresses/")
      .then(res => res.json())
      .then(data => {
        setActressList(data)
      })
  }

  useEffect(() => getList, [])


  return (
    <>

      <ul>
        {
          actressList.map(actress => (
            <li key={actress.id}>{actress.name}</li>
          ))}
      </ul>

      <ActressCard></ActressCard>
    </>
  )
}

export default App

import { useEffect, useState, useCallback } from 'react'
import Character from './Character'

function App() {
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState()

  const requestCharacters = useCallback(async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
    const json = await res.json()
    setCharacters(json.results)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    requestCharacters().catch(console.error)
  }, [requestCharacters]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {characters?.map((character) => {
        return <Character character={character} key={character.id} />
      })}
    </div>
  )
}

export default App

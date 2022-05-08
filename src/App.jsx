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
  }, [page])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    requestCharacters().catch(console.error)
  }, [requestCharacters])

  return (
    <div>
      {characters?.map((character) => {
        return <Character character={character} key={character.id} />
      })}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          requestCharacters()
        }}
      >
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Previous
        </button>
        <button disabled={page >= 42} onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </form>
    </div>
  )
}

export default App

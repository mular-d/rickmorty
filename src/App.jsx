import { useEffect, useState, useCallback } from 'react'
import { Grid, Text, Spacer, Button, Row } from '@nextui-org/react'
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
      <Text
        h2
        size={48}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
          textAlign: 'center',
        }}
        weight='bold'
      >
        Rick and Morty
      </Text>
      <Spacer y={2} />

      <Grid.Container css={{ gap: '$xs' }} justify='center'>
        {characters?.map((character) => {
          return <Character character={character} key={character.id} />
        })}
      </Grid.Container>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          requestCharacters()
        }}
      >
        <Row justify='center' align='center'>
          <Button.Group color='gradient' ghost>
            <Button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
              &#60; Previous
            </Button>
            <Button disabled={page >= 42} onClick={() => setPage((p) => p + 1)}>
              Next &#62;
            </Button>
          </Button.Group>
        </Row>
      </form>
    </div>
  )
}

export default App

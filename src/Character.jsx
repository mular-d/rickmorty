import React from 'react'

const Character = ({ character }) => {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      <p>Status: {character.status}</p>
    </div>
  )
}

export default Character

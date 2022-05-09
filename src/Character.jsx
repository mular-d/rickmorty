import React from 'react'
import { Card, Text, Divider, Spacer } from '@nextui-org/react'

const Character = ({ character }) => {
  return (
    <div>
      <Card bordered color='primary' css={{ mw: '430px' }}>
        <Card.Header>
          <Text
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%',
            }}
            weight='bold'
          >
            {character.name}
          </Text>
        </Card.Header>
        <Divider />
        <Card.Body css={{ py: '$10' }}>
          <Card.Image src={character.image} alt={character.name} />
          <Text color='#E9A6A6'>Gender: {character.gender}</Text>
          <Text color='#E9A6A6'>Species: {character.species}</Text>
          <Text color='#E9A6A6'>Location: {character.location.name}</Text>
          <Text color='#E9A6A6'>
            Status:{' '}
            <Text
              span
              css={{ marginLeft: '$xs' }}
              color={
                character.status === 'Alive'
                  ? 'success'
                  : character.status === 'Dead'
                  ? 'error'
                  : '#0000ff'
              }
            >
              {character.status}
            </Text>
          </Text>
        </Card.Body>
      </Card>
      <Spacer y={1} />
    </div>
  )
}

export default Character

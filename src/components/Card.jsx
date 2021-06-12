import React from 'react';
import Bobesponja from '../service/dice';
import Text from './Title';
import {
  Description, Name, Title, Container,
} from './styled';

function Card() {
  return (
    <div>
      <Title>Personagens Bob Esponja</Title>
      {Bobesponja.map((item) => (
        <Container>
          <Name>{item.name}</Name>
          <img src={item.img} alt={item.name} width={150} />
          <Description>{item.description}</Description>
        </Container>
      ))}
      <Text> Aplicando o children</Text>
    </div>

  );
}

export default Card;

import React from 'react';

import { Container, Label } from './styles';

export default function Card({ data }) {
  return (
    <Container>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>Fazer migracao completa</p>
      {data.user && <img src={data.user} alt=""></img>}
    </Container>
  );
}

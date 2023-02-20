'use client';

import { memo } from 'react';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}

export default memo(Home);

import React from 'react';

import SearchInput from '../SearchInput';
import { Container, InfoPage } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <InfoPage>
        <div>
          <h1>Empresa XPTO</h1>
          <span> - Conheça todos os nosso produtos</span>
        </div>
        <small>
          Listagem de produtos - clique no produto desejado para saber mais
        </small>
      </InfoPage>
      <SearchInput />
    </Container>
  );
};

export default Header;
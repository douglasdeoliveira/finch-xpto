import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 130px;
  padding: 0 12px;
  background: #fff;
  box-shadow: 0px 3px 50px #00000029;

  @media (max-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    z-index: 10;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Item = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 16px 0;
  border-top: 1px solid #ccc;
  text-decoration: none;

  &:hover,
  &.active {
    img {
      opacity: 1;
    }

    strong {
      color: ${colors.primary};
    }
  }

  img {
    margin-bottom: 14px;
    opacity: 0.7;
    transition: opacity 0.2s ease;
  }

  strong {
    color: ${colors.grayText};
    font-size: 16px;
    transition: color 0.2s ease;
  }

  @media (max-width: 800px) {
    justify-content: flex-end;
    border: 0;
    padding: 0;
    margin-bottom: 4px;

    img {
      margin: 0;
    }
  }
`;

export const FinchLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 24px;

  @media (max-width: 800px) {
    display: none;
  }
`;

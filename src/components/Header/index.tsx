import logoImg from '../../assets/logo.svg';

import *  as S from './styles';


export const Header = () => (
  <S.Container>
    <S.Content>
      <img src={logoImg} alt="dt money" />
      <button type="button">
        New Transaction
      </button>
    </S.Content>
  </S.Container>
);
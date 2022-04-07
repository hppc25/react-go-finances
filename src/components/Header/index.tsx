import logoImg from '../../assets/logo.svg';

import *  as S from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
  }
  
  export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => (
  <S.Container>
    <S.Content>
      <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}> 
               New Transaction
      </button>
    </S.Content>
  </S.Container>
);
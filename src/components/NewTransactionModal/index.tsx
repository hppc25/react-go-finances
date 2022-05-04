import { useState } from 'react';

import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import * as S from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {

  const [type, setType] = useState('deposit');
  return ( 
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
      <button
      className="react-modal-close"
      type="button"
      onClick={onRequestClose}
    >
      <img src={closeImg} alt="Fechal modal" />
    </button>

    <S.Container>
      <h2>Register Transaction</h2>

      <input type="text" placeholder="Title" />
      <input type="number" placeholder="Value" />

      <S.TransactionTypeContainer>
      <S.RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
          <img src={incomeImg} alt="Entrada" />
          <span>Income</span>
        </S.RadioBox>

        <S.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
          <img src={outcomeImg} alt="Saída" />
          <span>Outcome</span>
        </S.RadioBox>
      </S.TransactionTypeContainer>

      <input type="text" placeholder="Category" />

      <button type="submit">Register</button>
    </S.Container>
  </Modal>
)};
import {FormEvent, useState } from 'react';

import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

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
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = { type, title, amount, category };
    api.post('/transactions', data);
  }

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

    <S.Container onSubmit={handleCreateNewTransaction}>
      <h2>Register Transaction</h2>

      <input 
        type="text" 
        placeholder="Title"
        value={title}
        onChange={({ target }) => setTitle(target.value)} 
        />

      <input 
        type="number" 
        placeholder="Value"
        value={amount}
        onChange={({ target }) => setAmount(Number(target.value))} />

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

      <input 
        type="text"
        placeholder="Category"
        value={category}
        onChange={({ target }) => setCategory(target.value)} 
        />

      <button type="submit">Register</button>
    </S.Container>
  </Modal>
)};
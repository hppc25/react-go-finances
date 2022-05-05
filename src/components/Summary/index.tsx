import { useContext } from 'react';

import { TransactionContext } from '../../TransactionsContext';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import *  as S from './styles';

export const Summary = () => {
  const {transactions} = useContext(TransactionContext);

  return (
  <S.Container>
    <div>
      <header>
        <p>Income</p>
        <img src={incomeImg} alt="Income"/>
      </header>
      <strong>£1000.00</strong>
    </div>

    <div>
      <header>
        <p>Outcome</p>
        <img src={outcomeImg} alt="Outcome"/>
      </header>
      <strong>- £300.00</strong>
    </div>

    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total"/>
      </header>
      <strong>£700.00</strong>
    </div>
  </S.Container>
)};
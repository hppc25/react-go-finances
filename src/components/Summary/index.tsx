import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import *  as S from './styles';

export const Summary = () => (
  <S.Container>
    <div>
      <header>
        <p>Income</p>
        <img src={outcomeImg} alt="Saídas"/>
      </header>
      <strong>£1000.00</strong>
    </div>

    <div>
      <header>
        <p>Outcome</p>
        <img src={incomeImg} alt="Entradas"/>
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
);
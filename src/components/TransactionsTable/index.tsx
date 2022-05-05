import { useContext } from 'react';
import { TransactionContext } from '../../TransactionsContext';

import * as S from './styles';

    
export const TransactionsTable = () => {

  const {transactions} = useContext(TransactionContext);


 return (
  <S.Container>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
  
{/* 
        <tr>
          <td>X-Bacon</td>
          <td className="withdraw">-R$25</td>
          <td>Desenvolvimento</td>
          <td>10/03/2021</td>
        </tr> */}
        {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.type ==="withdraw"?'-':'+'}{new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP'
                }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('en-GB').format(
                  new Date(transaction.createdAt)
                )}</td>
            </tr>
          ))}

      </tbody>
    </table>
  </S.Container>
)};
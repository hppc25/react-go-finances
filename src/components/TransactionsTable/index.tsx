import * as S from './styles';

export const TransactionsTable = () => (
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
        <tr>
          <td>Desenvolvimento de App</td>
          <td className="deposit">R$15.000</td>
          <td>Desenvolvimento</td>
          <td>16/03/2021</td>
        </tr>

        <tr>
          <td>X-Bacon</td>
          <td className="withdraw">-R$25</td>
          <td>Desenvolvimento</td>
          <td>10/03/2021</td>
        </tr>
      </tbody>
    </table>
  </S.Container>
);
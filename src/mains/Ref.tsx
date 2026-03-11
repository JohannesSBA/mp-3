import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px 30px 30px;
  width: 70%;
  background-color: #f4faf7;
  font-size: calc(16px + 0.1vw);
  min-height: 85vh;

  h3 {
    font-size: calc(17.6px + 0.3vw);
    margin-bottom: 10px;
  }

  @media (max-width: 750px) {
    width: 100%;

    h3 {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;

export default function Ref() {
  return (
    <StyledMain>
      <title>Refrences | Resume</title>
      <h3>Refrences</h3>
      <StyledTable>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Relation</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Woinshet Kassu</td>
            <td>Mother</td>
            <td>Ethiopia</td>
          </tr>
          <tr>
            <td>Seleshi Bekele</td>
            <td>Father</td>
            <td>Ethiopia</td>
          </tr>
          <tr>
            <td>Nolawit Messay</td>
            <td>Boss</td>
            <td>Boston</td>
          </tr>
          <tr>
            <td>Nylas Burgees</td>
            <td>Boss</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Natan Kahsai</td>
            <td>Co-Worker</td>
            <td>Tampa</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledMain>
  );
}

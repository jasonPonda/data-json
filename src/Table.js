export default function Table({ theadData, tbodyData }) {
  return (
    <table>
      <thead>
        <tr className="row">
          {theadData.map((heading) => {
            return (
              <th key={heading} className="heading">
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
          return (
            <tr key={index}>
              {theadData.map((key, index) => {
                return (
                  <td key={row[key]} className="data">
                    {row[key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

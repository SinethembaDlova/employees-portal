import React from 'react';
import StyledTable from './index.style';

function Table({ columnNames, data }) {
  return (
    <div>
      {data.length > 0 && (
        <StyledTable cellSpacing="0">
          <thead>
            <tr>
              {columnNames.map((headerName, index) => (
                <th key={index}>{headerName.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((object, index) => (
              <tr index={index} key={index}>
                {Object.values(object).map((value, index2) => (
                  <td index={index2} key={index2}>
                    {' '}
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </div>
  );
}

export default Table;

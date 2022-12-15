import React from 'react';
import StyledTable  from './index.style';

const Table = ({ columnNames, data }) => {

  return (
    <div>
      {data.length > 0 && (
        <StyledTable cellSpacing="0">
          <thead>
            <tr>
              {columnNames.map((headerName, index) => {
                return (
                  <th key={index}>{headerName.toUpperCase()}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((object, index) => {
              return (
                <tr index={index} key={index}>
                  {Object.values(object).map((value, index2) => {
                    return (
                      <td index={index2} key={index2}>
                        {' '}
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      )}
    </div>
  );

};

export default Table;
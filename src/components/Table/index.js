import React from 'react';
import PropTypes from 'prop-types';
import StyledTable from './index.style';

const Table = ({ columnNames, data }) => {
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
};

Table.propTypes = {
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;

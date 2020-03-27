import React from 'react';
import MUIDataTable from 'mui-datatables';

export const Conditions = ({ conditions }) => {
  const columns = ["Condition Name", "Date First Recorded", "Search on PubMed"];

  const options = {
    filter: false,
    onCellClick: (colData, cellMeta) => {
      // TODO: imperfect solution, would be way better to get a proper anchor element with the table library ...
      if (cellMeta.colIndex === 2) {
        window.location = `https://www.ncbi.nlm.nih.gov/pubmed/?term=${colData}`
      }
    }
  };

  let data = [];

  if (conditions) {
    data = conditions.entry.reduce((acc, condition) => {
      const isActive = condition.resource.clinicalStatus === 'active';

      if (isActive) {
        acc.push([
          condition.resource.code.text,
          condition.resource.dateRecorded,
          condition.resource.code.text
        ])
      }

      return acc;
    }, []);
  }

  return <MUIDataTable
    title={"Conditions"}
    data={data}
    columns={columns}
    options={options}
  />
};
import React from 'react';
import MUIDataTable from 'mui-datatables';

export const Conditions = ({ conditions }) => {
  const columns = [
    { name: 'Condition Name' },
    { name: 'Date First Recorded' },
    {
      name: 'Search on PubMed',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <a href={`https://www.ncbi.nlm.nih.gov/pubmed/?term=${value}`}>{value}</a>
        }
      }
    }
  ];


  const options = {
    filter: false
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
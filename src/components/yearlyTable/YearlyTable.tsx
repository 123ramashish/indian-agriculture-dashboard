// import table from react component mantine
import { Table } from '@mantine/core';
// import style from css module YearlyTable.module.cs
import styles from './YearlyTable.module.css';
// import data from helper file
import { processYearlyData, CropData } from './helpers';
// import main data from json file Manufac_India_Agro_Dataset
import data from '../../data/Manufac_India_Agro_Dataset.json';


 
export default function YearlyTable() {
  // Process the dataset to extract yearly data
  const yearlyData = processYearlyData(data as CropData[]);

  // Generate table rows
  const rows = yearlyData.map((element, index) => (
    <tr key={index}>
      <td>{element.year}</td>
      <td>{element.maxProduction}</td>
      <td>{element.minProduction}</td>
    </tr>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
      {/*  display the yearly table  */}
        <Table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Crop with Maximum Production in that Year</th>
              <th>Crop with Minimum Production in that Year</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}

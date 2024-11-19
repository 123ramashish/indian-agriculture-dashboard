import { Table } from '@mantine/core';
// import css form YearlyTable.module.css
import styles from '../yearlyTable/YearlyTable.module.css';
// import processAverageData from helpers to display
import { processAverageData, CropData } from './helpers';
// import all data from Manufac_India_Agro_Dataset
import data from '../../data/Manufac_India_Agro_Dataset.json';

export default function AverageTable() {
  // Process the dataset to extract yearly average data for each crop
  const averageData = processAverageData(data as CropData[]);

  // Generate table rows from the processed data
  const rows = averageData.map((element, index) => (
    <tr key={index}>
      <td>{element.crop}</td>
      <td>{element.avgYield}</td>
      <td>{element.avgArea}</td>
    </tr>
  ));

  return (
    // displaing the table
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <Table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Average Yield of the Crop between 1950-2020</th>
              <th>Average Cultivation Area of the Crop between 1950-2020</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}

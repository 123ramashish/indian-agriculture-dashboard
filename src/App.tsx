// importing aAverageTablell and YearlyTable from components folder
import AverageTable from './components/averageTable/AverageTable';
import YearlyTable from './components/yearlyTable/YearlyTable';

// main component to display 
function App() {
  // style  UI
  const styles = `

  /* main container */
    .section {  
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh; /* Ensure full height on small screens */
      text-align: center;
      padding: 16px; /* Add padding for smaller devices */
    }

/* heading style */
    .heading {
      margin-bottom: 16px; /* Space below headings */
      color: #1c7ed6; /* Use a primary color */
    }

    /* style table container */
    .tableContainer {
      width: 100%; /*  tables take full width */
      max-width: 90%; /* Restrict maximum width for responsiveness */
      margin-bottom: 24px; /* Add space below each table */
      overflow-x: auto; /* Enable horizontal scrolling for small screens */
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="section">
        <h1 className="heading">Agriculture Data Analysis</h1>
        <h2 className="heading">Yearly Crop Production</h2>
        <div className="tableContainer">
          {/* yearly table component */ }
          <YearlyTable />
        </div>
        <h2 className="heading">Averages Crop Production</h2>
        <div className="tableContainer">
        {/* Average table component */ }
          <AverageTable />
        </div>
      </div>
    </>
  );
}

export default App;

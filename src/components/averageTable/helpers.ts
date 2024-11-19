// TypeScript type representing crop information
export type CropData = {
    Country: string; // Name of the country
    Year: string; // Year of the crop data
    "Crop Name": string; // Name of the crop
    "Crop Production (UOM:t(Tonnes))": string | number; // Crop production in tonnes (can be a number or string)
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number; // Yield of crops in kilograms per hectare
    "Area Under Cultivation (UOM:Ha(Hectares))": string | number; // Area under cultivation in hectares
  };
  
  // Function to calculate average yield and area for each crop
  export const processAverageData = (data: CropData[]) => {
    // Object to store aggregated stats for each crop
    const cropStats: Record<string, { totalYield: number; totalArea: number; count: number }> = {};
  
    // Iterate over each crop data record
    for (const record of data) {
      // Parse yield and area values as floating-point numbers
      const yieldValue = parseFloat(record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] as string);
      const area = parseFloat(record["Area Under Cultivation (UOM:Ha(Hectares))"] as string);
  
      // Skip records with invalid yield or area values (e.g., NaN or undefined)
      if (isNaN(yieldValue) || isNaN(area)) continue;
  
      // Extract the crop name for grouping
      const cropName = record["Crop Name"];
  
      // Check if the crop is already in the stats object
      if (!cropStats[cropName]) {
        // If not, initialize its stats
        cropStats[cropName] = { totalYield: 0, totalArea: 0, count: 0 };
      }
  
      // Accumulate the yield and area for the crop
      cropStats[cropName].totalYield += yieldValue;
      cropStats[cropName].totalArea += area;
  
      // Increment the count of records for this crop
      cropStats[cropName].count += 1;
    }
  
    // Calculate the average yield and area for each crop
    return (
      Object.entries(cropStats) // Convert cropStats object to an array of [cropName, stats] pairs
        .map(([crop, stats]) => ({
          // For each crop, calculate the averages
          crop,
          avgYield: roundToDecimalPlaces(stats.totalYield / stats.count, 3), // Average yield, rounded to 3 decimal places
          avgArea: roundToDecimalPlaces(stats.totalArea / stats.count, 3), // Average area, rounded to 3 decimal places
        }))
    );
  };
  
  // Utility function to round a number to a specific number of decimal places
  const roundToDecimalPlaces = (value: number, decimals: number): number => {
    // Use toFixed() to round the value, then convert it back to a number
    return +value.toFixed(decimals);
  };
  
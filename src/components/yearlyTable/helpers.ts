// TypeScript type representing crop information
export type CropData = {
  Year: string; // Example: "Financial Year (Apr - Mar), 1950"
  "Crop Name": string; // Example: "Wheat"
  "Crop Production (UOM:t(Tonnes))": string | number | null; // Crop production in tonnes (may be null or empty)
};

// Function to process crop data and return yearly max/min production details
export const processYearlyData = (data: CropData[]) => {
  // Object to store max and min production for each year
  const yearlyStats: Record<string, { maxCrop: string; minCrop: string; maxProd: number; minProd: number }> = {};

  for (const record of data) {
    // Extract year from the "Year" field (e.g., "Financial Year (Apr - Mar), 1950")
    const year = record.Year.split(',')[1]?.trim() || "";

    // Parse crop production to a valid number; treat null/empty as 0
    const production = parseFloat(record["Crop Production (UOM:t(Tonnes))"] as string) || 0;

    if (!year) continue; // Skip records with invalid year

    // If the year is not in the stats, initialize it
    if (!yearlyStats[year]) {
      yearlyStats[year] = {
        maxCrop: record["Crop Name"],
        minCrop: record["Crop Name"],
        maxProd: production,
        minProd: production,
      };
    } else {
      // Update max crop and production
      if (production > yearlyStats[year].maxProd) {
        yearlyStats[year].maxProd = production;
        yearlyStats[year].maxCrop = record["Crop Name"];
      }

      // Update min crop and production
      if (production < yearlyStats[year].minProd) {
        yearlyStats[year].minProd = production;
        yearlyStats[year].minCrop = record["Crop Name"];
      }
    }
  }

  // Convert the yearlyStats object into an array of results
  return Object.keys(yearlyStats).map(year => ({
    year,
    maxProduction: yearlyStats[year].maxCrop,
    minProduction: yearlyStats[year].minCrop,
  }));
};

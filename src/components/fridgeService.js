export async function getFridgeStatus() {
  try {
    const response = await fetch("https://api.example.com/fridge-status");
    if (!response.ok) {
      throw new Error("Failed to fetch fridge status");
    }
    const data = await response.json();
    return {
      temperature: { value: data.temperature, unit: "°C" },
      energyConsumption: { value: data.energyConsumption, unit: "kWh" },
      doorStatus: { value: data.doorStatus, unit: "" },
    };
  } catch (error) {
    console.error("Error fetching fridge status:", error);

    // Return mock data in case of error
    return {
      temperature: { value: 4, unit: "°C" },
      energyConsumption: { value: 1.2, unit: "kWh" },
      doorStatus: { value: "Closed", unit: "" },
    };
  }
}

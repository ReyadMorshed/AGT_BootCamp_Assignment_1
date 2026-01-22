// Always return tomorrow as the start date
export async function getTomorrowStartDate(): Promise<string> {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() + 1); // Always tomorrow

  return start.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

// Return the end date (day after the given start date)
export async function getEndDateFromStart(startDate: string): Promise<string> {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + 1); // End date = next day

  return end.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

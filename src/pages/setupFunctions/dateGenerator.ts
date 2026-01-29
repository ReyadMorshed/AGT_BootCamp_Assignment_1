// Always return tomorrow as the start date
// export async function getTomorrowStartDate(): Promise<string> {
//   const today = new Date();
//   const start = new Date(today);
//   start.setDate(today.getDate() + 1); // Always tomorrow

//   return start.toISOString().split("T")[0]; // Format: YYYY-MM-DD
// }

// export async function getTomorrowStartDate(): Promise<string> {
//   const workerIndex = Number(process.env.PLAYWRIGHT_WORKER_INDEX ?? 0);

//   const date = new Date();
//   date.setDate(date.getDate() + 1 + workerIndex * 10);

//   return date.toISOString().split("T")[0]; // YYYY-MM-DD
// }

export async function getTomorrowStartDate(): Promise<string> {
  const MIN_OFFSET = 30; // avoid near dates
  const MAX_OFFSET = 400; // wide window → low collision chance

  const randomOffset =
    Math.floor(Math.random() * (MAX_OFFSET - MIN_OFFSET + 1)) + MIN_OFFSET;

  const date = new Date();
  date.setDate(date.getDate() + randomOffset);

  return date.toISOString().split("T")[0]; // YYYY-MM-DD
}

export async function getEndDateFromStart(startDate: string): Promise<string> {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + 1);

  return end.toISOString().split("T")[0]; // YYYY-MM-DD
}

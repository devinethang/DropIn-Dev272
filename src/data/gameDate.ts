export function parseGameDate(date: string, time: string): string | null {
  const dateParts = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(date.trim());
  const timeParts = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i.exec(time.trim());
  if (!dateParts || !timeParts) return null;

  const month = Number(dateParts[1]);
  const day = Number(dateParts[2]);
  const year = Number(dateParts[3]);
  let hour = Number(timeParts[1]);
  const minute = Number(timeParts[2]);
  const period = timeParts[3]?.toUpperCase();
  if (
    year < 100 ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    minute > 59 ||
    (period ? hour < 1 || hour > 12 : hour > 23)
  ) {
    return null;
  }
  if (period) hour = (hour % 12) + (period === "PM" ? 12 : 0);

  const result = new Date(year, month - 1, day, hour, minute);
  if (
    result.getFullYear() !== year ||
    result.getMonth() !== month - 1 ||
    result.getDate() !== day ||
    result.getHours() !== hour ||
    result.getMinutes() !== minute
  ) {
    return null;
  }
  return result.toISOString();
}

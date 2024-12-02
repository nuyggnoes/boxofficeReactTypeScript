export const getLastWeek = (): string => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const lastSunday = new Date(today);

  lastSunday.setDate(today.getDate() - dayOfWeek - 7);

  const year = lastSunday.getFullYear();
  const month = String(lastSunday.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(lastSunday.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
};
export const removeHyphen = (date: string): string => date.replace(/-/g, '');

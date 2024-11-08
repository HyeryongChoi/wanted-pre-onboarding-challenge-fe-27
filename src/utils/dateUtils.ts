export const formatFullDate = (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleString('en-GB', {
    weekday: 'long', // Monday
    year: 'numeric', // 2024
    month: 'long', // November
    day: 'numeric', // 7
    hour: '2-digit', // 15
    minute: '2-digit', // 45
    hour12: false, // 24hour format
  });
};

export const dateConverter = (data: string) => {
  const [date, time] = data.replace('Z', 'T').split('T');
  return `${date} ${time}`;
};

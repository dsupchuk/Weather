export const getData = (data) => {
  const dateTime = new Date(data * 1000);
  return `${dateTime.getHours()}h ${dateTime.getMinutes()}m ${dateTime.getSeconds()}s`;
};

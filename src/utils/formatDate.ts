export const formatDate = (input: Date) => {
  const inputDate = new Date(input);

  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();
  return `${day}/${month}/${year}`;
};

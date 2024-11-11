export const formatDateInbox = (input: Date) => {
  console.log(1511);
  const inputDate = new Date(input);
  const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(
    inputDate
  );

  // Get the day and month in 2-digit format (e.g., "11" and "11")
  const day = new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(
    inputDate
  );
  const month = new Intl.DateTimeFormat("en-GB", { month: "2-digit" }).format(
    inputDate
  );

  return `${weekday} ${day}-${month}`;
};

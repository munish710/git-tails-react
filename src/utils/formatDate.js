export const formatDate = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toDateString().split(" ").slice(1).join(" ");
};

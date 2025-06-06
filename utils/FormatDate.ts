const months = [
  "", // placeholder for index 0
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function formatDate(dateString: string) {
  const dateParts = dateString.split("-");
  if (dateParts.length !== 3) return dateString;

  const year = dateParts[0];
  const month = months[parseInt(dateParts[1], 10)];

  if (!month) return dateString;

  return `${month} ${year}`;
}

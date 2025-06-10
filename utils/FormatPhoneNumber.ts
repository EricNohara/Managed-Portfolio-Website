export default function formatPhoneNumber(number: string) {
  if (number.length != 10) return number;
  return `(${number.substring(0, 3)})-${number.substring(
    3,
    6
  )}-${number.substring(6)}`;
}

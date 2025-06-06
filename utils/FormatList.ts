import { format } from "path";

const formatList = (list: string[]) => {
  return list
    .map((item: string) =>
      item
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    )
    .join(", ");
};

export default formatList;

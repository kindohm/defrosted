import { Status } from "./getDefrostedStatus";

export const getDefrostedText = (status: Status) => {
  return status === "frozen"
    ? "NO. Mariah Carey is currently frozen."
    : status === "defrosted"
    ? "YES. Mariah Carey is defrosted."
    : status === "hot"
    ? "YES. More than defrosted. Mariah Carey has reached peak temperature."
    : `We don't know.`;
};

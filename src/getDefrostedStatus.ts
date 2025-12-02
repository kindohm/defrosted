export type Status = "frozen" | "defrosted" | "hot" | "unknown";

export const getDefrostedStatus = (now: Date): Status => {
  const year = now.getFullYear();

  // Calculate the fourth Thursday of November
  const nov1 = new Date(year, 10, 1);
  const firstThursday =
    nov1.getDay() === 4 ? 1 : ((11 - nov1.getDay()) % 7) + 1;
  const thanksgivingDay = firstThursday + 21; // 4th Thursday
  const thanksgiving = new Date(year, 10, thanksgivingDay);
  const newYears = new Date(year + 1, 0, 1);
  const curNewYears = new Date(year, 0, 1);

  const status =
    now >= curNewYears && now < nov1
      ? "frozen"
      : now >= nov1 && now <= thanksgiving
      ? "defrosted"
      : now > thanksgiving && now < newYears
      ? "hot"
      : "unknown";

  return status;
};

export const format = (date: Date, formatStr: string) => {
  const FORMAT_REGEX = /Y{2,4}|M{1,2}|D{1,2}|h{1,2}|m{1,2}|s{1,2}/g;

  const matches = {
    YY: date.getFullYear().toString().slice(-2),
    YYYY: date.getFullYear().toString(),
    M: (date.getMonth() + 1).toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, "0"),
    D: date.getDate().toString(),
    DD: date.getDate().toString().padStart(2, "0"),
    h: date.getHours().toString(),
    hh: date.getHours().toString().padStart(2, "0"),
    m: date.getMinutes().toString(),
    mm: date.getMinutes().toString().padStart(2, "0"),
    s: date.getSeconds().toString(),
    ss: date.getSeconds().toString().padStart(2, "0"),
  };

  return formatStr.replace(
    FORMAT_REGEX,
    match => matches[match as keyof typeof matches],
  );
};

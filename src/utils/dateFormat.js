
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

const now = new Date();

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDate(date) {
    return dateTimeFormat.format(new Date(date));
}


export function elapsedTime(publishedDate) {
  const diffInMs = now - new Date(publishedDate);
  const diffInSeconds = Math.floor(diffInMs / 1000);


  let elapsedTime;

  if (diffInSeconds < 60) {
    // seconds
    elapsedTime = rtf.format(-diffInSeconds, "second");
  } else if (diffInSeconds < 3600) {
    // hour
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    elapsedTime = rtf.format(-diffInMinutes, "minute");
  } else if (diffInSeconds < 86400) {
    // day
    const diffInHours = Math.floor(diffInSeconds / 3600);
    elapsedTime = rtf.format(-diffInHours, "hour");
  } else if (diffInSeconds < 2592000) {
    // week
    const diffInDays = Math.floor(diffInSeconds / 86400);
    elapsedTime = rtf.format(-diffInDays, "day");
  } else if (diffInSeconds < 31536000) {
    // month
    const diffInMonths = Math.floor(diffInSeconds / 2592000);
    elapsedTime = rtf.format(-diffInMonths, "month");
  } else {
    // year
    const diffInYears = Math.floor(diffInSeconds / 31536000);
    elapsedTime = rtf.format(-diffInYears, "year");
  }

  return elapsedTime;
}

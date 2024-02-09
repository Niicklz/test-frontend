const ONE_DAY_IN_MS = 216000000;
const ONE_SECOND_IN_MS = 1000;

export const countdownInDays = (countdownDays = 10, callback) => {
  let totalMs = 0;

  let seconds = 60;
  let minutes = 59;
  let hours = 23;
  let days = countdownDays;

  const durationMs = countdownDays * ONE_DAY_IN_MS;

  const interval = setInterval(() => {
    totalMs += ONE_SECOND_IN_MS;

    if (hours === 0 && minutes === 0 && seconds === 0) {
      days = days === 0 ? 31 : days - 1;
    }

    if (minutes === 0 && seconds === 0) {
      hours = hours === 0 ? 23 : hours - 1;
    }

    if (seconds === 0) {
      minutes = minutes === 0 ? 60 : minutes - 1;
    }

    seconds = seconds === 0 ? 60 : seconds - 1;

    callback?.({ days, hours, minutes, seconds });

    if (totalMs >= durationMs) {
      clearInterval(interval);
    }
  }, ONE_SECOND_IN_MS);

  return interval;
};

const clock = () => {
  const now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();
  let secds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  secds = secds < 10 ? "0" + secds : secds;

  const time = `${hours}:${mins}:${secds} ${hours < 12 ? "AM" : "PM"}`;

  // Display the clock
  document.getElementById("clock").textContent = time;

  setTimeout(clock, 1000);
};

const inputValue = document.getElementById("inputValue");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q= " +
      inputValue.value +
      " &units=metric&appid=1555d9693080b6cc291327886da7bdb9"
  )
    .then((res) => res.json())
    .then((data) => {
      const cityName = data.name;
      const cityTemp = data.main.temp;
      const icon = data.weather[0].icon;
      const weatherStatus = data.weather[0].main;

      document.getElementById("cityName").innerText = cityName;
      document.getElementById("cityTemp").innerText = cityTemp;
      const img = document.getElementById("weatherImg");
      img.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${icon}@2x.png`
      );
      document.getElementById("weatherStatus").innerText = weatherStatus;
    });
});

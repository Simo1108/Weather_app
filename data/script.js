const API_KEY = "6bfc30471a0731f63221660b6f2ba7af";
const cityForm = document.querySelector("#cityForm");


function fetchData(city = 'Timisoara') {
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid= ${API_KEY}`;

    fetchData(API_URL)
        .then((response) => response.json())
        .then((responseJSON) => console.log(responseJSON));
}
function cityFormSubmitHandler(event) {
    
    const data = new FormData(event.target)
    const entries = Object.fromEntries(data.entries());
    
    fetchData(entriescity)
}
cityForm.addEventListener("submit", (event) => cityFormSubmitHandler(event));
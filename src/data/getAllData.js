export const getAllData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
}
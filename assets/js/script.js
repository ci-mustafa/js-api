const API_KEY = "yPZIPE0kM2HTOoVclEEOtwd-OIk";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal =  new bootstrap.Modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();
    if (response.ok) {
        displayData(data);
    } else {
        throw new Error(data.error)
    }
}

function displayData(data){
    let heading = "API KEY STATUS";
    let modalBodyContent = `<div>Your key is valid until</div>`;
    modalBodyContent += `<div class= "key-status">${data.expiry}</div>`;
    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = modalBodyContent;
    resultsModal.show();
};

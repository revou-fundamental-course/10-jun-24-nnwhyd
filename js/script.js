function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value for Celsius.");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    let calculationText = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("calculation").innerText = calculationText;
    document.getElementById("calculation").classList.remove("hidecontent");
    document.getElementById("calculation").classList.add("showcontent");
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Please enter a value for Fahrenheit.");
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    let calculationText = `(${fahrenheit}°F - 32) * (5/9) = ${celsius.toFixed(2)}°C`;
    document.getElementById("calculation").innerText = calculationText;
    document.getElementById("calculation").classList.remove("hidecontent");
    document.getElementById("calculation").classList.add("showcontent");
}

function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").innerText = "";
    document.getElementById("calculation").classList.remove("showcontent");
    document.getElementById("calculation").classList.add("hidecontent");
}

const convertButton = document.querySelector(".convert-btn");
const weightInput = document.querySelector("#weight");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const resultDiv = document.querySelector("#result");

convertButton.addEventListener("click", function () {
  let weight = parseFloat(weightInput.value);
  if (fromUnit.value === "kg" && toUnit.value === "lbs") {
    weight *= 2.2;
  } else if (fromUnit.value === "lbs" && toUnit.value === "kg") {
    weight /= 2.2;
  } else {
    alert("You cannot convert same units");
    return;
  }
  resultDiv.textContent = `Converted Weight: ${weight.toFixed(2)}`;
});

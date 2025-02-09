class WeightConverter {
  constructor() {
    this.convertButton = document.querySelector(".convert-btn");
    this.weightInput = document.querySelector("#weight");
    this.fromUnit = document.querySelector("#fromUnit");
    this.toUnit = document.querySelector("#toUnit");
    this.resultDiv = document.querySelector("#result");

    this.addEventListeners();
  }

  addEventListeners() {
    this.convertButton.addEventListener("click", () => this.convert());
  }

  convert() {
    let weight = parseFloat(this.weightInput.value);
    if (isNaN(weight)) {
      alert("Please enter a valid number");
      return;
    }

    if (this.fromUnit.value === this.toUnit.value) {
      alert("You cannot convert same units");
      return;
    }

    if (this.fromUnit.value === "kg" && this.toUnit.value === "lbs") {
      weight *= 2.2;
    } else if (this.fromUnit.value === "lbs" && this.toUnit.value === "kg") {
      weight /= 2.2;
    }

    this.resultDiv.textContent = `Converted Weight: ${weight.toFixed(2)}`;
  }
}

// Instantiate the converter when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => new WeightConverter());

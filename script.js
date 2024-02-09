function calculateTotalPoints(inputValue) {
  if (inputValue === "mars") {
    return 3 * 4;
  }
  if (inputValue === "sat") {
    return 3 * 3;
  }
  if (inputValue === "sun") {
    return 3 * 2;
  }
  if (inputValue === "rahu") {
    return 3 * 1;
  }
  return 0; // Default value if no match is found
}

function calculateTotalPointsSeven(inputValue) {
  if (inputValue === "mars") {
    return 5 * 4;
  }
  if (inputValue === "sat") {
    return 5 * 3;
  }
  if (inputValue === "sun") {
    return 5 * 2;
  }
  if (inputValue === "rahu") {
    return 5 * 1;
  }
  return 0; // Default value if no match is found
}

function calculateTotalPointsEight(inputValue) {
  if (inputValue === "mars") {
    return 6 * 4;
  }
  if (inputValue === "sat") {
    return 6 * 3;
  }
  if (inputValue === "sun") {
    return 6 * 2;
  }
  if (inputValue === "rahu") {
    return 6 * 1;
  }
  return 0; // Default value if no match is found
}

function calculateTotalPointstweleve(inputValue) {
  if (inputValue === "mars") {
    return 1 * 4;
  }
  if (inputValue === "sat") {
    return 1 * 3;
  }
  if (inputValue === "sun") {
    return 1 * 2;
  }
  if (inputValue === "rahu") {
    return 1 * 1;
  }
  return 0; // Default value if no match is found
}

var boytotalPointsCombined = 0;
var girltotalPointsCombined = 0;
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");

  // Define a function to calculate total points for a specific house
  function calculateHouseTotal(houseName) {
    let totalPoints = 0;

    for (let i = 1; i <= 12; i++) {
      const checkbox = document.getElementById(`${houseName}${i}`);

      if (checkbox && checkbox.checked) {
        // Get the value of the checked checkbox
        const val = checkbox.value;
        // Use the appropriate calculation function based on the house name
        switch (houseName) {
          case "ascendent1st":
          case "moon1st":
          case "venus1st":
            totalPoints += calculateTotalPoints(val);
            break;
          case "ascendent2nd":
          case "moon2nd":
          case "venus2nd":
            totalPoints += calculateTotalPoints(val);
            break;
          case "ascendent4th":
          case "moon4th":
          case "venus4th":
            totalPoints += calculateTotalPoints(val);
            break;
          case "ascendent7th":
          case "moon7th":
          case "venus7th":
            totalPoints += calculateTotalPointsSeven(val);
            break;
          case "ascendent8th":
          case "moon8th":
          case "venus8th":
            totalPoints += calculateTotalPointsEight(val);
            break;
          case "ascendent12th":
          case "moon12th":
          case "venus12th":
            totalPoints += calculateTotalPointstweleve(val);
            break;
          default:
            // Handle other houses or defaults if needed
            totalPoints += 0;
            break;
        }
      }
    }

    return totalPoints;
  }

  calculateButton.addEventListener("click", function () {
    // Calculate values for Boys
    const totalPointsHouse1 = calculateHouseTotal("ascendent1st");
    const totalPointsHouseMoon1 = calculateHouseTotal("moon1st");
    const totalPointsHouseVenus1 = calculateHouseTotal("venus1st");
    const totalPointsHouse2 = calculateHouseTotal("ascendent2nd");
    const totalPointsHouseMoon2 = calculateHouseTotal("moon2nd");
    const totalPointsHouseVenus2 = calculateHouseTotal("venus2nd");
    const totalPointsHouse4 = calculateHouseTotal("ascendent4th");
    const totalPointsHouseMoon4 = calculateHouseTotal("moon4th");
    const totalPointsHouseVenus4 = calculateHouseTotal("venus4th");
    const totalPointsHouse7 = calculateHouseTotal("ascendent7th");
    const totalPointsHouseMoon7 = calculateHouseTotal("moon7th");
    const totalPointsHouseVenus7 = calculateHouseTotal("venus7th");
    const totalPointsHouse8 = calculateHouseTotal("ascendent8th");
    const totalPointsHouseMoon8 = calculateHouseTotal("moon8th");
    const totalPointsHouseVenus8 = calculateHouseTotal("venus8th");
    const totalPointsHouse12 = calculateHouseTotal("ascendent12th");
    const totalPointsHouseMoon12 = calculateHouseTotal("moon12th");
    const totalPointsHouseVenus12 = calculateHouseTotal("venus12th");

    // Calculate total points in Ascendent
    const totalHousePointAsc =
      totalPointsHouse1 +
      totalPointsHouse2 +
      totalPointsHouse4 +
      totalPointsHouse7 +
      totalPointsHouse8 +
      totalPointsHouse12;

    // Calculate total points in Moon
    const totalHousePointMoon =
      (totalPointsHouseMoon1 +
        totalPointsHouseMoon2 +
        totalPointsHouseMoon4 +
        totalPointsHouseMoon7 +
        totalPointsHouseMoon8 +
        totalPointsHouseMoon12) /
      2;

    // Calculate total points in Venus
    const totalHousePointVenus =
      (totalPointsHouseVenus1 +
        totalPointsHouseVenus2 +
        totalPointsHouseVenus4 +
        totalPointsHouseVenus7 +
        totalPointsHouseVenus8 +
        totalPointsHouseVenus12) /
      4;

    // Display the result in the HTML for Venus
    document.getElementById("venusResult").textContent =
      "Total Points in Venus Lagna: " + totalHousePointVenus;

    // Display the result in the HTML for Moon
    document.getElementById("moonResult").textContent =
      "Total Points in Moon Lagna: " + totalHousePointMoon;

    // Display the result in the HTML
    document.getElementById("ascendentResult").textContent =
      "Total Points in Ascendent: " + totalHousePointAsc;

    // Repeat the same structure for Moon and Venus charts

    // Calculate the combined total points
    const totalPointsCombined =
      totalHousePointAsc + totalHousePointMoon + totalHousePointVenus;

    boytotalPointsCombined = totalPointsCombined;

    // Display the combined total points for boys
    document.getElementById("boysResult").textContent =
      "Total Points for Male: " + boytotalPointsCombined;

    // Display the combined total points in the HTML
    document.getElementById("combinedResult").textContent =
      "Total Points Combined: " + totalPointsCombined;
    displayDifference();
  });

  // Listen for checkbox changes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Recalculate when a checkbox changes
      const houseName = checkbox.name;
      const totalPoints = calculateHouseTotal(houseName);

      // Display the updated result
      document.getElementById(
        houseName + "Result"
      ).textContent = `Total Points in ${houseName}: ${totalPoints}`;
      //displayDifference();
    });
  });
});

// This is for girls
var boytotalPointsCombined = 0;
var girltotalPointsCombined = 0;
document.addEventListener("DOMContentLoaded", function () {
  // const calculateButton = document.getElementById("girlcalculateButton");
  const calculateButton = document.getElementById("calculateButton");
  const girlCalculateButton = document.getElementById("girlcalculateButton");
  const totalCalculateButton = document.getElementById("totalcalculateButton");

  // Attach event listener to the total calculate button
  totalCalculateButton.addEventListener("click", function () {
    // Trigger click events of both calculateButton and girlCalculateButton
    calculateButton.click();
    girlCalculateButton.click();
  });

  // Define a function to calculate total points for a specific house
  function calculateHouseTotal(houseName) {
    let totalPoints = 0;

    for (let i = 1; i <= 12; i++) {
      const checkbox = document.getElementById(`${houseName}${i}`);

      if (checkbox && checkbox.checked) {
        // Get the value of the checked checkbox
        const val = checkbox.value;
        // Use the appropriate calculation function based on the house name
        switch (houseName) {
          case "girlascendent1st":
          case "girlmoon1st":
          case "girlvenus1st":
            totalPoints += calculateTotalPoints(val);
            break;
          case "girlascendent2nd":
          case "girlmoon2nd":
          case "girlvenus2nd":
            totalPoints += calculateTotalPoints(val);
            break;
          case "girlascendent4th":
          case "girlmoon4th":
          case "girlvenus4th":
            totalPoints += calculateTotalPoints(val);
            break;
          case "girlascendent7th":
          case "girlmoon7th":
          case "girlvenus7th":
            totalPoints += calculateTotalPointsSeven(val);
            break;
          case "girlascendent8th":
          case "girlmoon8th":
          case "girlvenus8th":
            totalPoints += calculateTotalPointsEight(val);
            break;
          case "girlascendent12th":
          case "girlmoon12th":
          case "girlvenus12th":
            totalPoints += calculateTotalPointstweleve(val);
            break;
          default:
            // Handle other houses or defaults if needed
            totalPoints += 0;
            break;
        }
      }
    }

    return totalPoints;
  }

  calculateButton.addEventListener("click", function () {
    // Calculate values for Boys
    const totalPointsHouse1 = calculateHouseTotal("girlascendent1st");
    const totalPointsHouseMoon1 = calculateHouseTotal("girlmoon1st");
    const totalPointsHouseVenus1 = calculateHouseTotal("girlvenus1st");
    const totalPointsHouse2 = calculateHouseTotal("girlascendent2nd");
    const totalPointsHouseMoon2 = calculateHouseTotal("girlmoon2nd");
    const totalPointsHouseVenus2 = calculateHouseTotal("girlvenus2nd");
    const totalPointsHouse4 = calculateHouseTotal("girlascendent4th");
    const totalPointsHouseMoon4 = calculateHouseTotal("girlmoon4th");
    const totalPointsHouseVenus4 = calculateHouseTotal("girlvenus4th");
    const totalPointsHouse7 = calculateHouseTotal("girlascendent7th");
    const totalPointsHouseMoon7 = calculateHouseTotal("girlmoon7th");
    const totalPointsHouseVenus7 = calculateHouseTotal("girlvenus7th");
    const totalPointsHouse8 = calculateHouseTotal("girlascendent8th");
    const totalPointsHouseMoon8 = calculateHouseTotal("girlmoon8th");
    const totalPointsHouseVenus8 = calculateHouseTotal("girlvenus8th");
    const totalPointsHouse12 = calculateHouseTotal("girlascendent12th");
    const totalPointsHouseMoon12 = calculateHouseTotal("girlmoon12th");
    const totalPointsHouseVenus12 = calculateHouseTotal("girlvenus12th");

    // Calculate total points in Ascendent
    const totalHousePointAsc =
      totalPointsHouse1 +
      totalPointsHouse2 +
      totalPointsHouse4 +
      totalPointsHouse7 +
      totalPointsHouse8 +
      totalPointsHouse12;

    //Calculate total points in Moon
    const totalHousePointMoon =
      (totalPointsHouseMoon1 +
        totalPointsHouseMoon2 +
        totalPointsHouseMoon4 +
        totalPointsHouseMoon7 +
        totalPointsHouseMoon8 +
        totalPointsHouseMoon12) /
      2;

    // Calculate total points in Venus
    const totalHousePointVenus =
      (totalPointsHouseVenus1 +
        totalPointsHouseVenus2 +
        totalPointsHouseVenus4 +
        totalPointsHouseVenus7 +
        totalPointsHouseVenus8 +
        totalPointsHouseVenus12) /
      4;

    // Display the result in the HTML for Venus
    document.getElementById("girlvenusResult").textContent =
      "Total Points in Venus Lagna: " + totalHousePointVenus;

    // Display the result in the HTML for Moon
    document.getElementById("girlmoonResult").textContent =
      "Total Points in Moon Lagna: " + totalHousePointMoon;

    // Display the result in the HTML
    document.getElementById("girlascendentResult").textContent =
      "Total Points in Ascendent: " + totalHousePointAsc;

    // Repeat the same structure for Moon and Venus charts

    // Calculate the combined total points
    const totalPointsCombined =
      totalHousePointAsc + totalHousePointMoon + totalHousePointVenus;

    girltotalPointsCombined = totalPointsCombined;

    // Display the combined total points for girls
    document.getElementById("girlsResult").textContent =
      "Total Points for Female: " + girltotalPointsCombined;

    // Display the combined total points in the HTML
    document.getElementById("girlcombinedResult").textContent =
      "Total Points Combined: " + totalPointsCombined;

    // Difference
    function displayDifference() {
      var differenceResultElement = document.getElementById("differenceResult");
      var differenceFaceElement = document.getElementById("differenceFace");

      if (boytotalPointsCombined >= girltotalPointsCombined) {
        var girlBoyDifference =
          boytotalPointsCombined - girltotalPointsCombined;
        differenceResultElement.textContent =
          "Difference Between Male and Female: " + girlBoyDifference;

        // Update style based on the difference value
        if (girlBoyDifference <= 20) {
          differenceResultElement.style.color = "green";
          differenceResultElement.style.backgroundColor = "transparent";
          differenceFaceElement.innerHTML = "😄";
          differenceFaceElement.classList.add("jumping-boy"); // Apply jumping animation
        } else {
          differenceResultElement.style.color = "red";
          differenceResultElement.style.backgroundColor = "transparent";
          differenceFaceElement.innerHTML = "😭";
          differenceFaceElement.classList.remove("jumping-boy"); // Remove jumping animation
        }
      } else {
        var girlBoyDifference =
          girltotalPointsCombined - boytotalPointsCombined;
        differenceResultElement.textContent =
          "Difference Between Male and Female: " + girlBoyDifference;

        // Update style based on the difference value
        if (girlBoyDifference <= 20) {
          differenceResultElement.style.color = "green";
          differenceResultElement.style.backgroundColor = "transparent";
          differenceFaceElement.innerHTML = "😄";
          differenceFaceElement.classList.add("jumping-boy"); // Apply jumping animation
        } else {
          differenceResultElement.style.color = "red";
          differenceResultElement.style.backgroundColor = "transparent";
          differenceFaceElement.innerHTML = "😭";
          differenceFaceElement.classList.remove("jumping-boy"); // Remove jumping animation
        }
      }
    }

    displayDifference();
  });

  // Existing JavaScript code for calculating individual male and female horoscopes

  // Add the provided code here

  // Listen for checkbox changes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      // Recalculate when a checkbox changes
      const houseName = checkbox.name;
      const totalPoints = calculateHouseTotal(houseName);

      // Display the updated result
      document.getElementById(
        houseName + "Result"
      ).textContent = `Total Points in ${houseName}: ${totalPoints}`;
    });
  });
});

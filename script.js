
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
    document.getElementById("testing").scrollIntoView({
        behavior: "smooth"
    });
});

const reportForm = document.getElementById("reportForm");
const reportOutput = document.getElementById("reportOutput");

reportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const testName = document.getElementById("testName").value.trim();
    const testType = document.getElementById("testType").value;
    const testResult = document.getElementById("testResult").value;
    const testDetails = document.getElementById("testDetails").value.trim();

    if (!testName || !testType || !testResult || !testDetails) {
        alert("Please fill in all fields.");
        return;
    }

    const reportCard = document.createElement("div");
    reportCard.className = "report-card";

    if (testResult === "Failed") {
        reportCard.classList.add("failed");
    }

    const heading = document.createElement("h3");
    heading.textContent = testName;

    const type = document.createElement("p");
    type.textContent = "Testing Type: " + testType;

    const result = document.createElement("p");
    result.textContent = "Result: " + testResult;

    const details = document.createElement("p");
    details.textContent = "Description: " + testDetails;

    reportCard.append(heading, type, result, details);
    reportOutput.prepend(reportCard);

    reportForm.reset();
});

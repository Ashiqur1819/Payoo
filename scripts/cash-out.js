document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cashOutInput = document.getElementById("cash-out-input").value;
    let currentBalance = document.getElementById("current-balance").innerText;
    const cashOutPin = document.getElementById("cash-out-pin").value;

    if (cashOutPin === "2745") {
      cashOutInput = Number(cashOutInput);
      currentBalance = Number(currentBalance);

      const newBalance = currentBalance - cashOutInput;
      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("Failed to cashout. Please try again later.");
    }
  });

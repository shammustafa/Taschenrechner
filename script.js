function appendOperation(operator) {
  document.getElementById("Ergebnisbereiche").innerHTML += operator;
}

function calculateistGlecih() {
  const display = document.getElementById("Ergebnisbereiche");
  try {
    const result = eval(display.innerHTML);
    if (result === Infinity || isNaN(result)) {
      throw new Error("Invalid calculation");
    }
    display.innerHTML = result;
  } catch (error) {
    display.innerHTML = "Error";
  }
}

function deleteLastChar() {
  const display = document.getElementById("Ergebnisbereiche");
  display.innerHTML = display.innerHTML.slice(0, -1);
}

function calculateistGlecih() {
  const display = document.getElementById("Ergebnisbereiche");
  try {
    let result = eval(display.innerHTML);
    if (result === Infinity || isNaN(result)) {
      throw new Error("Invalid calculation");
    }
    display.innerHTML = result;
  } catch (error) {
    display.innerHTML = "Error";
  }
}

function appendOperation(operator) {
  if (
    operator === "Math.sqrt(" ||
    operator === "Math.log(" ||
    operator === "Math.sin("
  ) {
    document.getElementById("Ergebnisbereiche").innerHTML += operator;
  } else {
    document.getElementById("Ergebnisbereiche").innerHTML += operator;
  }
}

let notiz = document.getElementById("notizen");

// Speichern des Textes in localStorage
document.getElementById("savenotiz").addEventListener("click", function () {
  const text = document.getElementById("notizfeld").value;
  localStorage.setItem("savenotiz", text);
  notiz.textContent = text;
});

// Laden des Textes aus localStorage
document.getElementById("loadnotiz").addEventListener("click", function () {
  const savedNotiz = localStorage.getItem("savenotiz");
  if (savedNotiz) {
    document.getElementById("notizfeld").value = savedNotiz;
  } else {
    alert("Kein Text gespeichert.");
  }
});

document.getElementById("");

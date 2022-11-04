function changeProperties() {
  let borderR = document.getElementById("borderR").value;
  let borderG = document.getElementById("borderG").value;
  let borderB = document.getElementById("borderB").value;
  let borderWidth = document.getElementById("borderWidth").value;
  let backgroundR = document.getElementById("backgroundR").value;
  let backgroundG = document.getElementById("backgroundG").value;
  let backgroundB = document.getElementById("backgroundB").value;
  let element = document.getElementById("paragraph");

  element.style.backgroundColor = `rgb(${backgroundR}, ${backgroundG}, ${backgroundB})`;
  element.style.borderWidth = `${borderWidth}px`;
  element.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
}

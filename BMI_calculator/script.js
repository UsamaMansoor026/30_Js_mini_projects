/* Html elements */
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const bmi_btn = document.getElementById("bmi_btn");
const result = document.getElementById("result");
const BMIresult = document.getElementById("yourBMI");

/* BMI Formula -> weight in kg / (height in m) ** 2 */

bmi_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let height_in_meters = height.value / 100;

  /* BMI calculations */
  const bmi = weight.value / height_in_meters ** 2;
  BMIresult.innerHTML += bmi.toFixed(2);

  /* Conditions */
  if (bmi < 18.5) {
    result.innerHTML = "You are underweight";
  } else if (bmi < 24.9) {
    result.innerHTML = "You are Normal";
  } else if (bmi < 29.9) {
    result.innerHTML = "You are Overweight, exercise";
  } else {
    result.innerHTML = "O Bhai kuch to rehm kar apny pe :(";
  }
  weight.value = "";
  height.value = "";
});

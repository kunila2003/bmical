document.getElementById("bmiform").addEventListener('submit', function (e) {
     e.preventDefault();
     const gender = document.getElementById('gender').value;
     const age = parseInt(document.getElementById('age').value);
     const heightFeet = parseInt(document.getElementById('height-feet').value);
     const heightInches = parseInt(document.getElementById('height-inches').value);
     const weight = parseFloat(document.getElementById('weight').value);
     if (gender && age && heightFeet && heightInches && weight) {

          const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;//height in meters
          const bmi = weight / (heightInMeters * heightInMeters);
          const resultElement = document.getElementById("result");
          let category = '';

          if (bmi < 18.5) {
               category = 'Underweight (Please take care of your Health)';

          } else if (bmi >= 18.5 && bmi < 24.9) {
               category = 'Normal Weight';
          } else if (bmi >= 25 && bmi < 29.5) {
               category = 'Over Weight (You need to do exercise)';
          } else {
               category = 'Obese(Please take advice to a doctor)'
          }

          let resultMessage = 'Your BMI : ' + bmi.toFixed(2) + '<br>';
          resultMessage += 'Category:' + category;

          resultElement.innerHTML = resultMessage;
     }



});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        input[type="number"], button {
            padding: 10px;
            font-size: 16px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h2>Factorial Calculator</h2>
    <label for="numberInput">Enter a number:</label>
    <input type="number" id="numberInput" min="0" required>
    <button onclick="calculateFactorial()">Calculate Factorial</button>
    <p id="result"></p>

    <script>
        function calculateFactorial() {
            // Get the input value
            var num = parseInt(document.getElementById('numberInput').value);
            
            // Validate input
            if (isNaN(num) || num < 0) {
                alert("Please enter a non-negative integer.");
                return;
            }

            // Calculate factorial
            var factorial = 1;
            for (var i = 2; i <= num; i++) {
                factorial *= i;
            }

            // Display result
            document.getElementById('result').innerText = "Factorial of " + num + " is: " + factorial;
        }
    </script>
</body>
</html>

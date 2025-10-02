 var inputBox = document.getElementById("inputBox");
    var resultBox = document.getElementById("resultBox");

    function appendValue(value) {
      var operators = ["+", "-", "*", "/", "%"];

      // Prevent starting directly with operator
      if (inputBox.value === "" && operators.includes(value)) {
        return;
      }

      // Replace operator if last is operator
      var lastChar = inputBox.value.slice(-1);
      if (operators.includes(lastChar) && operators.includes(value)) {
        inputBox.value = inputBox.value.slice(0, -1) + value;
      } else {
        inputBox.value += value;
      }
    }

    function clearAll() {
      inputBox.value = "";
      resultBox.value = "";
    }

    function calculate() {
      try {
        var expression = inputBox.value;

        // Agar last character operator hai to use hatao
        var operators = ["+", "-", "*", "/", "%"];
        var lastChar = expression.slice(-1);
        if (operators.includes(lastChar)) {
          expression = expression.slice(0, -1);
        }

        resultBox.value = eval(expression);
      } catch {
        resultBox.value = "Error";
      }
    }

    function toggleSign() {
      if (resultBox.value) {
        resultBox.value = -resultBox.value;
      } else if (inputBox.value) {
        var val = parseFloat(inputBox.value);
        if (!isNaN(val)) {
          inputBox.value = -val;
        }
      }
    }
 
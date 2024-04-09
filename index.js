<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My First App</title>
</head>
<body>

<script>
  // Function to greet the user
  function greetUser() {
    // Prompt the user for their name
    var name = prompt("What's your name?");
    
    // Check if the user entered a name
    if (name !== null && name !== "") {
      // Display a greeting with the user's name
      alert("Hello, " + name + "! Welcome to my first app!");
    } else {
      // If the user didn't enter a name, display a generic greeting
      alert("Hello! Welcome to my first app!");
    }
  }

  // Call the greetUser function when the page loads
  window.onload = greetUser;
</script>

</body>
</html>

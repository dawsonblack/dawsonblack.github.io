<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title></title>
  <link href="style.css" rel="stylesheet" />
</head>
<body>
  <form action='emailform.php' method='post'>
    <h1>Contact Us</h1>
    <input type="text" id="name" name="name" palceholder='Your Name' required />
    <input type="email" id="email" name="email" placeholder='Your Email' required />
    <textarea id="message" name="message" rows="4" cols="50" placeholder='How can I help you?' required></textarea><br />
    <input type="submit" value="Send" />
  </form>
</body>
</html>

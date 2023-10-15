const counter = document.querySelector(".counter-number");

async function updateCounter() 
  {
    let response = await fetch("https://q45fe6edoghkhnq22tfiqo2jhu0bapwy.lambda-url.us-east-1.on.aws/");
    let data = await response.json();

    counter.innerHTML = `Views: ${data}`;
}

// Call the updateCounter function
updateCounter();    
document.getElementById("viewPdfButton").addEventListener("click", function() {
    // Replace the PDF URL with the URL of your PDF file hosted on Google Drive
    var pdfUrl = "https://drive.google.com/drive/folders/1cTTbvwa7sxZ3zY4EnPHqM8jQPfYEimV1";
    
    // Open the PDF in a new tab/window
    window.open(pdfUrl, "_blank");
  });

  const button = document.getElementById("problemStatementButton");

button.addEventListener("click", () => {
  const problemStatement = `Every house on our globe has basic electrical appliances like Bulb, Tube light and Fan. Daily around 7 million bulbs are produced and Fan market ranges for about 2 trillion USD. These things are amongst the necessities of our humanity. Everyone is familiar with their operations.
  But due to the advent of modern technology and the advent of wireless communication a new system of distance controlled multi-centered devices has evolved. New devices are based on in-built wireless functionalism. The demand for these devices is increasing in tremendous manner and there is a huge scope for smart devices ahead. As per the experts, till 2029 entire United States will have Smart Mobile controlled application in place of normal applications. Till 2037 our entire globe will switch to distance controlled smart and easy of convenient application which will surely create a huge boom and impact in ongoing Electronics and Hardware Industry.
  `;

  const windowFeatures = "width=500,height=500";
  const popupWindow = window.open("", "Problem Statement", windowFeatures);
  popupWindow.document.write(`<h1>Problem Statement</h1><p>${problemStatement}</p>`);
});


   
const buttons = document.getElementById("proposedSolutionButton");

buttons.addEventListener("click", () => {
  const proposedSolution = `Development Of A Device That Will Be Able To Easily Convert Any Existing Device Into A Smart Device Here In We 
  Are Referencing Daily Application, Which Does not Exceed The Limit Of 5 Amperes. 
  We Are Aiming At Wirelessly Controlling Fan; Tube Light, Bulb And A General Three Pin Socket Using Our IOT
  Device. 
  The Briefer about the Project Is as It Is Bifurcated Into two Stages: 
  1. Hardware 
  Construction of Circuitry and PCB Implementation of Components Along With Micro Controllers like Esp-8266 (Node 
  MCU), Arduino Uno and ESP-32. In addition, The Involvement of Various Transmitting Device like GSM Module and
  Transmitting Sensor Are Also Involved. 
  2. Software 
  Making Of A User Friendly Portal/Application That Synchronises In Real Time Using Data Input From User And 
  Conveying It To The Desired Object / Application. The Major Aim Is Development Of An Easily Understandable App, 
  Which Helps To Simulate The Project.
  `;

  const windowFeatures = "width=500,height=500";
  const popupWindow = window.open("", "Proposed Solution", windowFeatures);
  popupWindow.document.write(`<h1>Proposed Solution</h1><p>${proposedSolution}</p>`);
});

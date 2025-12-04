// get element by id
function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}

// get element by class
function getElementByClass(className) {
  const elements = document.getElementsByClassName(className);
  return elements;
}

// get inner value
function getInnerValue(id) {
  return document.getElementById(id).innerText;
}

// set inner value
function setInnerValue(id, value) {
  getElementById(id).innerText = value;
}

// heart count features
const hearts = getElementByClass("heart");
for (let heart of hearts) {
  heart.addEventListener("click", () => {
    let heartCount = parseInt(getInnerValue("heart-count"));
    heartCount += 1;
    setInnerValue("heart-count", heartCount);
  });
}

// store data in an array
const historyData = [];
function storeData(name, number) {
  const data = {
    name: name,
    number: number,
    time: new Date().toLocaleTimeString(),
  };
  historyData.push(data);
}
// show data in history section
function showDataHistory(datafile) {
  const dataContainer = getElementById("data-container");
  dataContainer.innerHTML = "";
  for (let data of datafile) {
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex justify-between gap-2.5 items-center p-2.5 bg-gray-100 rounded-2xl mb-2.5">
                    <div>
                        <p class="font-semibold">${data.name}</p>
                        <p>${data.number}</p>
                    </div>
                    <div class = "w-24">${data.time}</div>
                </div>`;
    dataContainer.append(div);
  }
}

// call services
function callServices(service, number) {
  let cost = 20;
  let balance = parseInt(getInnerValue("coins"));
  if (balance <= 0) {
    alert("Insufficient Balance.Top up please");
    return;
  }
  let newBalance = (balance -= cost);
  setInnerValue("coins", newBalance);
  alert(`📞 Calling ${service} ${number}...`);

  storeData(service, number);
  showDataHistory(historyData);
}

// all call functionality
getElementById("all-call").addEventListener("click", () => {
  const serviceName = getInnerValue("all");
  const serviceNumber = getInnerValue("all-number");
  callServices(serviceName, serviceNumber);
});
getElementById("police-call").addEventListener("click", () => {
  const serviceName = getInnerValue("police");
  const serviceNumber = getInnerValue("police-number");
  callServices(serviceName, serviceNumber);
});
getElementById("fire-call").addEventListener("click", () => {
  const serviceName = getInnerValue("fire");
  const serviceNumber = getInnerValue("fire-number");
  callServices(serviceName, serviceNumber);
});
getElementById("health-call").addEventListener("click", () => {
  const serviceName = getInnerValue("ambulance");
  const serviceNumber = getInnerValue("ambulance-number");
  callServices(serviceName, serviceNumber);
});
getElementById("help-call").addEventListener("click", () => {
  const serviceName = getInnerValue("help");
  const serviceNumber = getInnerValue("help-number");
  callServices(serviceName, serviceNumber);
});
getElementById("govt-call").addEventListener("click", () => {
  const serviceName = getInnerValue("govt");
  const serviceNumber = getInnerValue("govt-number");
  callServices(serviceName, serviceNumber);
});
getElementById("electricity-call").addEventListener("click", () => {
  const serviceName = getInnerValue("electricity");
  const serviceNumber = getInnerValue("electricity-number");
  callServices(serviceName, serviceNumber);
});
getElementById("ngo-call").addEventListener("click", () => {
  const serviceName = getInnerValue("ngo");
  const serviceNumber = getInnerValue("ngo-number");
  callServices(serviceName, serviceNumber);
});
getElementById("travel-call").addEventListener("click", () => {
  const serviceName = getInnerValue("travel");
  const serviceNumber = getInnerValue("travel-number");
  callServices(serviceName, serviceNumber);
});

// clear button
getElementById("clear-btn").addEventListener("click", () => {
  console.log("clear button clicked");
  historyData.length = 0;
  getElementById("data-container").innerHTML = "";
});

// copy btn
const copyBtn = getElementByClass("copy-btn");
for (let btn of copyBtn) {
  // console.log(btn)
  btn.addEventListener("click", () => {
    let copyBalance = parseInt(getInnerValue("copy-balance"));
    let count = (copyBalance + 1);
    setInnerValue("copy-balance", count);


    let parent = btn.closest(".card");
    let number = parent.querySelector(".box").innerText;
    navigator.clipboard.writeText(number).then(function(){
        alert(`Number Copied ${number}`);
      })
      .catch(function(){
        alert("Number Copy Failed");
      });
  });
}

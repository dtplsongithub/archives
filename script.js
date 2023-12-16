const files = [
  {
    "name": "clock",
    "desc": "its a clock made in html canvas",
    "vip": false
  },
  {
    "name": "mathproblems",
    "desc": "some math problems from 1st grade to 7th grade",
    "vip": true
  },
  {
    "name": "my-mario-kart-wii-stats",
    "desc": "hasnt been updated in a long time",
    "vip": false
  },
  {
    "name": "psdnd",
    "desc": "portable seven-digit number displayer",
    "vip": 2
  },
  {
    "name": "radixsort",
    "desc": "the radix lsd sort. DONT CLICK THE 2ND BUTTON. your browser WILL freeze.",
    "vip": true
  },
  {
    "name": "test230429",
    "desc": "",
    "vip": false
  },
  {
    "name": "test231020",
    "desc": "",
    "vip": false
  },
  {
    "name": "test231025",
    "desc": "",
    "vip": false
  },
  {
    "name": "test231028",
    "desc": "",
    "vip": false
  },
  {
    "name": "test231102",
    "desc": "",
    "vip": false
  },
  {
    "name": "test231103",
    "desc": "",
    "vip": false
  },
  {
    "name": "tileset",
    "desc": "one-line code thingy",
    "vip": false
  },
  {
    "name": "unoriginalclickergame",
    "desc": "unoriginal clicker game. thats it :)",
    "vip": 2,
  }
]
let table = document.getElementById("myTable");
for (i in files) {
  let row = table.insertRow(-1);
  row.insertCell(0).innerHTML = `<a href="archives/${files[i].name}.zip">${files[i].name}</a>`;
  row.insertCell(1).innerText = files[i].desc;
  let send = ""
  let sendy = ""
  switch (files[i].vip) {
    case true: {
      send = "yes"
      sendy = "#ff7777"
      break
    }
    case false: {
      send = "no"
      sendy = "#77ff77"
      break
    }
    case 2: {
      send = "kinda, it has been rushed"
      sendy = "#ffff77"
      break
    }
    default: {
      send = files[i].vip
      
    }
  }
  let c2 = row.insertCell(2);
  c2.innerText = send
  c2.style["background-color"] = sendy
}
const pies = [
  {
    name:"Sweet potato",
    price: "$10.00",
    iswarm: "Yes",
    isOrganic: "Yes",
    crust: 'extra flakey',
    iceCream: 'Vanilla Bean',
    isAvailable: "No",
    image:"img/pie_0000_Sweet-Potato.png",
    drinkPairing: 'whiskey',
    instructor: 'Zoe',
  },
  {
    name:"Dutch Apple Pie",
    price: "$20.00",
    iswarm: "Yes",
    isOrganic: "No",
    crust: 'flakey',
    iceCream: 'Vanilla Bean',
    isAvailable: "Yes",
    image:"img/pie_0007_dutch.png",
    drinkPairing: 'whiskey',
    instructor: 'Mary',
  },
  {
    name:"Pizza Pie",
    price: "$2.50",
    iswarm: true,
    isOrganic: false,
    crust: 'extra flakey',
    iceCream: 'nope',
    isAvailable: true,
    image:"img/pie_0005_Pizza.png",
    drinkPairing: 'High Life',
    instructor: 'Luke',
  },
  {
    name:"Chest",
    price: "$5.99",
    iswarm: "Yes",
    isOrganic: "No",
    crust: 'extra flakey',
    iceCream: 'No',
    isAvailable: "Yes",
    image:"img/pie_0002_Chest.png",
    drinkPairing: 'High Life',
    instructor: 'Mary',
  },
  {
    name:"Chocolate",
    price: "$4.99",
    iswarm: "Yes",
    isOrganic: "Yes",
    crust: 'Graham',
    iceCream: 'Chocolate',
    isAvailable: true,
    image:"img/pie_0006_Chocolet.png",
    drinkPairing: 'High Life',
    instructor: 'Luke',
  },
  {
    name:"Strawberry",
    price: 500,
    iswarm: true,
    isOrganic: false,
    crust: 'Graham',
    iceCream: 'Vanilla',
    isAvailable: true,
    image:"img/pie_0003_strawberry.png",
    drinkPairing: 'High Life',
    instructor: 'Mary',
  },
  {
    name:"Blue Berry",
    price: 500,
    iswarm: true,
    isOrganic: false,
    crust: 'Graham',
    iceCream: 'butter Pecan',
    isAvailable: true,
    image:"img/pie_0004_blue-berry.png",
    drinkPairing: 'High Life',
    instructor: 'Kenny',
  }
]

console.log(pies, pies)

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const pieBuilder = () => {
  let domString = '';
  for (let i = 0; i < pies.length; i += 1) {
    domString += `
    <div class="pie-card">
    <h1>${pies[i].name}</h1>
    <hr>
    <img src=${pies[i].image} alt="">
    <h2>${pies[i].price}</h2>
    <h2>Ice Cream: <br>${pies[i].iceCream}</h2>
    <hr>
    <h3>Warm: <br>${pies[i].iswarm}</h3>
    <h4>Crust: ${pies[i].crust}</h4>
    <h5>Available: <br>${pies[i].isAvailable}</h5>
    <h6>Drink Pairing: <br> <${pies[i].drinkPairing}</h6>
    <h4 class="instructor">${pies[i].instructor}</h4>
   
 </div>
</div>
      
          `;
  }
  // console.log('domString', domString);
  printToDom(domString, 'card-spot');

};



pieBuilder()
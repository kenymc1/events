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
    drinkPairing: 'Red Wine',
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
    instructor: 'Greg',
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
    instructor: 'Greg',
  }
]

console.log(pies, pies)

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint;
};

const pieBuilder = (monkeybuttArray) => {
  let domString = '';
  for (let i = 0; i < monkeybuttArray.length; i += 1) {
    domString += `
    <div class="pie-card">
    <h1>${monkeybuttArray[i].name}</h1>
    <hr>
    <img src=${monkeybuttArray[i].image} alt="">
    <h2>${monkeybuttArray[i].price}</h2>
    <h2>Ice Cream: <br>${monkeybuttArray[i].iceCream}</h2>
    <hr>
    <h3>Warm: <br>${monkeybuttArray[i].iswarm}</h3>
    <h4>Crust: ${monkeybuttArray[i].crust}</h4>
    <h5>Available: <br>${monkeybuttArray[i].isAvailable}</h5>
    <h6>Drink Pairing: ${monkeybuttArray[i].drinkPairing}</h6>
    <h4 class="instructor">${monkeybuttArray[i].instructor}</h4>
   
 </div>
</div>
      
          `;
  }
  // console.log('domString', domString);
  printToDom(domString, 'card-spot');

};





// const zoesPies = () => {
//   const myPies = []
//   for(let i = 0; i < pies.length; i += 1){
//     if(pies[i].instructor === 'Zoe'){
//       myPies.push(pies[i]);
//     }
//   }
//   pieBuilder(myPies);
// }
// const maryPies = () => {
//   const herPies = []
//   for(let i = 0; i < pies.length; i += 1){
//     if(pies[i].instructor === 'Mary'){
//       herPies.push(pies[i]);
//     }
//   }
//   pieBuilder(herPies);
// }
// const gregPies = () => {
//   const hisPies = []
//   for(let i = 0; i < pies.length; i += 1){
//     if(pies[i].instructor === 'Greg'){
//       hisPies.push(pies[i]);
//     }
//   }
//   pieBuilder(hisPies);
// }
// const lukePies = () => {
//   const therePies = []
//   for(let i = 0; i < pies.length; i += 1){
//     if(pies[i].instructor === 'Luke'){
//       therePies.push(pies[i]);
//     }
//   }
//   pieBuilder(therePies);
// }

const findMyPies = (e) => {
  const buttonId = e.target.id;
  const myPies = []
  for(let i = 0; i < pies.length; i += 1){
    if(pies[i].instructor === buttonId){
      myPies.push(pies[i]);
    }
  }
  pieBuilder(myPies);
}

pieBuilder(pies);

document.getElementById('Zoe').addEventListener('click',findMyPies)
document.getElementById('Mary').addEventListener('click',findMyPies)
document.getElementById('Greg').addEventListener('click',findMyPies)
document.getElementById('Luke').addEventListener('click',findMyPies)
const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];


//   const names = (arr) =>{
//       const arr2 = [];
//         arr.forEach(function (n){
//         const name = {name: n.name}
//         arr2.push(name);
//     });
//          return arr2;
//   }
//   console.log(names(data));


//   const born = (arr) =>{
//     const arr3 = [];
//       arr.forEach(function (person) {
//           birth = person['birthday'].slice(-4)
//           if(birth < 1990){
//             arr3.push(person)
//           }
//       });
//        return arr3;
// }
// console.log(born(data));


const getfood = (arr) =>{
const obj= {};
arr.forEach(function(n, i){
    for(let key in n.favoriteFoods){
        arr[i].favoriteFoods[key].forEach((food)=>{
            if(obj[food]){
                obj[food] += 1
            } else{
                obj[food] = 1
            }
        })
        }  
    })
    return obj;
}
console.log(getfood(data));
function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  let index = 0;

  for(let i=0; i < cars.length; i++){
    if(cars[i].available === true){
      result[index] = cars[i];
      index++
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

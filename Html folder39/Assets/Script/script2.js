// 3)

function sum(arr) {
    let totalSum = 0;
  
    for (const element of arr) {
      if (Array.isArray(element)) {
        totalSum += sum(element);
      } else if (!isNaN(element)) {
        totalSum += parseInt(element, 10);
      }
    }
  
    return totalSum;
  }
  
  console.log(sum(["1", "five", "2wenty", "thr33"])); 
  
  console.log(sum([["1X2", "t3n"], ["1024", "5", "64"]]));
  
  console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["Imu4ch3"], "-150"]]));

// 4)

function freeShipping(order) {
    let totalCost = 0;
  
    for (const item in order) {
      totalCost += order[item];
    }
  
    return totalCost > 50;
  }
  
  const order1 = {
    "Shampoo": 5.99,
    "Rubber Ducks": 15.99
  };
  
  console.log(freeShipping(order1));
  
  const order2 = {
    "Flatscreen TV": 399.99
  };
  
  console.log(freeShipping(order2));
  
  const order3 = {
    "Monopoly": 11.99,
    "Secret Hitler": 35.99,
    "Bananagrams": 13.99
  };
  
  console.log(freeShipping(order3));

// 5)

function afterNYears(people, years) {
    const agedPeople = {};
  
    for (const person in people) {
      agedPeople[person] = people[person] + Math.abs(years);
    }
  
    return agedPeople;
  }
  
  const people1 = {
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13
  };
  
  console.log(afterNYears(people1, 1));
  
  const people2 = {
    "Baby": 2,
    "Child": 8,
    "Teenager": 15,
    "Adult": 25,
    "Elderly": 71
  };
  
  console.log(afterNYears(people2, 19));
  
  const people3 = {
    "Genie": 1000,
    "Joe": 40
  };
  
  console.log(afterNYears(people3, 5));

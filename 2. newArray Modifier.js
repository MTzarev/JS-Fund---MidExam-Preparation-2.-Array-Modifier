function arrayModifier (input){
let array = input.shift().split(` `).map(Number);

for (let index=0; index<input.length; index++){
let [command, indexOne, indexTwo,]=input[index].split(` `);
if (command === "swap"){
  let tempIdx = array[indexOne];
  array[indexOne]=array[indexTwo];
  array[indexTwo]=tempIdx;
  
}else if (command==="multiply"){
  let temp=array[indexOne]*array[indexTwo];
  array[indexOne]=temp;
  
}else if (command === "decrease"){
 array=array.map(n=>n-1);
  
}
}
console.log(array.join(`, `));
}
// arrayModifier( ['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
//   ]);
arrayModifier(['1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]);
function arrayLeader(arr) {
  let result = arr.filter(num, index => {
    arr[index] > arr.slice(index).reduce((a, b) => a + b);
  });
}
}

//**********resolver************/

const arrayLeader = numbers => numbers.filter(num,1) =>isLeader (num,numbers,i));
const isLeader //slice
const sum //reduce
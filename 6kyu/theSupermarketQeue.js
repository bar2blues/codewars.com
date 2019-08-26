function queueTime(customers, n) {
  //TODO
  const tills = new Array(n).fill(0);

  customers.forEach(customerTime => {
    const nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customerTime;
  });

  return Math.max(...tills);
}

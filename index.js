function printN(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  printN(n - 1);
}

printN(5);

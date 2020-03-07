function hola() {
  return new Promise((r,e) => {
    setTimeout(() => {
      r(3)
    }, 1000)
  });
}

(async () => {
  const ola = await hola();
  console.log(ola);
})();
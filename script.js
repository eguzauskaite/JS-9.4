// 1 uzduotis
// const spalvosMygtukas = document.getElementById('spalvosMygtukas');
// const spalvos = ["red", "green", "blue", "yellow"];

// spalvosMygtukas.addEventListener('click', function() {
//   const atsitiktineSpalva = spalvos[Math.floor(Math.random() * spalvos.length)];
//   spalvosMygtukas.style.backgroundColor = atsitiktineSpalva;
// });

// 2 uzduotis
 const spalvosMygtukas = document.getElementById('spalvosMygtukas');

 spalvosMygtukas.addEventListener('click', function() {
   const randomR = Math.floor(Math.random() * 256);
   const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);

  const atsitiktineSpalva = `rgb(${randomR}, ${randomG}, ${randomB})`;
   spalvosMygtukas.style.backgroundColor = atsitiktineSpalva;
 });

// 3 uzduotis

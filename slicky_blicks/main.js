let sticky = document.querySelectorAll('.sticky-block'),
    arrHeights = [],  // высоты    
    arrCoords = [], // координаты "top"
    countedHeights = [], // массив высот для вычисления точки соприкосновения.
    stickyHeightsSum;

 for (let i = 0; i < sticky.length; i++) {
  let gbcr = sticky[i].getBoundingClientRect();
  arrCoords.push(gbcr.top);
  arrHeights.push(gbcr.height); 

  window.addEventListener('scroll', function() {
    countedHeights = arrHeights.slice(0, i);
    console.log('countedHeights:' + countedHeights);
    stickyHeightsSum = countedHeights.reduce(function(prev, next) {
      return prev + next;
    }, 0);

    if ( arrCoords[i] <= ( window.pageYOffset + stickyHeightsSum) ) {
     sticky[i].classList.add('sticky');
     sticky[i].style.top = stickyHeightsSum + 'px';
   }
   else if ( 
    arrCoords[i] >= ( window.pageYOffset + stickyHeightsSum) ) {
     sticky[i].classList.remove('sticky');
   }
   });
 };

 
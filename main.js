
var frameOne = `
                                                         x
      xxxxxxxxx                                          x
     xx       xx                                 x      xx
    xx         x                                 xx     x
    x                                             xx   xx
    x                                              xx xx
    x                                               xxxxx
    x                                      xxxxxx    xx  xxxxxx
    xx                      xxxxxx         x           xx     xxxxxxx
     xx                    xx    x         x            xxx         xxxxx
      xx            x      xx    x         x         x    xx
       xx           x       x   xx         x        xx     xx
     xxxxxxxxxxx  xxx       xx xxxxxxxxxxx xxx   xxxx       xx
  xxxx   x     xxxx      xxxxxxxxx       xx  xxxxx
 xx      xx            xxx     xxx       xx
x         x           xx     xxx xxxxxxxxx
          xx          x   xxxxx   xxx
           x          xxxxx  x    x xx
            x               x     x  xx
            x               xx   xx   xx
            x                xxxxx     xx
            x                           x
            x                           xx
           xx
          xx
        xxx
   xxxxxx
   xx
`;

var frameTwo = `
                                            x
                                  x         xx
                                  x         xxx
                      xxxxxx      x         x xx
xxxx       x       xxxx    xxxx   x         x  xx
x  x       x       x          x   xx        x   xx
   x       xx      x         xx    xxx    xxx    xx
   x       xx      xxx      xx       xxxxxx       xx
   x       xxx       xxxxxxxx
   x      xx x
   xxx  xxx  xx
      xxx     x
              x
              xx
               x
               x
               x
 xxxxxxx      xx
xx     x     xx
x          xxx
xxxx     xxx
   xxxxxxx
`;


var frameThree = `
                   xxxxxxx
               xxxxx      xxxxxxxxxx
             xx                     xxx        xxxx
            xx                         xxx   xx   xxx
           xx                            xx xx      x
  xxxxxxxxxx                              xxx       x
 xx      xx                                 x      xx
 x       xx                                 xxxxxxxx
xx      xxx        xx        xx              x
xxx    xxx         xx   x                     x
  xxxxx  x              x                     x
         x              x                     x
         xx            xx                     x
          x           xx                     xx
          x           x                     xx
          xx                               xx
           x                              xx
            x                           xx
            xx                       xxxx
             xxxxx             xxxxxx
                  xxxxxxxxxxxxxx
`;

var frameFour = `
                   xxxxxxx
               xxxxx      xxxxxxxxxx
             xx                     xxx        xxxx
            xx                         xxx   xx   xxx
           xx                            xx xx      x
  xxxxxxxxxx                              xxx       x
 xx      xx      000000    0000000          x      xx
 x       xx                                 xxxxxxxx
xx      xxx        xx        xx              x
xxx    xxx         xx   x                     x
  xxxxx  x              x                     x
         x              x                     x
         xx            xx          xxx        x
          x           xx         xx          xx
          x           x        xxx          xx
          xx                 xxxx          xx
           x       00     xxx000xx        xx
            x       0000000000000xx     xx
            xx           x00000000xx xxxx
             xxxxx       x000000000xx
                  xxxxxxxxx00000000x
                          x00000000x
                          x00000000x
                           00000000x
                            0x000xx
                              xx0x
`;

playAnimation();

function displayFrameTwo() {
    console.clear();
    console.log(frameTwo);
}

function displayFrameThree() {
    console.clear();
    console.log(frameThree);
}

function displayFrameFour() {
    console.clear();
    console.log(frameFour);
}

function playAnimation() {
    console.clear();
    console.log(frameOne);

    window.setTimeout(displayFrameTwo, 500);

    window.setTimeout(displayFrameThree, 1000);

    window.setTimeout(displayFrameFour, 1500);
};

window.setInterval(playAnimation, 2000);



$(function() {
  // I'll do some of the work for you, first I will grab the <body></body>
  const $body = $('body');

  // 1. Create a <div> with the class "duck" and add it to the body.
  // $('body').append( '<div class = "duck"> </div>' );
  // // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  
  //  setInterval (function() {
  //   $ ('.duck').toggleClass('flap');
  //  }, 250);
     
  // // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // // a function `moveDuck` that takes a duck object as an argument and sets the
  // // "top" and "left" CSS properties.
  // // HINT: Use Math.random() * window.innerWidth    for "left"
  // //       And Math.random() * window.innerHeight   for "top"
  // function moveDuck() {
  // $('.duck').css('position', 'relative');
  // $('.duck').css('left', Math.random() * window.innerWidth);
  // $('.duck').css('top', Math.random() * window.innerHeight);

  // // 4. Try making the duck move to a different location every second
  // };
  // moveDuck();
  // setInterval(moveDuck, 1000);
  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck() {
    $('body').append('<div class="duck"></div>');
    $('body').css('position', 'relative');
    setInterval(function () {
      $('.duck').toggleClass('flap');
      }, 250);
    
    function moveDuck() {
      $('.duck').css('position', 'absolute');
      $('.duck').css('left', Math.random() * window.innerWidth);
      $('.duck').css('top', Math.random() * window.innerHeight);
      
      function randomPosition() {
        $('.duck').each(function () {
          $(this).css({
            'top': Math.random() * window.innerHeight,
            'left': Math.random() * window.innerWidth,
          });
        });
      }
      randomPosition();
    };
    moveDuck();
    setInterval(moveDuck, 1000);
  }

  createDuck();

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  function manyDucks() {
    for (let i = 1; i < 5; i++) {
      createDuck() * i;
    }};
  
  manyDucks();
  // WHY IF I HAVE SIX DUCKS DOES THIS NOT WORK
  
  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

    //   })
    // }
//     function randomPosition(){
//   $('.duck').each(function () {
//     $(this).css({
//       'top': Math.random() * window.innerHeight,
//       'left': Math.random() * window.innerWidth,
//     });
//   });
// }
// randomPosition();


  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!
  
  function duckShot () {
   $('.duck').click(function() {
     $(this).toggleClass("shot");
   });
  }

  duckShot();

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)
    
  function removeDuck() {
  $('.duck').click(function(){
    setTimeout(() => {
    $(this).remove();}, 1000);
    if (checkForWinner()) {
      alert("You win!");
    }

  })};
  
  removeDuck()

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"
  function checkForWinner() {
    return $('body').children(0).length === 1;
    }
  
  checkForWinner()

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!
});

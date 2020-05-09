$(document).ready(function() {
  $("form#favorites").submit(function() {
    var color = $("input#color").val();
    var food = $("input#food").val();
    var season = $("input#season").val();
    var ledzeppelin = $("input#ledzeppelin").val();
    var cocktail = $("input#cocktail").val();

    var favoriteThings = [color, food, season];
    console.log(favoriteThings[0]);
    console.log(favoriteThings[1]);
    console.log(favoriteThings[2]);
    console.log(ledzeppelin, cocktail);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("form#favorites").submit(function() {
    var color = $("input#color").val();
    var food = $("input#food").val();
    var season = $("input#season").val();
    var ledzeppelin = $("input#ledzeppelin").val();
    var cocktail = $("input#cocktail").val();

    var favoriteThings = [color, food, season, ledzeppelin, cocktail];
    var selects = [];
    selects.push(favoriteThings[0]);
    selects.push(favoriteThings[1]);
    selects.push(favoriteThings[2]);

    $("ul#selectFavorites").append('<li>' + selects[0] + '</li>');
    $("ul#selectFavorites").append('<li>' + selects[1] + '</li>');
    $("ul#selectFavorites").append('<li>' + selects[2] + '</li>');

    $("#output").show();
    event.preventDefault();
  });
});
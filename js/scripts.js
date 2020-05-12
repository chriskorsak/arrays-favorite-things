$(document).ready(function() {
  $("form#favorites").submit(function() {
    const favoriteThings = ["color", "food", "season", "ledzeppelin", "cocktail"];
    const selects = favoriteThings.map(function(favoriteThing) {
      return $("input#" + favoriteThing).val();
    });
    selects.forEach(function(select) {
      $("#selectFavorites").append("<li>" + select + "</li>");
    });
    $("#output").show();
    event.preventDefault();
  });
});
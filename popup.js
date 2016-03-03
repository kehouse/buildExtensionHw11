$(document).ready(function(){
  page.init();
});

var page = {

  init: function(){
    page.styling();
    page.events();
  },
  styling: function(){

  },
  events: function(){
$('form').on("submit", function(event){
  event.preventDefault();
  var searchGiphy = $('#giphy').val();
  var url = "http://api.giphy.com/v1/gifs/search?q=" + searchGiphy + "&api_key=dc6zaTOxFJmzC";
  page.getGiphy(url);
})
  },
  getGiphy: function(element){
    console.log("here is the photo", element);
    $.ajax({
      url: url,
      method: "GET",
      success: function(responseFromGetGiphy){
        console.log("response", responseFromGetGiphy)
        page.addGiphyToDom(page.buildGetGiphy(data))
      },
    })
  },

buildGetGiphy: function(arr){
  return arr.map(function(el){
    return {
      photo: el.images.url,
      link: el.url
    };
  })
},

addGiphyToDom: function(){
  var htmlToDom = "";
  getGiphy.foreach(function(el){
  htmlToDom +=
    '<div class=giphyData"><img src"'
    + el.images.url
    + '"/>'
    + '<a href="'
    + el.url
    + '"></a>'
    + '</div>';
  )};
  $('.showData').html(htmlToDom);
}
}

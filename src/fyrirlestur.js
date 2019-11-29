fetch('../lectures.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    appendData(jsonData);
  })
  .catch(function (err) {
    console.log(err);
});

function appendData(jsonData) {
  var result = window.location.search;
  var searchParams = new URLSearchParams(result);
  var categoryContainer = document.getElementById("flokkur")
  var titleContainer = document.getElementById("nafn")
  var mainContainer = document.getElementById("myData");
  for (nr in jsonData.lectures) {
    console.log(searchParams.get("slug"));
    console.log(jsonData.lectures[nr].slug);
    if (searchParams.get("slug") == jsonData.lectures[nr].slug) {
      var title = jsonData.lectures[nr].title;
      var category = jsonData.lectures[nr].category;
      var image = jsonData.lectures[nr].image;
      var thumbnail = jsonData.lectures[nr].thumbnail;
      categoryContainer.innerHTML = category;
      titleContainer.innerHTML = title;
      var videoCounter = 0;
      var quoteCounter = 0;
      var imgCounter = 0;
      for (stak in jsonData.lectures[nr].content){
        if (jsonData.lectures[nr].content[stak].type == "youtube"){
          var video = document.createElement("iframe");
          mainContainer.appendChild(video);
          document.getElementsByTagName("iframe")[videoCounter].setAttribute("src", jsonData.lectures[nr].content[stak].data);
          document.getElementsByTagName("iframe")[videoCounter].setAttribute("frameborder", "0");
          document.getElementsByTagName("iframe")[videoCounter].setAttribute("allowfullscreen", "0");
          videoCounter++;
        }
        if (jsonData.lectures[nr].content[stak].type == "text"){
          var paragraph = document.createElement("p");
          paragraph.innerHTML = jsonData.lectures[nr].content[stak].data;
          mainContainer.appendChild(paragraph);
        }
        if (jsonData.lectures[nr].content[stak].type == "quote"){
          var quotes = document.createElement("q");
          quotes.innerHTML = jsonData.lectures[nr].content[stak].data;
          mainContainer.appendChild(quotes);
          document.getElementsByTagName("q")[quoteCounter].setAttribute("class", "quote");
          quoteCounter++;
          if (jsonData.lectures[nr].content[stak].attribute){
            var quotes = document.createElement("q");
            quotes.innerHTML = jsonData.lectures[nr].content[stak].attribute;
            mainContainer.appendChild(quotes);
            document.getElementsByTagName("q")[quoteCounter].setAttribute("class", "quote");
            quoteCounter++;
          }
        }
          if (jsonData.lectures[nr].content[stak].type == "image"){
            var image = document.createElement("img");
            mainContainer.appendChild(image);
            document.getElementsByTagName("img")[imgCounter].setAttribute("src", jsonData.lectures[nr].content[stak].data);
            imgCounter++;
          }
          if (jsonData.lectures[nr].content[stak].type == "heading"){
            var heading = document.createElement("h1");
            heading.innerHTML = jsonData.lectures[nr].content[stak].data;
            mainContainer.appendChild(heading);
          }
          if (jsonData.lectures[nr].content[stak].type == "list"){
            var list = document.createElement("ul");
            for (listi in jsonData.lectures[nr].content[stak].data){
              var listObject = document.createElement("li");
              listObject.innerHTML = jsonData.lectures[nr].content[stak].data[listi];
              list.appendChild(listObject);
            }
            mainContainer.appendChild(list);
          }
          if (jsonData.lectures[nr].content[stak].type == "code"){
            var pre = document.createElement("pre");
            var code = document.createElement("code");
            code.innerHTML = jsonData.lectures[nr].content[stak].data;
            pre.appendChild(code);
            mainContainer.appendChild(pre);
          }
        }
        mainContainer.appendChild(document.createElement("br"));
      }
    }
  }

var myCodeMirror = CodeMirror(document.getElementById("editor"), {

  value: ["var placeholder = 'text'"].join("\n"),

  mode:  {name: "python"},
  lineNumbers: true,
  gutters: ["CodeMirror-lint-markers"],
  // lint: true,
  theme: "solarized dark",
  autoCloseBrackets: true,
  matchBrackets: true
});

$(document).ready(function (){

  $(".CodeMirror").on("click", function() {
    console.log(myCodeMirror.getValue());
  });

  $("button[name='Problem_1']").on("click", function(){
    var problemData = $.get("Python_Euler/Problem_1.py", function() {
      console.log(problemData["responseText"]);
      myCodeMirror.setValue(problemData["responseText"]);
    });
  });

  $("button[name='Index']").on("click", function(){
    var indexURL = "https://api.github.com/repos/Grae-Drake/Python_Euler/contents/";
    var repoData = $.get(indexURL, function() {
      responseText = JSON.parse(repoData["responseText"]);
      console.log("Response Text is so long: ", responseText.length);
      problemList = [];
      for (var i = 1 ; i < responseText.length ; i++) {
        console.log("inside loop");
        console.log("This response is: ", responseText[i]);
        if (responseText[i]["name"].indexOf("Problem") > -1) {
          problemList.push(responseText[i]["name"]);
        }
      }
      console.log("Problem list is: ", problemList);
      myCodeMirror.setValue(repoData["responseText"]);
    });
  });

});
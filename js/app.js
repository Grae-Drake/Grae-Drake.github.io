var myCodeMirror = CodeMirror(document.getElementById("editor"), {

  value: ["var placeholder = ",
          "'text'"].join("\n"),
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

      var responseText = JSON.parse(repoData["responseText"]);
      var problemList = [];
      for (var i = 0 ; i < responseText.length ; i++) {
        if (responseText[i]["name"].indexOf("Problem") > -1) {
          problemList.push(responseText[i]["name"]);
        }
      }

      for (var i = 0 ; i < problemList.length ; i++) {
        $(".problem-selector").append(
          ["<button name='",
          problemList[i],
          "'>",
          problemList[i].split("_")[-1],
          "</button>"].join("")
          );
      }
      

      myCodeMirror.setValue(JSON.stringify(problemList));

    });
  });

});
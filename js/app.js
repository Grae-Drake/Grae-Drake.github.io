var myCodeMirror = CodeMirror(document.getElementById("editor"), {

  value: ["var placeholder = 'text'"].join("\n"),

  mode:  {name: "python"},
  lineNumbers: true,
  gutters: ["CodeMirror-lint-markers"],
  lint: true,
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

});
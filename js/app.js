var myCodeMirror = CodeMirror(document.getElementById("editor"), {
  value: ["function myScript(){return 100;}",
          "var someText = 'Yo, dawg'"].join("\n"),
  mode:  {name: "javascript", json: true},
  theme: "solarized dark",
  lineNumbers: true,
  autoCloseBrackets: true,
  //lint: true,
  matchBrackets: true
});

$(document).ready(function (){

  $(".CodeMirror").on("click", function() {
    console.log(myCodeMirror.getDoc());
  });

});
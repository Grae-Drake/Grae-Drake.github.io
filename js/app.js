var myCodeMirror = CodeMirror(document.getElementById("editor"), {
  value: ["function myScript(){return 100;}",
          "var someText = 'Yo, dawg'"].join("\n"),
  mode:  {name: "javascript", json: true},
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

});
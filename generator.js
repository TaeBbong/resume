$(document).ready(function () {
  $("#wrap-toc").toc({ content: ".wrap-content", headings: "h2,h3,h4" });
  $.getJSON(
    "https://taebbong.github.io/resume/projects.json?callback=?",
    function (data) {
      console.log(data);
    }
  );
});

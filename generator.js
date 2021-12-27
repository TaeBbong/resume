$(document).ready(function () {
  var $projects_div = $(".projects");

  $.getJSON("https://taebbong.github.io/resume/projects.json", function (json) {
    var i = 0;
    json.forEach((data) => {
      i += 1;
      var $elem = $("#project-template").clone().removeAttr("id");
      $elem.find(".project-name").html("프로젝트#" + i + "<br />" + data.name);
      $elem.find("#project-tech").html(data.desc);
      $elem.find("#project-link").html(data.link);
      $elem
        .find("#project-link")
        .html("<a href=" + data.link + ">" + data.link + "</a>");
      $projects_div.append($elem);
    });
  });

  $("#wrap-toc").toc({ content: ".wrap-content", headings: "h2,h3,h4" });
});

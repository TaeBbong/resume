$(document).ready(function () {
  var $projects_div = $(".projects");

  $.getJSON("https://taebbong.github.io/resume/projects.json", function (json) {
    var i = 0;
    json.forEach((data) => {
      i += 1;
      var $elem = $("#project-template").clone().removeAttr("id");
      $elem.find(".project-name").html("프로젝트#" + i + "<br />" + data.name);
      $elem.find("#project-period").html("제작기간 : " + data.period);
      $elem.find("#project-tech").html("사용기술 : " + data.tech.join(", "));
      $elem
        .find("#project-repo")
        .html(
          "소스코드 : " + "<a href=" + data.repo + ">" + data.repo + "</a>"
        );
      $elem
        .find("#project-link")
        .html("서비스 : " + "<a href=" + data.link + ">" + data.link + "</a>");
      $elem.find("#project-image").attr("src", data.img);
      $elem.find("#project-desc").html("설명 : " + data.desc);
      $elem.find("#project-wil").html("배운 것 : " + data.wil);
      $elem.find("#project-problem").html("어려웠던 것 : " + data.problem);
      $projects_div.append($elem);
    });
  });

  $("#wrap-toc").toc({ content: ".wrap-content", headings: "h2,h3,h4" });
});

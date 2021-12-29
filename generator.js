$(document).ready(function () {
  var $projects_div = $(".projects");

  $.getJSON("https://taebbong.github.io/resume/projects.json", function (json) {
    json.forEach((data) => {
      var $elem = $("#project-template").clone().removeAttr("id");
      $elem
        .find(".project-name")
        .html("프로젝트 #" + data.id + "<br />" + data.name);
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
      $elem.find("#project-desc").html("<b>설명</b> : " + data.desc);
      $elem.find("#project-wil").html("<b>배운 것</b> : " + data.wil);
      $elem
        .find("#project-problem")
        .html("<b>어려웠던 것</b> : " + data.problem);
      $elem
        .find("#project-more")
        .html(
          "<b>더 자세한 후기</b> : " +
            "<a href=" +
            data.more +
            ">" +
            data.more +
            "</a>"
        );
      $projects_div.append($elem);
    });
  });

  $("#wrap-toc").toc({ content: ".wrap-content", headings: "h2,h3,h4" });
});

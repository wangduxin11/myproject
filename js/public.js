function setVcs() {
  $(".vc").html(setVc());
  $(".vc").click(function () {
    $(".vc").html(setVc());
  });
}

function enroll() {
  $("#enroll").blur(function () {
    if (
      $("#enroll").val().toLocaleLowerCase() ===
      $(".vc").text().toLocaleLowerCase()
    ) {
      $("#enroll")
        .next()
        .next()
        .html("验证通过")
        .css({ color: "rgb(84, 224, 19)" });
      vcSuccess = true;
    } else {
      $("#enroll")
        .next()
        .next()
        .html("验证码不正确，点击重试！")
        .css({ color: "red" });
      vcSuccess = false;
    }
    submitState();
  });
}

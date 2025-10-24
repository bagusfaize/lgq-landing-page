$(document).ready(function () {
  const videoURL = "https://www.youtube.com/embed/-cjzfvV866E?autoplay=1";

  // Toggle menu for mobile view
  $(".menu-toggle").click(function () {
    $(".nav-links").toggleClass("active");
  });

  // Video modal handler
  $("#watchVideoBtn").on("click", function () {
    $("#videoModal").addClass("show")
    $("#youtubeVideo").attr("src", videoURL);
  });

  $(".video-close, #videoModal").on("click", function (e) {
    if (e.target !== this) return;
    $("#videoModal").removeClass("show");
    $("#youtubeVideo").attr("src", "");
  });


});

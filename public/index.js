let page=0;

// Init Masonry
let $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

// Layout Masonry After Each Image Loads
$grid.imagesLoaded().progress((instance,image) => {
  if (!image.isLoaded) {
    image.img.onload = () => $grid.masonry("layout");
    image.img.src = "https://via.placeholder.com/300x200?text=Image+Missing";
  }
  $grid.masonry("layout");
});

$grid.imagesLoaded().always(() => {
  $grid.masonry("layout");
});

// Functions
$(function() {
  $('#form-add-pin').on('submit',handleAddPin);
  $('.main-button-up').on('click', () => {
    $(window).scrollTop(0);
  });

  $(window).on('scroll', () => {
    let element = document.body;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      loadMoreImages();
    }
  });

  $("[data-bs-tooltip=\"tooltip\"]").tooltip();
});

function loadMoreImages() {
  $.ajax({
    url: "/more",
    method: "get",
    data: {page},
    success: (d) => {
      addPinsToWall(d);
      page++;
    }
  });
}

function addPinsToWall(pins) {
  let pin = "";
}

function handleAddPin(event) {
  event.preventDefault();
  let inputs = $("input");
  let buttons = $("button");
  let article = $(".modal-status-article");
  let p = $(".modal-status-article p");
  let spinner = $(".modal-status-article article");
  inputs.addClass("disabled").prop("disabled", true);
  buttons.addClass("disabled").prop("disabled", true);
  article.removeClass("d-none");
  spinner.removeClass("d-none");
  p.text("Adding pin, please wait").removeClass("text-danger");
  $.ajax({
    url: "/add",
    method: "POST",
    data: {link: $("#input-link").val(), title: $("#input-title").val()},
    success: (d) => {
      if (typeof d === "string") {
        p.text(d).addClass("text-danger");
        inputs.removeClass("disabled").prop("disabled", false);
        buttons.removeClass("disabled").prop("disabled", false);
        spinner.addClass("d-none");
      } else {
        spinner.addClass("d-none");
        p.text("Pin added!").addClass("text-success");
        window.location.reload(true);
      }
    },
    error: () => {
      p.text("Error occurred, please try again").addClass("text-danger");
      inputs.removeClass("disabled").prop("disabled", false);
      buttons.removeClass("disabled").prop("disabled", false);
      spinner.addClass("d-none");
    }
  });
}
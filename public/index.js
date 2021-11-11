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
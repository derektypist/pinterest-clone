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


// HBD banner
$(document).ready(function() {
$("#owl-banner").owlCarousel({
autoPlay : 3000,
stopOnHover : true,
navigation : true,
pagination : true,
paginationNumbers : true,
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
autoHeight : true,
//Mouse Events
dragBeforeAnimFinish : false,
mouseDrag : false,
touchDrag : false
});
});
// HBD team
$(document).ready(function() {
$("#owl-team").owlCarousel({
navigation : true,
pagination : false,
slideSpeed : 300,
paginationSpeed : 400,
singleItem:true,
autoHeight : true,
lazyLoad : true,
//Mouse Events
dragBeforeAnimFinish : false,
mouseDrag : false,
touchDrag : false
});
});
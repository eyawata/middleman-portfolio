function loadPartial() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        $('#banner').load('../partials/banner.html');
    } else {
        $('#banner').load('../partials/banner_lg.html');
    }
}
$(document).ready(function() {
    loadPartial();
    $(window).resize(loadPartial);
})
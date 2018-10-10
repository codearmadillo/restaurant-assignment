var offcanvas = {
    activeClass: 'offcanvas--active',

    init: function(){
        var offcanvasLinks = document.querySelectorAll('a.offcanvas-link');
        for (var i = 0; i < offcanvasLinks.length; i++) {
            offcanvasLinks[i].addEventListener('click', function(event) {
                offcanvas.toggle('main');
            });
        }
    },
    get: function(canvas) {
        return document.getElementById(canvas + "-offcanvas");
    },
    toggle: function(canvas){
        var canvas = offcanvas.get(canvas);
        
        if(canvas.classList.contains(offcanvas.activeClass)){
            canvas.classList.remove(offcanvas.activeClass);
        } else {
            canvas.classList.add(offcanvas.activeClass);
        }
    }
}
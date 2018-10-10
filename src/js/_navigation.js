var offcanvas = {
    activeClass: 'offcanvas--active',

    init: function(canvas){
        return document.getElementById(canvas + "-offcanvas");
    },
    toggle: function(canvas){
        var canvas = offcanvas.init(canvas);
        
        if(canvas.classList.contains(offcanvas.activeClass)){
            canvas.classList.remove(offcanvas.activeClass);
        } else {
            canvas.classList.add(offcanvas.activeClass);
        }
    }
}
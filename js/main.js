$(document).ready(function () {
  
    $('#form-fields li').draggable({
        revert: "valid",
        appendTo: "body",
        helper: "clone",
        cursor: "move"
    });
    $(".Containt").droppable({
        accept: ":not(.ui-sortable-helper)",
        drop: function (event, ui) {

            /* Remove Comment if want to use each element once.
         var self = $(this);
        self.find(".placeholder").remove();
    */
            var newclass = "road";
            // change class name whatever you want


            var item = ui.draggable.html();
            var s = item;
            var r = /<span>(.*)<\/span>/g;
            var newtxt = s.replace(r, "");

            $("<div/>", {
                "html": newtxt + "<span>Remove This</span>",
                "class": newclass
            }).appendTo(this);
        }


    }).sortable({
        cursor: "move",
        items: "div:not(.placeholder)",
        sort: function () {
            $(this).removeClass("ui-state-default");
        }
    });

    $(document).delegate(".road span", "click", function () {
        $(this).parent().remove();
    });
});
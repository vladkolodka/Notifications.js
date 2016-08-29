function createNotify(imageSrc, text, color, showTime) {
    var blockColor = color == "" ? "" : ' ' + color;
    var notification = $("<div class='notification" + blockColor + "'></div>");

    notification.append($("<img src='" + imageSrc + "' />"));
    notification.append($("<article>" + text + "</article>"));
    notification.append($("<div class='close " + blockColor + "'>×</div>").click(function (element) {
        hide(notification);
    }));

    $(".notifications").append(notification);
    $("#player").attr("src", "sounds/notify.wav");

    notification.select(function () {
        return false;
    }).mousedown(function () {
        return false;
    });

    notification.animate({right: 0}, 200, "swing");
    if(showTime){
        window.setTimeout(function () {
            hide(notification);
        }, showTime);
    }
}
function hide(element){
    element.animate({right: -400}, 200, "swing", function () {
        element.remove();
    });
}
function hideAll(){
    $(".notification").each(function (index, element) {
        hide($(element));
    });
}
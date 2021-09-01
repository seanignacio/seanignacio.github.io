$(document).ready(() => {    
    const $mobileMenu = $(".mobile-menu");
    const $navOpen = $("#mobileNavOpen");
    const $navClosed = $("#mobileNavClose");
    const $navBtn = $("#mobileNavBtn");

    $(document).on("mouseup", (e) => {
        if (!$mobileMenu.is(e.target)
        && $mobileMenu.has(e.target).length === 0
        && !$navClosed.is(e.target)
        && $mobileMenu.hasClass("slide-in")) {
            if ($mobileMenu.hasClass("hidden")) {
                $mobileMenu.toggleClass("hidden");
            } else {
                setTimeout(function() {
                    $mobileMenu.toggleClass("hidden");
                }, 401);
            }
            $mobileMenu.removeClass("slide-in");
            $navOpen.toggle();
            $navClosed.toggle();
            $(".accordion-drop-btn").removeClass("bg-blue");
            $(".accordion-drop-btn").removeClass("yellow-text");
            $("#downArrow").removeClass("left-arrow");
            $(".accordion-drop-content").slideUp();
            console.log("Conditional is working")
        }
    })
    $navBtn.on("click", () => {
        if ($mobileMenu.hasClass("hidden")) {
            $mobileMenu.toggleClass("hidden");
        } else {
            setTimeout(function() {
                $mobileMenu.toggleClass("hidden");
            }, 401);
        }
        $mobileMenu.toggleClass("slide-in");
        $navOpen.toggle();
        $navClosed.toggle();
    })

    $("#lodging").click(() => {
        $("#navDropLodging").slideToggle();
        $("#lodging").toggleClass("bg-blue");
        $("#lodging").toggleClass("yellow-text");
        $("#lodging #downArrow").toggleClass("left-arrow");
    });
    $("#dining").click(() => {
        $("#navDropDining").slideToggle();
        $("#dining").toggleClass("bg-blue");
        $("#dining").toggleClass("yellow-text");
        $("#dining #downArrow").toggleClass("left-arrow");

    });
    $("#activities").click(() => {
        $("#navDropActivities").slideToggle();
        $("#activities").toggleClass("bg-blue");
        $("#activities").toggleClass("yellow-text");
        $("#activities #downArrow").toggleClass("left-arrow");
    });
})

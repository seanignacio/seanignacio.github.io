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

    $("#lodging").click((e) => {
        $("#navDropLodging").slideToggle();
        $("#lodging button").toggleClass("bg-blue");
        $("#lodging button").toggleClass("yellow-text");
        $("#lodging #downArrow").toggleClass("left-arrow");
    });
    $("#dining").click(() => {
        $("#navDropDining").slideToggle();
        $("#dining button").toggleClass("bg-blue");
        $("#dining button").toggleClass("yellow-text");
        $("#dining #downArrow").toggleClass("left-arrow");

    });
    $("#activities").click(() => {
        $("#navDropActivities").slideToggle();
        $("#activities button").toggleClass("bg-blue");
        $("#activities button").toggleClass("yellow-text");
        $("#activities #downArrow").toggleClass("left-arrow");
    });
})

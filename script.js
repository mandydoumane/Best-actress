$(function() {
    var $mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = $mainMenuItems.length,
        openedIndex = 2,

        init = function(){
            bindEvents();

            if(validIndex(openedIndex))
                animateItem($mainMenuItems.eq(openedIndex), true, 700);
        },

        bindEvents = function() {
            $mainMenuItems.children(".images").click(function() {
                var newIndex = $(this).parent().index();
                $item = $mainMenuItems.eq(newIndex);
                checkAndAnimateItem(newIndex);

            });
            
            $(".button").hover(
            function() {
                $(this).addClass("hovered");
            },
            function() {
                $(this).removeClass("hovered");
            }
            );
            $(".button").click(function() {
                var newIndex = $(this).index();
                checkAndAnimateItem(newIndex);
            });
        },

        validIndex = function(indexToCheck) {
            return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
        };
        
        animateItem = function($item, toOPen, speed) {
            var $colorImage = $item.find(".color"),
            itemParam = toOPen ? {width:"420px"}: {width:"140px"}; // on demande si le parent est égal à 420px et si oui on le met à 140px
            colorImageParam = toOPen ? {left:"0px"}: {left:"140px"};


            $colorImage.animate(colorImageParam,speed);
            $item.animate(itemParam,speed);
        }
        checkAndAnimateItem = function(indexToCkeckAndAnimate) {
            if(openedIndex === indexToCkeckAndAnimate) {
                animateItem($mainMenuItems.eq(indexToCkeckAndAnimate), false, 250);
                openedIndex = -1;
            }
            else {
                if(validIndex(indexToCkeckAndAnimate)) {
                    animateItem($mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = indexToCkeckAndAnimate;
                    animateItem($mainMenuItems.eq(openedIndex), true, 250);
                }
            }

        };
        init();




});
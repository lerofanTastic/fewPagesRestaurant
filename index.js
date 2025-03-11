$(function(){
    $(".leftArrow").on("click", function(){
        $("#gallery").removeClass("values").addClass("about");
    });
    $(".rightArrow").on("click", function(){
        $("#gallery").removeClass("about").addClass("values");
    });
    $("#rightReviewArrow").on("click", function(){
        if ($(event.target).hasClass("inactive")){
            return;
        }
        const reviewsContainer = document.getElementById("reviews");
        const offset = reviewsContainer.querySelector(".reviewContainer").offsetWidth;
        reviewsContainer.scrollLeft += offset + 40;
        $("#leftReviewArrow").removeClass("inactive");
    });
    $("#leftReviewArrow").on("click", function(){
        if ($(event.target).hasClass("inactive")){
            return;
        }
        const reviewsContainer = document.getElementById("reviews");
        const offset = reviewsContainer.querySelector(".reviewContainer").offsetWidth;
        reviewsContainer.scrollLeft -= offset + 40;
        $("#rightReviewArrow").removeClass("inactive");
    });
    $("#showMore").on("click", function(){
        $("#reviews .reviewContainer").show();
        $("#showMore").hide();
    });
    $("#openSpecialOffer, .mobilePromo").on("click", function(){
        $("#specialOffer").show();
    });
    $("#specialOffer .close").on("click", function(){
        $("#specialOffer").hide();
    });
});
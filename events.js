$(function(){
    const buttonObserverOptions = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1],
    };

    let buttonIsShown = {};

    const observerButtons = new IntersectionObserver(function(entries, observer){
        if(document.documentElement.clientWidth <= 750) return;
        entries.forEach((entry) => {
            let btn = entry.target;
            buttonIsShown[btn.dataset.observeId] = entry.isIntersecting;
        });  
        if(Object.values(buttonIsShown).some(x => x)){
            $("#openSpecialOffer").hide();
        } else {
            $("#openSpecialOffer").show();
        }
    }, buttonObserverOptions);
    $(".bigButton").toArray().forEach((btn, btnIdx) =>{
        btn.dataset.observeId = btnIdx;
        observerButtons.observe(btn);
    });
});

$(document).on("onReviewsCreated", function(){
    const container = document.getElementById("reviews");
    const firstReview = container.firstElementChild;
    const lastReview = container.lastElementChild;

    const options = {
        root: container,
        rootMargin: "0px",
        threshold: 0.9,
    };

    const callbackCreator = function(arrowSelector){
        return (entries, observer) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    $(arrowSelector).addClass("inactive");
                }
            });  
        };
    }
    
    const observerLastReview = new IntersectionObserver(callbackCreator("#rightReviewArrow"), options);
    observerLastReview.observe(lastReview);

    const observerFirstReview = new IntersectionObserver(callbackCreator("#leftReviewArrow"), options);
    observerFirstReview.observe(firstReview); 
});
    

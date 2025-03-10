$(function(){
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
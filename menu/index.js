async function init(){
    let category = new URL(document.location).searchParams.get("cat") ?? "dessert";

    $(`#menu-categories button[data-cat="${category}"]`).attr("disabled", true);

    const response = await fetch(`/menu/${category}.json`);
    if (response.ok) {
        const data = await response.json();
        const template = document.getElementById("menuItemCard");

        for (itemInfo of data){
            let card = template.content.cloneNode(true);
            card.querySelector(".menuItemPic").setAttribute("src", itemInfo["pic"]);
            card.querySelector(".menuItemName").innerText = itemInfo["name"];
            card.querySelector(".menuItemPrice").innerText = itemInfo["price"];
            card.querySelector(".detailsButton").dataset.details = itemInfo["details"];
            card.querySelector(".detailsButton").dataset.kcal = itemInfo["kcal"];
            document.getElementById("menu").appendChild(card);
        }
    } else {
        document.location.href = "/menu"
    }
    $(".detailsButton").on("click", function(event){
        const name = $(event.target).closest(".menuItem").find(".menuItemName").text();
        const price = $(event.target).closest(".menuItem").find(".menuItemPrice").text();
        // const pic = $(event.target).closest("menuItem").find(".menuItemPic").attr("src");
        const kcal = $(event.target).data("kcal");
        const info = $(event.target).data("details");

        $("#detailsTitle").text(name);
        $("#detailsKcal").text(`${kcal} ккал`);
        $("#detailsPrice").text(price);
        $("#detailsInfo").text(info);
        $("#detailsWindow").show();
    });
    $("#detailsClose").on("click", function(event){
        $("#detailsWindow").hide();
    })
}

init();
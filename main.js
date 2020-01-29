
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
   
    if(relevantApts.length < 1 ) {
        $("#results").empty()   
        $("#results")
        .append("<div class=no-match>You're waaayy too picky you spoiled JAP </div>")
    } else{
        renderApts(relevantApts)
    }
    
})

const renderApts = function (apartments) {
    $("#results").empty()
    const source = $('#immed-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({apts: apartments});
    $('#results').append(newHTML);
}

renderApts(apartments) 
// Script to handle search for professional
// Create a variable for the search criteria
var field = ""
var criteria = ""

//On submit display query results
$(".find-pro").on("click", function () {
    field = $("#search-by").val().trim()
    criteria = $("#criteria").val().trim()
    console.log(`search ${field} for ${criteria}`)
    $("#criteria").val("")
    $("#prodisplay").html("") // clear contents of div
    $("#prodisplay").show()
    var header = $("<div>").html("<h2 class='my-4 heading-section heading-section-2'> MEET OUR RECOMMENDATIONS </h2>").addClass("col-lg-12")
    $("#prodisplay").append(header)
    document.getElementById("prodisplay").scrollIntoView();
    // Get data from the taxpros collection in mongodb via the api
    $.get("/taxpros", function (data) {
        console.log(data[0]._id);
        for (i = 0; i < 6; i++) {
            var photURL = data[i].profileImage
            var $fName = $("<h3>").html(data[i].fName)
            var $qual = $("<p>").html("Serving tax clients since " + data[i].year)
            var $proDiv = $("<div>").addClass("col-sm-6 col-lg-4 mb-4 text-center profile").attr("data-id", data[i]._id);
            var $img = $("<img>").addClass("rounded-circle img-fluid d-block mx-auto").attr("src", photURL)
            var proBlockHtml = $proDiv.append(
                $img,
                $fName,
                $qual
            );
            $("#prodisplay").append(proBlockHtml)
        }

    });
});

$(document).on("click", ".profile", function () {
    $("#proDetail").html("")
    var thisID = $(this).attr("data-id");
    console.log(thisID)
    document.getElementById("proDetail").scrollIntoView();
    // $("#prodisplay").hide()
    $.get("taxpros/" + thisID, function (data) {
        //Display profile detail
        var $Name = $("<h3>").html(data.fName).addClass("text-block text-bold text-black text-med-large m-b-30")
        var $P = $("<p>").addClass("text-block m-b-30")
        
        var $address = $("<p>").addClass("text-block m-b-30").append(`${data.officeAddress} <br> ${data.officeCity}, ${data.officeState}  ${data.zipcode}`)
        var $title = $("<p>").addClass("text-block text-grey-1 m-b-30").append(data.title)
        $("#proDetail").append($Name)
                for (i=0; i<data.designations.length; i++) {
            var cred = data.designations[i]
            $("#proDetail").append(cred + " ") 
        }
        $("#proDetail").append(
            $title,
            $address
        )
        $("#proDetail").append("<blockquote class='post-blockquote m-b-30'> <p class='text-block'> Doing business since " + data.year + "</p></blockquote>")
        $("#profilePhone").html("Phone: " + data.phoneNumber)
        $("#profileEmail").html("Email: " + data.email)
        $("#profileImage").attr("src", data.profileImage)
        $(".fa-facebook-square").attr("href", data.facebook)
        $(".fa-linkedin-square").attr("href", data.linkedIn)
            



        console.log(data)

        // <h4 class="text-block text-bold text-black text-med-large m-b-30">Philip Barnett</h4>
        //                 <p class="text-block text-grey-1 m-b-30">Chief Executive Officer</p>
        //                 <p class="text-block m-b-30"></p>


    })
})


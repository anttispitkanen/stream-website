$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var cityTampere = $("input#cityTampere").val();
            var cityTurku = $("input#cityTurku").val();
            var cityHelsinki = $("input#cityHelsinki").val();
            var phoneNumber = $("input#phoneNumber").val();
            var email = $("input#email").val();
            var linkedin = $("input#linkedin").val();
            var otherUrls = $("textarea#otherUrls").val();
            var education = $("input#education").val();
            var workExperience = $("textarea#workExperience").val();
            var entrepreneurshipExperience = $("textarea#entrepreneurshipExperience").val();
            var doYouHaveaBusinessIdea = $("textarea#doYouHaveaBusinessIdea").val();
            var whatMotivatesYou = $("textarea#whatMotivatesYou").val();
            var whatMakesYouaSuccesfullEntrepreneur = $("textarea#whatMakesYouaSuccesfullEntrepreneur").val();
            var whatIsYourSituation = $("textarea#whatIsYourSituation").val();
            var whatIsYourPrimaryGoal = $("textarea#whatIsYourPrimaryGoal").val();
            var howMuchTimeHaveYouScheduled = $("input#howMuchTimeHaveYouScheduled").val();
            var canAttendYes = $("input#canAttendYes").val();
            var canAttendNo = $("input#canAttendNo").val();
            var psychologicalOnlineTest = $("input#psychologicalOnlineTest").val();
            var mailListYes = $("input#mailListYes").val();
            var mailListNo = $("input#mailListNo").val();
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://hooks.zapier.com/hooks/catch/3589462/gmndg0/",
                type: "POST",
                data: {
                    name: name,
                    cityTampere: cityTampere,
                    cityTurku: cityTurku,
                    cityHelsinki: cityHelsinki,
                    phoneNumber: phoneNumber,
                    email: email,
                    linkedin: linkedin,
                    otherUrls: otherUrls,
                    education: education,
                    workExperience: workExperience,
                    entrepreneurshipExperience: entrepreneurshipExperience,
                    doYouHaveaBusinessIdea: doYouHaveaBusinessIdea,
                    whatMotivatesYou: whatMotivatesYou,
                    whatMakesYouaSuccesfullEntrepreneur: whatMakesYouaSuccesfullEntrepreneur,
                    whatIsYourSituation: whatIsYourSituation,
                    whatIsYourPrimaryGoal: whatIsYourPrimaryGoal,
                    howMuchTimeHaveYouScheduled: howMuchTimeHaveYouScheduled,
                    canAttendYes: canAttendYes,
                    canAttendNo: canAttendNo,
                    psychologicalOnlineTest: psychologicalOnlineTest,
                    mailListYes: mailListYes,
                    mailListNo: mailListNo
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#dreamTeamForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#dreamTeamForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

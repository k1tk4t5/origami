$('#contact_form').submit(function (e) {

    e.preventDefault(); // prevent from submitting form directly

    $.ajax({
        URL: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLScYDf5PRl5UI07sXEaGJaugq7foo4DbfQfJ9N6j2YLwN6ifAA/formResponse',
        method: 'POST',
        data: $('#contact_form').serializeArray()
    })
        .done(function (response) {
            alert(response);
            $('#contact_form').reset();
        })
        .fail(function (error) {
            alert(error);
        })

    // $.ajax({
    //   url: 'form.php',
    //   method: 'post',
    //   data: $("#myForm").serializeArray() // convert all form data to array (key:value)
    // })
    // .done(function(response){
    //   alert(response); // show the response
    //   $("#myForm").reset(); // reset the form
    // })
    // .fail(function(error){
    //   alert(error); // show the error.
    // });

})
//prepare, plan, perform
    //Hide trap sign
    //When user clicks on image, reveal trap sign

    $(document).ready(function() {
        $('.warning').hide().show('slow');

        //Capture click on Image
        $('.image').on('click', function() {
            console.log('clicked image');

            $('.warning').toggle("slow");
        })
    })
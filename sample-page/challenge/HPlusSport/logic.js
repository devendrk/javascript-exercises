$("document").ready(function(){
    $('[data-type ="vitamin"]').css("background-color","yellow");
    $('[data-type ="proteinbar"]').css("background-color","black");
    $('[data-type ="mineral-water"]').css("background-color","blue");

    let sortChecked = function(){
        let sorted = $('[data-type =]')
    }

    $('input[type=checkbox]').on('click', sortChecked);
})


console.log('21');
//autofocus on name bar
$('#name').focus();



// Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
let otherTextBar = $('#other-title').hide();
console.log(otherTextBar);
//this selects the role,
$('#title').on('change', function(e){
    let select = $(this).val();
    console.log(select);
    if (select != "other"){
        //when I select other the text bar will appear
        //use .show();
        $(otherTextBar).hide()
    }
    else{
       //if other is not selected (!=not), no text bar will show .hide()
       $(otherTextBar).show()
    }
})


// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
const $shirtColor = $("#colors-js-puns");
$shirtColor.hide();
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

const $shirtOption = $("#design");
$($shirtOption).change(function(){
if ($shirtOption.val() === "js puns"){
    $shirtColor.show();
    $('#color').val('cornflowerblue');
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
} 
else if ($shirtOption.val()==="heart js"){
    $shirtColor.show();
    $('#color').val('tomato');
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
}
});


    //$selectTheme.prop("disabled", true);


// Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
var $jsFrameworks = $('input[name ="js-frameworks"]')
var $jsLibraries = $("input[name='js-libs']");
var $express = $("input[name='express']");
var $nodeJS = $("input[name='node']");

    $jsFrameworks.change(function(){
        if($(this).is(':checked')){
            $express.prop('disabled', true);
        } else {
            $express.prop('disabled', false);
        }
    });

    $express.change(function(){
        if($(this).is(':checked')){
            $jsFrameworks.prop('disabled', true);
        } else {
            $jsFrameworks.prop('disabled', false);
        }
    });

    $jsLibraries.change(function(){
        if($(this).is(':checked')){
            $nodeJS.prop('disabled', true);
        } else {
            $nodeJS.prop('disabled', false);
        }
    });

    $nodeJS.change(function(){
        if($(this).is(':checked')){
            $jsLibraries.prop('disabled', true);
        } else {
            $jsLibraries.prop('disabled', false);
        }

    });


// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
let activitiesField = $('.activities');
let moneyDiv = document.createElement('div');
let runningTotal = 0;
$('.activities').on('change', (e) => {
    let isChecked = $(e.target).is(':checked'); //`input[type=checkbox]`
    console.log('checked = ' + isChecked);
    let g = e.target.parentNode.innerHTML; //to select text in between input field
    var pos = g.indexOf("$");
    var text = g.substring(pos + 1);
    //console.log(res); //should be whatever number associated with checkbox
    if(isChecked === true){
     runningTotal += parseInt(text)
    }
    else if(isChecked === false){
      runningTotal -= parseInt(text)
    }
    console.log(runningTotal);
    moneyDiv.innerHTML = ('$' + runningTotal);
});
//append to page
$(activitiesField).append(moneyDiv);


// Display payment sections based on the payment option chosen in the select menu.
$('#credit-card').next().addClass('paypal');
$('#credit-card').next().next().addClass('bitcoin');
//hide payment divs until payment preference is chosen
$('.paypal').hide();
$('.bitcoin').hide();
//show credit card for default
$('#credit-card').show();
$('#payment option[value="credit card"]').prop('selected', true);
//hide "select payment" option if credit card is shown on default per requirements (seems unecessary to leave it)
$('#payment option[value="select_method"]').hide();

//check to see what is selected and show matching payment div
$('#payment').change((event) => {
    //get the selected option
    let selected = $('#payment option:selected').text();
    //hide all in case they change payment options
    $('.paypal').hide();
    $('#credit-card').hide();
    $('.bitcoin').hide();
    //show the selected preference
    if ( selected === "Credit Card" ) {
        $('#credit-card').show();
    } else if ( selected === "PayPal" ) {
        $('.paypal').show();
    } else if ( selected === "Bitcoin" ) {
        $('.bitcoin').show();
    }
});



// If any of the following validation errors exist, prevent the user from submitting the form:
// Name field can't be blank.
const validateName = () => {
    //remove any previous error messages
    $('.nameVal').remove();
    //get the input value for the name
    let nameVal = $('#name').val();
    //if it is empty - tell user to input name and disabled the submit button
    if ( nameVal === "") {
        $('#name').css('border-color', 'red').attr('placeholder', 'Please Enter Your Name');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    //if the input is a number and not a name - place an error message and disabled button
    } else if ( !isNaN(nameVal) ) {
        $('#name').css('border-color', 'red');
        $('#name').after('<p class="nameVal">Please enter a name using letters.</p>');
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    //if the value is text then make sure the border is the correct color and make button accessible
    } else if ( isNaN(nameVal) ) {
        $('#name').css('border-color', '#5e97b0');
        $('button').prop('disabled', false).css('cursor', 'default');
    }
}
 //check the name after a key is pressed and if they tab out or move to another section
 $('#name').keyup(validateName).focusout(validateName);

// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
//validate email function
    const validateEmail = () => {
        //remove any previous error messages
        $('.emailVal').remove();
        //get the email input value
        let emailVal = $('#mail').val();
        //regex to test against - from emailregex.com
        let test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //if nothing is entered - let use know they need to enter an email
        if( emailVal === '') {
            $('#mail').css('border-color', 'red').attr('placeholder', 'Please Enter Your Email');
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
        //if the email is valid - form submission is possible and field returns to normal state
        else if ( test.test(emailVal) ) {
            $('#mail').css('border-color', '#5e97b0');
            $('button').prop('disabled', false).css('cursor', 'default');
        //if email is not valid - form cannot be submitted and user is informed to enter a valid email
        } else if ( !test.test(emailVal) ){
            $('#mail').css('border-color', 'red');
            $('#mail').after('<p class="emailVal">Please enter a valid email.</p>');
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    }
    
    $('#mail').keyup(validateEmail).focusout(validateEmail);


     //credit card validation
    //credit card number - must be numbers - must be between 13 & 16 numbers long
    const validateCC = () => {
        //remove any previous error messages
        $('.ccVal').remove();
        //reset the field back to normal
        $('#cc-num').css('border-color', '#5e97b0');
        //make the button accessible
        $('button').prop('disabled', false).css('cursor', 'default');
        //get the credit card number value
        let ccVal = $('#cc-num').val();
        //if the input is only numbers then check the length
        if (!isNaN(ccVal) && ccVal != ''){
            //split the numbers to get an array and check the length
            let numbers = ccVal.split('');
            //if the length is not correct, then let the user know
            if ( numbers.length < 13 || numbers.length > 16) {
                $('#cc-num').css('border-color', 'red');
                $('#cc-num').after(`<p class="ccVal">Credit Card must have at least 13 numbers and no more than 16 numbers.</p>`);
                $('button').prop('disabled', true).css('cursor', 'not-allowed');
            }
        //if the input is not a number, then let the user know
        } else if (ccVal === '') {
            $('#cc-num').css('border-color', 'red');
            $('#cc-num').after(`<p class="ccVal">Please enter a credit card number.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        } else {
            $('#cc-num').css('border-color', 'red');
            $('#cc-num').after(`<p class="ccVal">Please enter only numbers.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    }
    //call the validate function
    $('#cc-num').keyup(validateCC).focusout(validateCC);


 //zipcode - must be a number - must be 5 numbers long
 const validateZip = () => {
    //remove any previous error messages
    $('.zipVal').remove();
    //reset the field back to normal
    $('#zip').css('border-color', '#5e97b0');
    //make the button accessible
    $('button').prop('disabled', false).css('cursor', 'default');
    //get the zip code value
    let zipVal = $('#zip').val();
    //if the input is only numbers then check the length
    if (!isNaN(zipVal) && zipVal != ''){
        //split the numbers to get an array and check the length
        let numbers = zipVal.split('');
        //if the length is not correct, then let the user know
        if ( numbers.length != 5) {
            $('#zip').css('border-color', 'red');
            $('#zip').after(`<p class="zipVal">Zip Code must be 5 numbers long.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    //if the input is not a number, then let the user know
    } else if (zipVal === ''){
        $('#zip').css('border-color', 'red');
        $('#zip').after(`<p class="zipVal">Please enter a zip code.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    } else {
        $('#zip').css('border-color', 'red');
        $('#zip').after(`<p class="zipVal">Please enter only numbers.</p>`);
        $('button').prop('disabled', true).css('cursor', 'not-allowed');
    }
}
//call the validate function
$('#zip').keyup(validateZip).focusout(validateZip);

    //cvv - must be a number - must be 3 numbers long
    const validateCVV = () => {
        //remove any previous error messages
        $('.cvvVal').remove();
        //reset the field back to normal
        $('#cvv').css('border-color', '#5e97b0');
        //make the button accessible
        $('button').prop('disabled', false).css('cursor', 'default');
        //get the zip code value
        let cvvVal = $('#cvv').val();
        //if the input is only numbers then check the length
        if (!isNaN(cvvVal) && cvvVal != ''){
            //split the numbers to get an array and check the length
            let numbers = cvvVal.split('');
            //if the length is not correct, then let the user know
            if ( numbers.length != 3) {
                $('#cvv').css('border-color', 'red');
                $('#cvv').after(`<p class="cvvVal">CVV must be 3 numbers long.</p>`);
                $('button').prop('disabled', true).css('cursor', 'not-allowed');
            }
        //if the input is not a number, then let the user know
        } else if (cvvVal === ''){
            $('#cvv').css('border-color', 'red');
            $('#cvv').after(`<p class="cvvVal">Please enter a CVV.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        } else {
            $('#cvv').css('border-color', 'red');
            $('#cvv').after(`<p class="cvvVal">Please enter only numbers.</p>`);
            $('button').prop('disabled', true).css('cursor', 'not-allowed');
        }
    }
    //call the validate function
    $('#cvv').keyup(validateCVV).focusout(validateCVV);


// The user should still have access to all form fields and payment information if JS isn't working for whatever reason. For example, when the JS is removed from the project:
// The “Other” text field under the "Job Role" section should be visible
// All information for Bitcoin, PayPal or Credit Card payments should be visible.
 $('button').click((e) => {

    let selected = $('#payment option:selected').text();
    if (selected === "Credit Card" ) {
        console.log('Credit Card selected')
        validateCC();
        validateZip();
        validateCVV();
    }

    // validateName();
    // validateEmail();
    validateEvents();
});


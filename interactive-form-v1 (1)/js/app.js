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

const $shirtOption = $("design");
$($shirtOption).change(function(){
if ($shirtOption.val() === "js puns"){
    $shirtColor.show();
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
} 
else if ($shirtOption.val()==="heart js"){
    $shirtColor.show();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
}
});


// Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.



// Display payment sections based on the payment option chosen in the select menu.
// The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
// When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
// When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.




// If any of the following validation errors exist, prevent the user from submitting the form:
// Name field can't be blank.
// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
// User must select at least one checkbox under the "Register for Activities" section of the form.
// If the selected payment option is "Credit Card," make sure the user has supplied a Credit Card number, a Zip Code, and a 3 number CVV value before the form can be submitted.
// Credit Card field should only accept a number between 13 and 16 digits.
// The Zip Code field should accept a 5-digit number.
// The CVV should only accept a number that is exactly 3 digits long.














// Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or even better for the user would be if a red text message appeared near the field.
// The following fields should have some obvious form of an error indication:
// Name field
// Email field
// Register for Activities checkboxes (at least one must be selected)
// Credit Card number (Only if Credit Card payment method is selected)
// Zip Code (Only if Credit Card payment method is selected)
// CVV (Only if Credit Card payment method is selected)




// The user should still have access to all form fields and payment information if JS isn't working for whatever reason. For example, when the JS is removed from the project:
// The “Other” text field under the "Job Role" section should be visible
// All information for Bitcoin, PayPal or Credit Card payments should be visible.





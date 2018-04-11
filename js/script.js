(function () {

    // Adds an event listener that listens for when all the content on the page is loaded and then executes a function
    window.addEventListener('load', function () {

        // Allows us to access the object with the html tag 'form' in the javascript
        let form = document.querySelector('form')

        // Adds an event listener to the submit button, when the button is pressed executes a function
        form.addEventListener('submit', function (event) {

            // Prevents the submit button from attempting to submit the form
            event.preventDefault();

            // Creates an array of all objects in the html with the attribute 'input'
            let allfields = document.querySelectorAll('input')
            // Creates an array of all objects in the html with the tag 'small' and the class '.warning'
            let allwarnings = document.querySelectorAll('small.warning')

            // iterates through the array created above for inputs
            for (let i = 0; i < allfields.length; i++) {

                // if the type attribute of the input is set to 'text' or 'email' then execute the code
                if (allfields[i].type == 'text' || allfields[i].type == 'email') {
                        // if the field of the input is empty, then use the warning array to find the warning with the same index and show the warning
                        // if it it not empty, then the warning is hidden
                        (allfields[i].value == "") ? allwarnings[i].style.display = "block" : allwarnings[i].style.display = "none";
                }
            }
        })
    })

})() // This is an iife which means the function is executed as soon as the page loads
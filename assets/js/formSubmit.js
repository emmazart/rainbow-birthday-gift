var submitButton = document.querySelector(".btn-submit"); // select submit button


var submitHandler = function(event) {
    event.preventDefault();

    console.log('submitted')
};

submitButton.addEventListener('click', submitHandler);
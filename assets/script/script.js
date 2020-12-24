function formSubmit(options) {
    var formElements = document.querySelectorAll(options.formSelector);

    Array.from(formElements).forEach(function(formElement) {
        var inputElement = formElement.querySelector(options.inputSelector);
        var submitBtn = formElement.querySelector(options.submitBtnSelector);
        
        inputElement.oninput = function() {
            if (inputElement.value !== "") {
                submitBtn.classList.add(options.activeBtnClass);
            } else {
                submitBtn.classList.remove(options.activeBtnClass);
            }

            if (!submitBtn.classList.contains(options.activeBtnClass)) {
                submitBtn.disabled = true;
            } else {
                submitBtn.disabled = false;
            }
        }

        formElement.onsubmit = function(e) {
            e.preventDefault();
            alert("This is just a static web. Thank you for testing <3");
                
        }
    });
}
(function signupFormHandler () {

    const signupForm = document.querySelector('.signup-form');
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formGroups =signupForm.querySelectorAll('.signup-form-group');

        for (formGroup of formGroups) {
            const formTextInput = formGroup.querySelector('.signup-form-text_input')
            const formErrorIcon = formGroup.querySelector('.signup-form-error-icon');
            const formValidationMessage = formGroup.querySelector('.signup-form-validation_message');
            
            if(formTextInput.id === 'first_name' && formTextInput.value === '') {
                addDisplayError(formTextInput,formValidationMessage, formErrorIcon, 'First Name cannot be empty')
            }

            if(formTextInput.id === 'last_name' && formTextInput.value === '') {
                addDisplayError(formTextInput, formValidationMessage, formErrorIcon, 'Last Name cannot be empty')
            }

            if(formTextInput.id === 'email' &&  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formTextInput.value)) {
                addDisplayError(formTextInput, formValidationMessage, formErrorIcon, 'Looks like this is not an email')
            }

            if(formTextInput.id === 'password' && formTextInput.value === '') {
                addDisplayError(formTextInput, formValidationMessage, formErrorIcon, 'Password cannot be empty')
            }

        }

    })

    function addDisplayError(formTextInput,formValidationMessage,formErrorIcon, message) {
        formTextInput.style.borderColor = 'hsl(0, 100%, 74%)';
        formValidationMessage.innerText = message;
        formErrorIcon.style.display = 'block';
        formValidationMessage.style.display = 'block';
    }


})() 

const btnFreeTrial = document.querySelector('#btn-free-trial');

btnFreeTrial.addEventListener("click", () => {

    const inputs = document.querySelectorAll('#formulary input');

    inputs.forEach(input => {

        const inputArea = input.parentElement;

        const email = document.querySelector('#email-address');

        if (input.value == "")  {

            inputArea.classList.add('error_input');

        } else if(validateEmail(email.value) === false) {

            email.parentElement.classList.add('error_input');

        } else {

            inputArea.classList.remove('error_input');

        }

    });

});


function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}
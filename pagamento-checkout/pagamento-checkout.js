$(document).ready(function() {
    const nameInput = $("#nameInput");
    const submitBtn = $("#submitBtn");
    const confirmation = $("#confirmation");
    const qrCode = $("#qrCode");
    const paymentInfo = $("#paymentInfo");
    const validationMessage = $("#validationMessage");

    // Function to perform form submission
    function submitForm() {
        const name = nameInput.val();
        if (name.trim().length < 5) {
            validationMessage.text("⚠️ Por favor, digite seu nome completo.");
            validationMessage.addClass("text-danger");
        } else {
            validationMessage.text(""); // Clear the validation message

            // Display a message that QR code is being generated
            validationMessage.text("⌛️ Seu QR code está sendo gerado...");
            validationMessage.removeClass("text-danger");

            // Simulate a delay for generating the QR code
            setTimeout(function() {
                confirmation.show();
                paymentInfo.show();
                validationMessage.text(`🎯 Parabéns, ${name}! Vamos juntos à fluência.`);
                // Clear the QR code generation message after 1.5 seconds
                setTimeout(function() {
                    validationMessage.text("");
                }, 2000);
            }, 2500); // Simulate a 2-second delay for payment confirmation
        }
    }

    // Listen for Enter key press on the name input field
    nameInput.keypress(function(event) {
        if (event.which === 13) {
            // 13 is the key code for Enter
            submitForm();
        }
    });

    // Listen for form submission when the Submit button is clicked
    submitBtn.click(function() {
        submitForm();
    });
});

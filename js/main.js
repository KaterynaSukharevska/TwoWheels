'use strict';

jQuery.noConflict();

(function( $ ){
    /**
     * Main elements
     */
    var courseForm  = $("#course-form"),
        contactForm = $("#contact-form"),
        formModal   = $("#myModal"),
        infoModal   = $(".info-modal");

    /**
     * Hide info modal
     */
    $('.info-modal button').on('click', function() {
        infoModal.fadeOut(200).hide();
    });

    /**
     * Course form validation
     */
    courseForm.validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                number: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Введите свое имя",
                minlength: "Минимум 2 буквы"
            },
            phone: {
                required: "Введите номер телефона",
                number: "Только цифры",
                minlength: "Минимум 5 цифр"
            }
        },
        submitHandler: function(form) {
            if ($(form).valid()){
                setTimeout(function(){
                    formModal.modal('hide');
                    $("#myModal input").val('');
                    setTimeout(function(){
                        infoModal.show();
                    }, 500);
                }, 200);
            }
            return false; // prevent normal form posting
        }
    });

    /**
     * Contact form validation
     */
    contactForm.validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
                minlength: 5
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Введите свое имя",
                minlength: "Минимум 2 буквы"
            },
            email: {
                required: "Введите свой email",
                email: "Неверно введен адрес",
                minlength: "Минимум 5 знаков"
            },
            message: {
                required: "Введите сообщение",
                minlength: "Минимум 5 знаков"
            }
        },
        submitHandler: function(form) {
            if ($(form).valid()){
                form.submit();
            }
            return false; // prevent normal form posting
        }
    });

})(jQuery);
$(document).ready(function () {
    // Toggle dropdown options
    $('.select-box').on('click', function () {
        let $options = $(this).next('.select-options');
        $('.select-options').not($options).removeClass('show'); // Close others
        $options.toggleClass('show');
    });

    // Handle option selection
    $('.select-options li').on('click', function () {
        let selectedValue = $(this).data('value');
        let selectedText = $(this).text();
        let $selectBox = $(this).closest('.custom-select').find('.select-box');

        // Set the text
        $selectBox.text(selectedText).removeClass('placeholder');

        // Update hidden input value
        let $input = $(this).closest('.custom-select').find('input[type="hidden"]');
        $input.val(selectedValue);

        // Close dropdown
        $(this).parent('.select-options').removeClass('show');
    });

    // Close dropdown if clicked outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.custom-select').length) {
            $('.select-options').removeClass('show');
        }
    });

    // Form Submission
    $('#customForm').on('submit', function (e) {
        e.preventDefault();
        let formData = $(this).serialize();
        alert("Form Data:\n" + formData);
    });
});

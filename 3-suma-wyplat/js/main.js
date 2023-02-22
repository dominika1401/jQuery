$(document).ready(function () {
    $('#count-sum').on('click', function () {
        let sum = 0;
        $('.salary').each(function () {
            sum += + $(this).text();
        });

        $('#sum').text(sum);
    });
});
$(document).ready(function () {
    const heading = $('#kwadrat');
    $('#przycisk').click(function () {
        heading.animate({ marginRight: '100px', height: '100px', width: '100px' }, 3000);
        heading.animate({backgroundColor: 'blue'}, 5000, function() {
                $(this).html("<h2>Animacja zakończona</h2>");
            });
            });
        
        });
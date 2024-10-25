$(document).ready(function() {
    const $balloon = $('#balloon');
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    $balloon.on('click', function() {
        size += 10;
        if (size > 420) {
            size = 200;
        }
        $balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex]
        });
        colorIndex = (colorIndex + 1) % colors.length;
    });

    $balloon.on('mouseleave', function() {
        size = Math.max(size - 5, 200);
        $balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex]
        });
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    });
});

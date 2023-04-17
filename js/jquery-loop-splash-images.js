$(document).ready(function(){

    var imagesArray = ['https://futureofconstruction.net/img/future-of-construction-splash-image-01.jpg',
        'https://futureofconstruction.net/img/future-of-construction-splash-image-02.jpg',
        'https://futureofconstruction.net/img/future-of-construction-splash-image-03.jpg'
    ];

    var ImageCounter = 0;

    $(".ForwardButton").click(function() {
        ImageCounter++;
            if (ImageCounter > imagesArray.length - 1) {
            ImageCounter = 0;
        }

        $('.ImageDisplay').css({
            'background-image': 'url(' + imagesArray[ImageCounter] + ')'
        });
    
    });

});
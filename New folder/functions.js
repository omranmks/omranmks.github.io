
$(document).ready(function () {
    if ($(document).height() / $(document).width() >= 1.75)
        $("html").css('font-size', '2vh');

    var pageIndex = 0;
    var layoutNum = 1;
    var letterIndex = 28;
    var check = false;
    var audios = [];
    audios['sound-110'] = new Audio('sounds/sound-110.mp3');
    var audio = new Audio();
    var allData;
    $.getJSON("data.json",function (data) { allData = data;  });
    $("#PreviousContent").hide();
 
    $("input").change(function () {
        chageInput();
    });
    function chageInput() {
        check = !check;
        if (check) {
            $(".mainLayout").append(indexPage);
            $(".indexPage").animate({ opacity: 1 }, 400);
        }
        else {
            $(".indexPage").animate({ opacity: 0 }, 400, 'swing', function () {
                $(".indexPage").remove();
            });
        }
    }
    $(document).on('click', ".overlay", function (e) {
        if ($(e.target).attr('value') !== undefined) {
            pageIndex = parseInt($(e.target).attr('value'));
            $('input').prop('checked', false);
            $('input').trigger('change');
            ChangeLayout();
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            audio = audios[$(e.target).attr('data')];
            audio.play();
        }
    });


    function ChangeLayout() {
        if (pageIndex == 0) {
            $("#PreviousContent").hide();
        }
        else if (pageIndex == 34) {
            $("#NextContent").hide();
        }
        else {
            $("#PreviousContent").show();
            $("#NextContent").show();
        }

        if (pageIndex == 0) {
            if (layoutNum != 1) {
                $(".table").remove();
                $(".numBox").remove();
                $(".allShapes").remove();
                $(".header").after(firstLayout);
                layoutNum = 1;
            }
        }
        else if (pageIndex <= 28) {
            if (layoutNum != 2) {
                $(".table").remove();
                $(".numBox").remove();
                $(".allShapes").remove();
                $(".header").after(secondLayout);
                layoutNum = 2;
            }
        } else if (pageIndex <= 33) {
            if (layoutNum != 3) {
                $(".table").remove();
                $(".numBox").remove();
                $(".allShapes").remove();
                $(".header").after(thirdLayout);
                layoutNum = 3;
            }
        } else if (pageIndex <= 34) {
            if (layoutNum != 4) {
                $(".table").remove();
                $(".numBox").remove();
                $(".allShapes").remove();
                $(".header").after(forthLayout);
                layoutNum = 4;
            }
        }
        ChangeData();
    }
    function ChangeData() {
        if (pageIndex == 4 || pageIndex == 23) {
            $("#letter").css('margin-bottom', '1rem');
        }
        else {
            $("#letter").css('margin-bottom', '0.35rem');
        }
        if (pageIndex <= 28) {
            $("main").css('box-shadow', allData[pageIndex].borderColor);
            $('.numBox .overlay').attr('data', 'sound-' + (pageIndex + 1) + '10');

            audios['sound-' + (pageIndex + 1) + '10'] = new Audio('sounds/sound-' + (pageIndex + 1) + '10.mp3');

            $("#headerPageNumberBackground").css('background-color', allData[pageIndex].pageNumberColor);
            $("#headerPageNumber").text(allData[pageIndex].pageNumber);
            $("#letter").text(allData[pageIndex].pageLetter);
            for (var i = 1; i <= 3; i++) {
                $(".shapes:nth-child(" + i + ") .example .overlay:nth-child(1)").attr('data', 'sound-' + (pageIndex + 1) + i + '2');
                $(".shapes:nth-child(" + i + ") .example .letterForm .overlay").attr('data', 'sound-' + (pageIndex + 1) + i + '1');

                audios['sound-' + (pageIndex + 1) + i + '1'] = new Audio('sounds/sound-' + (pageIndex + 1) + i + '1.mp3');
                audios['sound-' + (pageIndex + 1) + i + '2'] = new Audio('sounds/sound-' + (pageIndex + 1) + i + '2.mp3');

                $("#pic-" + i).attr('src', 'images/pic-' + (pageIndex + 1) + '-' + i + '.jpg');
                $("#enWord-" + i).text(allData[pageIndex]['en-' + i]);
                $("#shape-" + i).text(allData[pageIndex]['shape-' + i]);
                for (var j = 1; j <= 3; j++) {
                    $("#" + i + "-p" + j).text(allData[pageIndex]['ar-' + i][0]['p-' + j]);
                }
            }
            $("#footerPageNumber").text('- ' + allData[pageIndex].pageNumber + ' -');
        }
        else if (pageIndex <= 33) {
            $("main").css('box-shadow', "#afafaf 0px 0px 0px 1rem inset");
            for (var i = 0; i < 5; i++) {
                $("#" + (i + 1) + "-NumColor").css('background-color', allData[pageIndex - letterIndex + i].pageNumberColor);
                $("#" + (i + 1) + "-NumColor").text(allData[pageIndex - letterIndex + i].pageNumber);
                for (var j = 1; j <= 3; j++) {
                    $('.eachShape:nth-child(' + (i + 1) + ') .eachLetter:nth-child(' + j + ') .overlay').attr('data', 'sound-' + (pageIndex - letterIndex + i + 1) + (4 - j) + '1');
                    $("#" + (i + 1) + "-" + j).text(allData[pageIndex - letterIndex + i]['shape-' + j]);
                }
            }
            $("#footerPageNumber").text('- ' + (pageIndex + 1) + ' -');

        }
        else if (pageIndex == 34) {
            $("main").css('box-shadow', "#afafaf 0px 0px 0px 1rem inset");
            for (var i = 0; i < 3; i++) {
                $("#" + (i + 1) + "-NumColor").css('background-color', allData[pageIndex - letterIndex + i].pageNumberColor);
                $("#" + (i + 1) + "-NumColor").text(allData[pageIndex - letterIndex + i].pageNumber);
                for (var j = 1; j <= 3; j++) {
                    $('.eachShape:nth-child(' + (i + 1) + ') .eachLetter:nth-child(' + j + ') .overlay').attr('data', 'sound-' + (pageIndex - letterIndex + i + 1) + (4 - j) + '1');
                    $("#" + (i + 1) + "-" + j).text(allData[pageIndex - letterIndex + i]['shape-' + j]);
                }
            }
            $("#footerPageNumber").text('- ' + (pageIndex + 1) + ' -');

        }
    }
    $("#NextContent").on("click", function () {
        if (pageIndex != 34) {
            pageIndex++;
            if (pageIndex > 29)
                letterIndex -= 4;
        }
        ChangeLayout();
    });
    $("#PreviousContent").on("click", function () {
        if (pageIndex != 0) {
            pageIndex--;
            if (pageIndex >= 29)
                letterIndex += 4;
        }
        ChangeLayout();
    });
});
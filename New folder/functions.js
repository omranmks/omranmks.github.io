
$(document).ready(function () {
    if ($(document).height() / $(document).width() >= 1.75)
        $("html").css('font-size', '2vh');

    var pageIndex = 0;
    var layoutNum = 1;
    var letterIndex = 28;
    var check = false;
    $("#PreviousContent").hide();

    

    $("input").change(function () {
        chageInput();
    });
    function chageInput(){
        check = !check;
        if(check)
        {
            $(".mainLayout").append(indexPage);
            $(".indexPage").animate({opacity: 1},400);
        }
        else{
            $(".indexPage").animate({opacity: 0},400,'swing',function() {
                $(".indexPage").remove();
            }); 
        }
    }
    $(document).on('change', function () { 
        $(".indexPage").on("click", ".overlay", function(e) {
            pageIndex = parseInt($(e.target).attr('value'));
            $('input').prop('checked', false);
            $('input').trigger('change');
            ChangeLayout();
        });  
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
        $.getJSON("data.json",
            function (data) {
                if(pageIndex == 4 || pageIndex == 23){
                    $("#letter").css('margin-bottom','1rem');
                }
                else{
                    $("#letter").css('margin-bottom','0.35rem');
                }
                if (pageIndex <= 28) {
                    $("main").css('box-shadow', data[pageIndex].borderColor);
                    $("#headerPageNumberBackground").css('background-color', data[pageIndex].pageNumberColor);
                    $("#headerPageNumber").text(data[pageIndex].pageNumber);
                    $("#letter").text(data[pageIndex].pageLetter);
                    for (var i = 1; i <= 3; i++) {
                        $("#pic-" + i).attr('src', 'images/pic-' + (pageIndex + 1) + '-' + i + '.jpg');
                        $("#enWord-" + i).text(data[pageIndex]['en-' + i]);
                        $("#shape-" + i).text(data[pageIndex]['shape-' + i]);
                        for (var j = 1; j <= 3; j++) {
                            $("#" + i + "-p" + j).text(data[pageIndex]['ar-' + i][0]['p-' + j]);
                        }
                    }
                    $("#footerPageNumber").text('- ' + data[pageIndex].pageNumber + ' -');
                }
                else if (pageIndex <= 33) {
                    $("main").css('box-shadow', "#afafaf 0px 0px 0px 1rem inset");
                    for (var i = 0; i < 5; i++) {
                        $("#" + (i + 1) + "-NumColor").css('background-color', data[pageIndex - letterIndex + i].pageNumberColor);
                        $("#" + (i + 1) + "-NumColor").text(data[pageIndex - letterIndex + i].pageNumber);
                        for (var j = 1; j <= 3; j++) {
                            $("#" + (i + 1) + "-" + j).text(data[pageIndex - letterIndex + i]['shape-' + j]);
                        }
                    }
                    $("#footerPageNumber").text('- ' + (pageIndex + 1) + ' -');

                }
                else if (pageIndex == 34) {
                    $("main").css('box-shadow', "#afafaf 0px 0px 0px 1rem inset");
                    for (var i = 0; i < 3; i++) {
                        $("#" + (i + 1) + "-NumColor").css('background-color', data[pageIndex - letterIndex + i].pageNumberColor);
                        $("#" + (i + 1) + "-NumColor").text(data[pageIndex - letterIndex + i].pageNumber);
                        for (var j = 1; j <= 3; j++) {
                            $("#" + (i + 1) + "-" + j).text(data[pageIndex - letterIndex + i]['shape-' + j]);
                        }
                    }
                    $("#footerPageNumber").text('- ' + (pageIndex + 1) + ' -');

                }
            }
        );
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
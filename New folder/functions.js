$(document).ready(function () {
    var pageIndex = 0;
    var layoutNum = 0;
    alert($(document).height());
    alert($(document).width());

    if($(document).height() / $(document).width() >= 1)
        $("html").css('font-size','2vh');

    $("#NextContent").on("click", function () {
        if (pageIndex != 28)
            pageIndex++;
        $.getJSON("data.json", function (data) {
            if (data[pageIndex].pageNumber == 5 || data[pageIndex].pageNumber == 24) {
                $("#letter").css("margin-bottom", "20px");
            } else {
                $("#letter").css("margin-bottom", "0px");
                $("#letter").css("margin-top", "0px");
            }
            $("main").css("box-shadow", data[pageIndex].borderColor);
            $("#headerPageNumberBackground").css("background-color", data[pageIndex].pageNumberColor);
            $("#headerPageNumber").text(data[pageIndex].pageNumber);
            $("#letter").text(data[pageIndex].pageLetter);

            $("#1stShape").text(data[pageIndex].firstShape);
            $("#firstPic").attr("src", "images/pic-" + data[pageIndex].pageNumber + "-1.jpg");
            $("#1stPartOfFirstWord").text(data[pageIndex].firstExampleAr[0].first);
            $("#2ndPartOfFirstWord").text(data[pageIndex].firstExampleAr[0].second);
            $("#3rdPartOfFirstWord").text(data[pageIndex].firstExampleAr[0].third);
            $("#1stExampleEn").text(data[pageIndex].firstExampleEn);

            $("#2ndShape").text(data[pageIndex].secondShape);
            $("#secondPic").attr("src", "images/pic-" + data[pageIndex].pageNumber + "-2.jpg");
            $("#1stPartOfSecondWord").text(data[pageIndex].secondExampleAr[0].first);
            $("#2ndPartOfSecondWord").text(data[pageIndex].secondExampleAr[0].second);
            $("#3rdPartOfSecondWord").text(data[pageIndex].secondExampleAr[0].third);
            $("#2ndExampleEn").text(data[pageIndex].secondExampleEn);

            $("#3rdShape").text(data[pageIndex].thirdShape);
            $("#thirdPic").attr("src", "images/pic-" + data[pageIndex].pageNumber + "-3.jpg");
            $("#1stPartOfThirdWord").text(data[pageIndex].thirdExampleAr[0].first);
            $("#2ndPartOfThirdWord").text(data[pageIndex].thirdExampleAr[0].second);
            $("#3rdPartOfThirdWord").text(data[pageIndex].thirdExampleAr[0].third);
            $("#3rdExampleEn").text(data[pageIndex].thirdExampleEn);

            $("#footerPageNumber").text(data[pageIndex].pageNumber);
        });
    });
    $("#PreviousContent").on("click", function () {
        console.log(pageIndex);
        if (pageIndex > 0) {
            pageIndex--;
            $.getJSON("data.json", function (data) {
                if (data[pageIndex].pageNumber == 1) {
                    $("#letter").css("margin-top", "15px");
                }

                $("main").css("box-shadow", data[pageIndex].borderColor);
                $("#headerPageNumberBackground").css("background-color", data[pageIndex].pageNumberColor);
                $("#headerPageNumber").text(data[pageIndex].pageNumber);
                $("#letter").text(data[pageIndex].pageLetter);

                $("#1stShape").text(data[pageIndex].firstShape);
                $("#firstPic").attr("src", "images/pic-" + data[pageIndex].pageNumber + "-1.jpg");
                $("#1stPartOfFirstWord").text(data[pageIndex].firstExampleAr[0].first);
                $("#2ndPartOfFirstWord").text(data[pageIndex].firstExampleAr[0].second);
                $("#3rdPartOfFirstWord").text(data[pageIndex].firstExampleAr[0].third);
                $("#1stExampleEn").text(data[pageIndex].firstExampleEn);

                $("#2ndShape").text(data[pageIndex].secondShape);
                $("#secondPic").attr("src", "images/pic-" + data[pageIndex].pageNumber + "-2.jpg");
                $("#1stPartOfSecondWord").text(data[pageIndex].secondExampleAr[0].first);
                $("#2ndPartOfSecondWord").text(data[pageIndex].secondExampleAr[0].second);
                $("#3rdPartOfSecondWord").text(data[pageIndex].secondExampleAr[0].third);
                $("#2ndExampleEn").text(data[pageIndex].secondExampleEn);

                $("#3rdShape").text(data[pageIndex].thirdShape);
                $("#thirdPic").attr("src", "images/pic-" + data[pageIndex].pageNumber + "-3.jpg");
                $("#1stPartOfThirdWord").text(data[pageIndex].thirdExampleAr[0].first);
                $("#2ndPartOfThirdWord").text(data[pageIndex].thirdExampleAr[0].second);
                $("#3rdPartOfThirdWord").text(data[pageIndex].thirdExampleAr[0].third);
                $("#3rdExampleEn").text(data[pageIndex].thirdExampleEn);

                $("#footerPageNumber").text(data[pageIndex].pageNumber);
            });
        }
    });
    $("#NextContent").on("click", function () {
        if (pageIndex >= 0 && layoutNum != 1) {
            $(".onlyShape").remove();
            $(".allShapes").append(secondLayout);
            layoutNum = 1;
        }
    });
    $("#PreviousContent").on("click", function () {
        if (pageIndex == 0 && layoutNum != 0) {
            $(".shapes").remove();
            $(".allShapes").append(firstLayout);
            layoutNum = 0;
        }
    });   
});
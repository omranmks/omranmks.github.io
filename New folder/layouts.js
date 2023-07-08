const firstLayout =
    `<div class="numBox">
    <div class="overlay"></div>
    <div id="headerPageNumberBackground" class="pageNumber" style="background-color: #FF0000;">
        <h2 id="headerPageNumber">1</h2>
    </div>
    <div class="pageLetter">
        <h2 id="letter" style="margin-bottom: 0px; margin-top: 15px;">أَلِـف</h2>
    </div>
</div>
<div class="allShapes">
    <div class="onlyShape">
        <p class="arExplain">
            حرف <span class="redColor">الألف</span> لا یقبل الحركة ویأتي دوما
            <span class="redColor">ساكن</span> وما قبلھ <span class="redColor">مفتوح</span>.
        </p>
        <div class="onlyExample">
            <h3>ـَـ<span class="redColor">ا</span></h3>
        </div>
        <p class="enExplain">

            <span class="redColor" style="font-style: italic;">Al-Alif</span> is always <span
                class="redColor" style="font-style: italic;">sakin</span> and it is
            always preceded by <span class="redColor" style="font-style: italic;">Al-Fathah</span>.

        </p>
    </div>
</div>`;

const secondLayout =
    `<div class="numBox">
    <div class="overlay"></div>
    <div id="headerPageNumberBackground" class="pageNumber" style="background-color: #FF0000;">
        <h2 id="headerPageNumber">1</h2>
    </div>
    <div class="pageLetter">
        <h2 id="letter" style="margin-bottom: 0px; margin-top: 15px;">أَلِـف</h2>
    </div>
</div>
<div class="allShapes">
    <div class="shapes">
        <div class="letterPicture">
            <div class="picture">
                <img id="pic-1" src="images/pic-2-1.jpg" alt="">
            </div>
            <div class="englishWord">
                <h3 id="enWord-1">im here</h3>
            </div>
        </div>
        <div class="example">
            <div class="overlay"></div>
            <div class="arabicWord">
                <h3>
                    <span id="1-p1"></span><span id="1-p2"
                        class="redColor"></span><span id="1-p3"></span>
                </h3>
                <span class="line"></span>
            </div>
            <div class="letterForm">
                <div class="overlay"></div>
                <h3 id="shape-1" class="redColor">بـا</h3>
                <span class="line"></span>
            </div>
        </div>
    </div>
    <div class="shapes">
        <div class="letterPicture">
            <div class="picture">
                <img id="pic-2" src="ثعبان.jpg" alt="">
            </div>
            <div class="englishWord">
                <h3 id="enWord-2">im here</h3>
            </div>
        </div>
        <div class="example">
            <div class="overlay"></div>
            <div class="arabicWord">
                <h3>
                    <span id="2-p1"></span><span id="2-p2"
                        class="greenColor"></span><span id="2-p3"></span>
                </h3>
                <span class="line"></span>
            </div>
            <div class="letterForm">
                <div class="overlay"></div>
                <h3 id="shape-2" class="greenColor">بـا</h3>
                <span class="line"></span>
            </div>
        </div>
    </div>
    <div class="shapes">
        <div class="letterPicture">
            <div class="picture">
                <img id="pic-3" src="ثعبان.jpg" alt="">
            </div>
            <div class="englishWord">
                <h3 id="enWord-3">im here</h3>
            </div>
        </div>
        <div class="example">
            <div class="overlay"></div>
            <div class="arabicWord">
                <h3>
                    <span id="3-p1"></span><span id="3-p2"
                        class="blueColor"></span><span id="3-p3"></span>
                </h3>
                <span class="line"></span>
            </div>
            <div class="letterForm">
                <div class="overlay"></div>
                <h3 id="shape-3" class="blueColor">بـا</h3>
                <span class="line"></span>
            </div>
        </div>
    </div>
</div>`;

const thirdLayout =
    `<div class="table">
    <div class="eachShape">
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="1-3" class="blueColor">بُـو</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="1-2" class="greenColor">بِـي</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="1-NumColor" class="circleNumber" style="background-color: #FF0000;">2</div>
            <div id="1-1" class="redColor">بَـا</div>
        </div>
    </div>
    <div class="eachShape">
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="2-3" class="blueColor">تُـو</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="2-2" class="greenColor">تِـي</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="2-NumColor" class="circleNumber" style="background-color: #FF0000;">3</div>
            <div id="2-1" class="redColor">تَـا</div>
        </div>
    </div>
    <div class="eachShape">
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="3-3" class="blueColor">ثُـو</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="3-2" class="greenColor">ثِـي</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="3-NumColor" class="circleNumber" style="background-color: #FF0000;">4</div>
            <div id="3-1" class="redColor">ثَـا</div>
        </div>
    </div>
    <div class="eachShape">
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="4-3" class="blueColor">جُـو</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="4-2" class="greenColor">جِـي</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="4-NumColor" class="circleNumber" style="background-color: #FF0000;">5</div>
            <div id="4-1" class="redColor">جَـا</div>
        </div>
    </div>
    <div class="eachShape">
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="5-3" class="blueColor">حُـو</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="5-2" class="greenColor">حِـي</div>
        </div>
        <div class="eachLetter">
            <div class="overlay"></div>
            <div id="5-NumColor" class="circleNumber" style="background-color: #FF0000;">6</div>
            <div id="5-1" class="redColor">حَـا</div>
        </div>
    </div>
</div>`;

const forthLayout = 
`<div class="table">
<div class="eachShape">
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="1-3" class="blueColor">بُـو</div>
    </div>
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="1-2" class="greenColor">بِـي</div>
    </div>
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="1-NumColor" class="circleNumber" style="background-color: #FF0000;">2</div>
        <div id="1-1" class="redColor">بَـا</div>
    </div>
</div>
<div class="eachShape">
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="2-3" class="blueColor">تُـو</div>
    </div>
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="2-2" class="greenColor">تِـي</div>
    </div>
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="2-NumColor" class="circleNumber" style="background-color: #FF0000;">3</div>
        <div id="2-1" class="redColor">تَـا</div>
    </div>
</div>
<div class="eachShape">
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="3-3" class="blueColor">ثُـو</div>
    </div>
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="3-2" class="greenColor">ثِـي</div>
    </div>
    <div class="eachLetter">
        <div class="overlay"></div>
        <div id="3-NumColor" class="circleNumber" style="background-color: #FF0000;">4</div>
        <div id="3-1" class="redColor">ثَـا</div>
    </div>
</div>                    
</div>`;
const indexPage =
`<div class="indexPage">
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #bdd7ee;">
        <div class="overlay" value='2'></div>
        <h3>تَـا</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #bdd7ee;">
        <div class="overlay" value='1'></div>
        <h3>بَـا</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #ff0000;">
        <div class="overlay" value='0'></div>
        <h3>ألف</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #ffe699;">
        <div class="overlay" value='5'></div>
        <h3>حَـا</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #ffe699;">
        <div class="overlay" value='4'></div>
        <h3 style="margin-bottom: 1.2rem;">جـِيـم</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #bdd7ee;">
        <div class="overlay" value='3'></div>
        <h3>ثَـا</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #f8ccad;">
        <div class="overlay" value='8'></div>
        <h3>ذَال</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #f8ccad;">
        <div class="overlay" value='7'></div>
        <h3>دَال</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #ffe699;">
        <div class="overlay" value='6'></div>
        <h3>خَـا</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #d6dce5;">
        <div class="overlay" value='11'></div>
        <h3>سِـيـن</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #bf910a;">
        <div class="overlay" value='10'></div>
        <h3>زَاي</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #bf910a;">
        <div class="overlay" value='9'></div>
        <h3>رَا</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #2f5598;">
        <div class="overlay" value='14'></div>
        <h3>ضَـاد</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #2f5598;">
        <div class="overlay" value='13'></div>
        <h3>صَـاد</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #d6dce5;">
        <div class="overlay" value='12'></div>
        <h3>شِـيـن</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #afabab;">
        <div class="overlay" value='17'></div>
        <h3>عَـيْـن</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #203863;">
        <div class="overlay" value='16'></div>
        <h3>ظَـا</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #203863;">
        <div class="overlay" value='15'></div>
        <h3>طَـا</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #f7ad7c;">
        <div class="overlay" value='20'></div>
        <h3>قَـاف</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #f7ad7c;">
        <div class="overlay" value='19'></div>
        <h3>فَـا</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #afabab;">
        <div class="overlay" value='18'></div>
        <h3>غَـيْـن</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #29a951;">
        <div class="overlay" value='23'></div>
        <h3 style="margin-bottom: 1.2rem;">مِـيـم</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #27ade4;">
        <div class="overlay" value='22'></div>
        <h3>لَام</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #673a8e;">
        <div class="overlay" value='21'></div>
        <h3>كَـاف</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #b6db9a;">
        <div class="overlay" value='26'></div>
        <h3>وَاو</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #fab613;">
        <div class="overlay" value='25'></div>
        <h3>هَـا</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #385725;">
        <div class="overlay" value='24'></div>
        <h3>نُـون</h3>
    </div>
</div>
<div class="rowLetters">
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #afafaf;">
        <div class="overlay" value='29'></div>
        <h3>أمثلة</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #cbc9e6;">
        <div class="overlay" value='28'></div>
        <h3>هَـمْـزَة</h3>
    </div>
    <div class="letterIndex" style="box-shadow: inset 0 0 0 0.3rem #ffec00;">
        <div class="overlay" value='27'></div>
        <h3>يَـا</h3>
    </div>
</div>
</div>`;
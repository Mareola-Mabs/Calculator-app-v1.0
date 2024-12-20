/*To Declare the Variables*/
/*The Number Keys*/
var zero 	= document.getElementById('zero');
var one 	= document.getElementById('one');
var two 	= document.getElementById('two');
var three	= document.getElementById('three');
var four 	= document.getElementById('four');
var five 	= document.getElementById('five');
var six 	= document.getElementById('six');
var seven 	= document.getElementById('seven');
var eight 	= document.getElementById('eight');
var nine 	= document.getElementById('nine');

/*The Operator Keys*/
var divide 	= document.getElementById('divide');
var equals 	= document.getElementById('equals');
var times 	= document.getElementById('times');
var minus 	= document.getElementById('minus');
var plus 	= document.getElementById('plus');
var decimal = document.getElementById('decimal');

/*The Control Keys*/
var on      = document.getElementById('on1');
var clear   = document.getElementById('clear1');

/*The Display Input*/
var display_screen = document.getElementById('display_screen');

/*The Display Messages*/
var error 	 = document.getElementById('error_screen');
var operator = document.getElementById('operator_screen');
var lengths  = document.getElementById('length_screen');


/*The Memory Variable*/
var equal1;
var len;
var def1;
var i = 1;
var j = 0;
var k;
var l = 0;




/*The Code Itself*/
function zero_zero() 
		{display_screen.value += "0";
		lengths.value = (display_screen.value.length);}


function one_one() 
		{display_screen.value += "1";
		lengths.value = (display_screen.value.length);}


function two_two() 
		{display_screen.value += "2";
		lengths.value = (display_screen.value.length);}
	


function three_three() 
		{display_screen.value += "3";
		lengths.value = (display_screen.value.length);}


function four_four() 
		{display_screen.value += "4";
		lengths.value = (display_screen.value.length);}
	


function five_five() 
		{display_screen.value += "5";
		lengths.value = (display_screen.value.length);}
	

function six_six() 
		{display_screen.value += "6";
		lengths.value = (display_screen.value.length);}
	

function seven_seven() 
		{display_screen.value += "7";
		lengths.value = (display_screen.value.length);}
	

function eight_eight() 
		{display_screen.value += "8";
		lengths.value = (display_screen.value.length);}
	

function nine_nine() 
		{display_screen.value += "9";
		lengths.value = (display_screen.value.length);}
	

function decimal_decimal() 
		{display_screen.value += ".";
		operator.value = ".";
		lengths.value = (display_screen.value.length);}
	
function divide_divide() 
		{display_screen.value += "/";
		lengths.value = (display_screen.value.length);
		operator.value = "/";
		lengths.value = (display_screen.value.length);}


function times_times() 
		{display_screen.value += "*";
		operator.value = "x";
		lengths.value = (display_screen.value.length);}
	

function minus_minus() 
		{display_screen.value += "-";
		operator.value = "-";
		lengths.value = (display_screen.value.length);}


function plus_plus() 
		{display_screen.value += "+";
		operator.value = "+";
		lengths.value = (display_screen.value.length);}
	

function clear_clear()
		 {display_screen.value = '';
		 operator.value = "clear";
		 lengths.value = (display_screen.value.length);}


equals.addEventListener('click',function equals_equals(){	try{
	equal1 = eval(display_screen.value);
		display_screen.value = equal1;
		error.value = display_screen.value;
		error.style.color = "#008000";
		lengths.value = (display_screen.value.length);
}
	catch(err){error.value = "Wrong Operation";
				error.style.color = "maroon";}
});


/*The Code for Colors of Mouse*/
function zero_color()
{zero.style.background="#078A4D";}

function zero_color1()
{zero.style.background="#9A9A9A";}

function zero_color2() 
{zero.style.background="#9A9A9A";}

function zero_color3() 
{zero.style.background="#ECEDEF";}


function decimal_color()
{decimal.style.background="#078A4D";}

function decimal_color1()
{decimal.style.background="#9A9A9A";}

function decimal_color2() 
{decimal.style.background="#9A9A9A";}

function decimal_color3() 
{decimal.style.background="#ECEDEF";}


function divide_color()
{divide.style.background="#078A4D";}

function divide_color1()
{divide.style.background="#9A9A9A";}

function divide_color2() 
{divide.style.background="#9A9A9A";}

function divide_color3() 
{divide.style.background="#ECEDEF";}


function equals_color()
{equals.style.background="#090000";}

function equals_color1()
{equals.style.background="maroon";}

function equals_color2() 
{equals.style.background="maroon";}

function equals_color3() 
{equals.style.background="#AA0406";}



function one_color()
{one.style.background="#078A4D";}

function one_color1()
{one.style.background="#9A9A9A";}

function one_color2() 
{one.style.background="#9A9A9A";}

function one_color3() 
{one.style.background="#ECEDEF";}


function two_color()
{two.style.background="#078A4D";}

function two_color1()
{two.style.background="#9A9A9A";}

function two_color2() 
{two.style.background="#9A9A9A";}

function two_color3() 
{two.style.background="#ECEDEF";}


function three_color()
{three.style.background="#078A4D";}

function three_color1()
{three.style.background="#9A9A9A";}

function three_color2() 
{three.style.background="#9A9A9A";}

function three_color3() 
{three.style.background="#ECEDEF";}


function times_color()
{times.style.background="#078A4D";}

function times_color1()
{times.style.background="#9A9A9A";}

function times_color2() 
{times.style.background="#9A9A9A";}

function times_color3() 
{times.style.background="#ECEDEF";}


function four_color()
{four.style.background="#078A4D";}

function four_color1()
{four.style.background="#9A9A9A";}

function four_color2() 
{four.style.background="#9A9A9A";}

function four_color3() 
{four.style.background="#ECEDEF";}


function five_color()
{five.style.background="#078A4D";}

function five_color1()
{five.style.background="#9A9A9A";}

function five_color2() 
{five.style.background="#9A9A9A";}

function five_color3() 
{five.style.background="#ECEDEF";}


function six_color()
{six.style.background="#078A4D";}

function six_color1()
{six.style.background="#9A9A9A";}

function six_color2() 
{six.style.background="#9A9A9A";}

function six_color3() 
{six.style.background="#ECEDEF";}


function minus_color()
{minus.style.background="#078A4D";}

function minus_color1()
{minus.style.background="#9A9A9A";}

function minus_color2() 
{minus.style.background="#9A9A9A";}

function minus_color3() 
{minus.style.background="#ECEDEF";}


function seven_color()
{seven.style.background="#078A4D";}

function seven_color1()
{seven.style.background="#9A9A9A";}

function seven_color2() 
{seven.style.background="#9A9A9A";}

function seven_color3() 
{seven.style.background="#ECEDEF";}


function eight_color()
{eight.style.background="#078A4D";}

function eight_color1()
{eight.style.background="#9A9A9A";}

function eight_color2() 
{eight.style.background="#9A9A9A";}

function eight_color3() 
{eight.style.background="#ECEDEF";}


function nine_color()
{nine.style.background="#078A4D";}

function nine_color1()
{nine.style.background="#9A9A9A";}

function nine_color2() 
{nine.style.background="#9A9A9A";}

function nine_color3() 
{nine.style.background="#ECEDEF";}


function plus_color()
{plus.style.background="#078A4D";}

function plus_color1()
{plus.style.background="#9A9A9A";}

function plus_color2() 
{plus.style.background="#9A9A9A";}

function plus_color3() 
{plus.style.background="#ECEDEF";}


function clear_color()
{clear.style.background="#090000";}

function clear_color1()
{clear.style.background="#A15641";}

function clear_color2() 
{clear.style.color="#CDCDCD";}

function clear_color3() 
{clear.style.background="#A15641";}




/*The ON/OFF Code*/
function onit()
{	i++
	k = i%2;

	if(k == 0)
	{on.textContent ="OFF";
	on.style.background ="#A15641";

	alert("Calculator is 'ON'.");
	clear.disabled = false;
	clear.style.cursor = "pointer";
	clear.style.opacity = "100%";

	seven.disabled = false;
	seven.style.cursor = "pointer";
	seven.style.opacity = "100%";

	eight.disabled = false;
	eight.style.cursor = "pointer";
	eight.style.opacity = "100%";

	nine.disabled = false;
	nine.style.cursor = "pointer";
	nine.style.opacity = "100%";

	plus.disabled = false;
	plus.style.cursor = "pointer";
	plus.style.opacity = "100%";

	four.disabled = false;
	four.style.cursor = "pointer";
	four.style.opacity = "100%";

	five.disabled = false;
	five.style.cursor = "pointer";
	five.style.opacity = "100%";

	six.disabled = false;
	six.style.cursor = "pointer";
	six.style.opacity = "100%";

	minus.disabled = false;
	minus.style.cursor = "pointer";
	minus.style.opacity = "100%";

	one.disabled = false;
	one.style.cursor = "pointer";
	one.style.opacity = "100%";

	two.disabled = false;
	two.style.cursor = "pointer";
	two.style.opacity = "100%";

	three.disabled = false;
	three.style.cursor = "pointer";
	three.style.opacity = "100%";

	times.disabled = false;
	times.style.cursor = "pointer";
	times.style.opacity = "100%";

	zero.disabled = false;
	zero.style.cursor = "pointer";
	zero.style.opacity = "100%";

	decimal.disabled = false;
	decimal.style.cursor = "pointer";
	decimal.style.opacity = "100%";

	divide.disabled = false;
	divide.style.cursor = "pointer";
	divide.style.opacity = "100%";

	equals.disabled = false;
	equals.style.cursor = "pointer";
	equals.style.opacity = "100%";

	display_screen.value = "";
	display_screen.style.opacity = "100%";
	error_screen.value = "Calc is ON";
	error_screen.style.color = "#008000";
	claculator_wrapper.style.background = "#F7F6F6;"}

	else if(k == 1)
	{on.textContent ="ON";
	on.style.background ="#53A175";
	operator.value = "";
	lengths.value = "";

	alert("Calculator Will Now go 'OFF', Press 'ON' to Use Calculator.")
	clear.disabled = true;
	clear.style.cursor = "not-allowed";
	clear.style.opacity = "40%";

	seven.disabled = true;
	seven.style.cursor = "not-allowed";
	seven.style.opacity = "40%";

	eight.disabled = true;
	eight.style.cursor = "not-allowed";
	eight.style.opacity = "40%";

	nine.disabled = true;
	nine.style.cursor = "not-allowed";
	nine.style.opacity = "40%";

	plus.disabled = true;
	plus.style.cursor = "not-allowed";
	plus.style.opacity = "40%";

	four.disabled = true;
	four.style.cursor = "not-allowed";
	four.style.opacity = "40%";

	five.disabled = true;
	five.style.cursor = "not-allowed";
	five.style.opacity = "40%";

	six.disabled = true;
	six.style.cursor = "not-allowed";
	six.style.opacity = "40%";

	minus.disabled = true;
	minus.style.cursor = "not-allowed";
	minus.style.opacity = "40%";

	one.disabled = true;
	one.style.cursor = "not-allowed";
	one.style.opacity = "40%";

	two.disabled = true;
	two.style.cursor = "not-allowed";
	two.style.opacity = "40%";

	three.disabled = true;
	three.style.cursor = "not-allowed";
	three.style.opacity = "40%";

	times.disabled = true;
	times.style.cursor = "not-allowed";
	times.style.opacity = "40%";

	zero.disabled = true;
	zero.style.cursor = "not-allowed";
	zero.style.opacity = "40%";

	decimal.disabled = true;
	decimal.style.cursor = "not-allowed";
	decimal.style.opacity = "40%";

	divide.disabled = true;
	divide.style.cursor = "not-allowed";
	divide.style.opacity = "40%";

	equals.disabled = true;
	equals.style.cursor = "not-allowed";
	equals.style.opacity = "40%";

	display_screen.value = "Press 'ON'.";
	display_screen.style.opacity = "40%";
	error_screen.value = "Calc is OFF";
	error_screen.style.color = "maroon";
	claculator_wrapper.style.background = "#F7F6F6;"}

	else{}
}


function off_all(){
	alert("Press 'ON' to Use Calculator.");
	clear.disabled = true;
	clear.style.cursor = "not-allowed";
	clear.style.opacity = "40%";

	seven.disabled = true;
	seven.style.cursor = "not-allowed";
	seven.style.opacity = "40%";

	eight.disabled = true;
	eight.style.cursor = "not-allowed";
	eight.style.opacity = "40%";

	nine.disabled = true;
	nine.style.cursor = "not-allowed";
	nine.style.opacity = "40%";

	plus.disabled = true;
	plus.style.cursor = "not-allowed";
	plus.style.opacity = "40%";

	four.disabled = true;
	four.style.cursor = "not-allowed";
	four.style.opacity = "40%";

	five.disabled = true;
	five.style.cursor = "not-allowed";
	five.style.opacity = "40%";

	six.disabled = true;
	six.style.cursor = "not-allowed";
	six.style.opacity = "40%";

	minus.disabled = true;
	minus.style.cursor = "not-allowed";
	minus.style.opacity = "40%";

	one.disabled = true;
	one.style.cursor = "not-allowed";
	one.style.opacity = "40%";

	two.disabled = true;
	two.style.cursor = "not-allowed";
	two.style.opacity = "40%";

	three.disabled = true;
	three.style.cursor = "not-allowed";
	three.style.opacity = "40%";

	times.disabled = true;
	times.style.cursor = "not-allowed";
	times.style.opacity = "40%";

	zero.disabled = true;
	zero.style.cursor = "not-allowed";
	zero.style.opacity = "40%";

	decimal.disabled = true;
	decimal.style.cursor = "not-allowed";
	decimal.style.opacity = "40%";

	divide.disabled = true;
	divide.style.cursor = "not-allowed";
	divide.style.opacity = "40%";

	equals.disabled = true;
	equals.style.cursor = "not-allowed";
	equals.style.opacity = "40%";

	display_screen.value = "Press 'ON'.";
	display_screen.style.opacity = "40%";
	error_screen.value = "Calc is OFF";
	error_screen.style.color ="maroon";}


(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        convert();
		
    }
});


 



    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);



var conFrom, conTo, conType;

function leftFunction(optionVal) {
	document.getElementById("leftTitle").innerHTML = optionVal.innerHTML;
	document.getElementById("from").innerHTML = optionVal.value;


	//Getting all select elements
	var arraySelects = document.getElementById('convertTo');
	var options = document.getElementById("convertTo").options;

	//Allow selection of the second dropdown select  
	if (arraySelects.disabled == true) {
		arraySelects.disabled = false;
	}


	//Getting selected index
	var selectedOption = optionVal;

	//Resetting the selects after each new option
	for (var i = 0; i < options.length; i++) {
		options[i].disabled = false;
	}

	//Disabling options at same index in other select elements
	for (var i = 0; i < arraySelects.length; i++) {
		if (arraySelects[i].value == optionVal.value) {

			options[i].disabled = true;
		}

	}

	window.conFrom = optionVal.value;
}

function rightFunction(optionVal) {
	document.getElementById("rightTitle").innerHTML = optionVal.innerHTML;
	document.getElementById("to").innerHTML = optionVal.value;

	//Getting all select elements
	var arraySelects = document.getElementById('convertFrom');
	var options = document.getElementById("convertFrom").options;

	//Allow selection of the second dropdown select  
	if (arraySelects.disabled == true) {
		arraySelects.disabled = false;
	}


	//Getting selected index
	var selectedOption = optionVal.value;

	//Resetting the selects after each new option
	for (var i = 0; i < options.length; i++) {
		options[i].disabled = false;
	}

	//Disabling options at same index in other select elements
	for (var i = 0; i < arraySelects.length; i++) {
		if (arraySelects[i].value == optionVal.value) {

			options[i].disabled = true;
		}

	}


	window.conTo = optionVal.value;
}

function convert() {
	document.getElementById("convertFromVal").style.border = "1px solid black";
	//Testing string for which equation to use
	var test = window.conFrom + window.conTo;

	//Values to convert
	var leftVal = document.getElementById("convertFromVal");


	var regexp = /^[0-9]\d*(\.\d+)?$/;

	//Used as testing info
	console.log(leftVal.value);
	console.log(test);
	console.log(regexp.test(leftVal.value));

	//Checks if value is a Decimal
	if (regexp.test(leftVal.value)) {
		var tochange = document.getElementById("convertToVal");
		
		//Mass Conversions
		if(window.conType == "mass"){
		switch (test) {
			//Metric to Metric convertions
			case "mgg":
				tochange.value = con(leftVal.value, "/", 1000);
				break;
			case "mgkg":
				tochange.value = con(leftVal.value, '/', 1000000);
				break;
			case "mgt":
				tochange.value = con(leftVal.value, '/', 1000000000);
				break;
			case "gmg":
				tochange.value = con(leftVal.value, '*', 1000);
				break;
			case "gkg":
				tochange.value = con(leftVal.value, '/', 1000);
				break;
			case "gt":
				tochange.value = con(leftVal.value, '/', 1000000);
				break;
			case "kgmg":
				tochange.value = con(leftVal.value, '*', 1000000);
				break;
			case "kgg":
				tochange.value = con(leftVal.value, '*', 1000);
				break;
			case "kgt":
				tochange.value = con(leftVal.value, '/', 1000);
				break;
			case "tmg":
				tochange.value = con(leftVal.value, '*', 1000000000);
				break;
			case "tg":
				tochange.value = con(leftVal.value, '*', 1000000);
				break;
			case "tkg":
				tochange.value = con(leftVal.value, '*', 1000);
				break;

				//Imperial to Imperial convertions
			case "groz":
				tochange.value = con(leftVal.value, '/', 437.5);
				break;
			case "grlb":
				tochange.value = con(leftVal.value, '/', 7000);
				break;
			case "grton":
				tochange.value = con(leftVal.value, '/', 1.4e7);
				break;
			case "ozgr":
				tochange.value = con(leftVal.value, '*', 437.5);
				break;
			case "ozlb":
				tochange.value = con(leftVal.value, '/', 16);
				break;
			case "ozton":
				tochange.value = con(leftVal.value, '/', 32000);
				break;
			case "lbgr":
				tochange.value = con(leftVal.value, '*', 7000);
				break;
			case "lboz":
				tochange.value = con(leftVal.value, '*', 16);
				break;
			case "lbton":
				tochange.value = con(leftVal.value, '/', 2000);
				break;
			case "tongr":
				tochange.value = con(leftVal.value, '*', 1.4e7);
				break;
			case "tonoz":
				tochange.value = con(leftVal.value, '*', 32000);
				break;
			case "tonlb":
				tochange.value = con(leftVal.value, '*', 2000);
				break;

				//Metric to Imperial	
			case "mggr":
				tochange.value = con(leftVal.value, '/', 64.799);
				break;
			case "mgoz":
				tochange.value = con(leftVal.value, '/', 28349.523);
				break;
			case "mglb":
				tochange.value = con(leftVal.value, '/', 453592.37);
				break;
			case "mgton":
				tochange.value = con(leftVal.value, '/', 9.072e8);
				break;
			case "ggr":
				tochange.value = con(leftVal.value, '/', 15.432);
				break;
			case "goz":
				tochange.value = con(leftVal.value, '/', 28.35);
				break;
			case "glb":
				tochange.value = con(leftVal.value, '/', 453.592);
				break;
			case "gton":
				tochange.value = con(leftVal.value, '/', 907184.74);
				break;
			case "kggr":
				tochange.value = con(leftVal.value, '*', 15432.358);
				break;
			case "kgoz":
				tochange.value = con(leftVal.value, '*', 35.274);
				break;
			case "kglb":
				tochange.value = con(leftVal.value, '*', 2.205);
				break;
			case "kgton":
				tochange.value = con(leftVal.value, '/', 907.185);
				break;
			case "tgr":
				tochange.value = con(leftVal.value, '*', 1.543e7);
				break;
			case "toz":
				tochange.value = con(leftVal.value, '*', 35273.962);
				break;
			case "tlb":
				tochange.value = con(leftVal.value, '*', 2204.623);
				break;
			case "tton":
				tochange.value = con(leftVal.value, '*', 1.102);
				break;

				//Imperial to Metric
			case "grmg":
				tochange.value = con(leftVal.value, '*', 64.799);
				break;
			case "ozmg":
				tochange.value = con(leftVal.value, '*', 28349.523);
				break;
			case "lbmg":
				tochange.value = con(leftVal.value, '*', 453592.37);
				break;
			case "tonmg":
				tochange.value = con(leftVal.value, '*', 9.072e8);
				break;
			case "grg":
				tochange.value = con(leftVal.value, '*', 15.432);
				break;
			case "ozg":
				tochange.value = con(leftVal.value, '*', 28.35);
				break;
			case "lbg":
				tochange.value = con(leftVal.value, '*', 453.592);
				break;
			case "tong":
				tochange.value = con(leftVal.value, '*', 907184.74);
				break;
			case "grkg":
				tochange.value = con(leftVal.value, '/', 15432.358);
				break;
			case "ozkg":
				tochange.value = con(leftVal.value, '/', 35.274);
				break;
			case "lbkg":
				tochange.value = con(leftVal.value, '/', 2.205);
				break;
			case "tonkg":
				tochange.value = con(leftVal.value, '*', 907.185);
				break;
			case "grt":
				tochange.value = con(leftVal.value, '/', 1.543e7);
				break;
			case "ozt":
				tochange.value = con(leftVal.value, '/', 35273.962);
				break;
			case "lbt":
				tochange.value = con(leftVal.value, '/', 2204.623);
				break;
			case "tont":
				tochange.value = con(leftVal.value, '/', 1.102);
				break;
		}
		}
		//Distance Conversions
		else if(window.conType == "dist"){
			switch (test) {
		
		//Metric to Metric
		case "mmcm":
				tochange.value = con(leftVal.value, "/", 10);
				break;
		case "Mmm":
				tochange.value = con(leftVal.value, "/", 1000);
				break;
		case "Mmkm":
				tochange.value = con(leftVal.value, "/", 1000000);
				break;	
		case "cmMm":
				tochange.value = con(leftVal.value, "*", 10);
				break;		
		case "cmm":
				tochange.value = con(leftVal.value, "/", 100);
				break;
		case "cmkm":
				tochange.value = con(leftVal.value, "/", 100000);
				break;		
		case "mMm":
				tochange.value = con(leftVal.value, "*", 1000);
				break;
		case "mcm":
				tochange.value = con(leftVal.value, "*", 100);
				break;		
		case "mkm":
				tochange.value = con(leftVal.value, "/", 1000);
				break;
		case "kmMm":
				tochange.value = con(leftVal.value, "*", 1000000);
				break;
		case "kmcm":
				tochange.value = con(leftVal.value, "*", 100000);
				break;		
		case "kmm":
				tochange.value = con(leftVal.value, "*", 1000);
				break;		
		//Imperial to Imperial
		case "inft":
				tochange.value = con(leftVal.value, "/", 12);
				break;
		case "inyd":
				tochange.value = con(leftVal.value, "/", 36);
				break;
		case "inmile":
				tochange.value = con(leftVal.value, "/", 63360);
				break;
		case "ftin":
				tochange.value = con(leftVal.value, "*", 12);
				break;
		case "ftyd":
				tochange.value = con(leftVal.value, "/", 3);
				break;
		case "ftmile":
				tochange.value = con(leftVal.value, "/", 5280);
				break;
		case "ydin":
				tochange.value = con(leftVal.value, "*", 36);
				break;	
		case "ydft":
				tochange.value = con(leftVal.value, "*", 3);
				break;
		case "ydmile":
				tochange.value = con(leftVal.value, "/", 1760);
				break;
		case "milein":
				tochange.value = con(leftVal.value, "*", 63360);
				break;	
		case "mileft":
				tochange.value = con(leftVal.value, "*", 5280);
				break;
		case "mileyd":
				tochange.value = con(leftVal.value, "*", 1760);
				break;		
		
		//Metric to Imperial
		case "Mmin":
				tochange.value = con(leftVal.value, "/", 25.4);
				break;
		case "Mmft":
				tochange.value = con(leftVal.value, "/", 304.8);
				break;	
		case "Mmyd":
				tochange.value = con(leftVal.value, "/", 914.4);
				break;
		case "Mmmile":
				tochange.value = con(leftVal.value, "/", 1.609e6);
				break;
		case "cmin":
				tochange.value = con(leftVal.value, "/", 2.54);
				break;
		case "cmft":
				tochange.value = con(leftVal.value, "/", 30.48);
				break;	
		case "cmyd":
				tochange.value = con(leftVal.value, "/", 91.44);
				break;
		case "cmmile":
				tochange.value = con(leftVal.value, "/", 160934.4);
				break;	
		case "min":
				tochange.value = con(leftVal.value, "*", 39.37);
				break;
		case "mft":
				tochange.value = con(leftVal.value, "*", 3.281);
				break;	
		case "myd":
				tochange.value = con(leftVal.value, "*", 1.094);
				break;
		case "mmile":
				tochange.value = con(leftVal.value, "/", 1609.344);
				break;	
		case "kmin":
				tochange.value = con(leftVal.value, "*", 39370.079);
				break;
		case "kmft":
				tochange.value = con(leftVal.value, "*", 3280.84);
				break;	
		case "kmyd":
				tochange.value = con(leftVal.value, "*", 1093.613);
				break;
		case "kmmile":
				tochange.value = con(leftVal.value, "/", 1.609);
				break;			
		
		
		//Imperial to Metric
		case "inMm":
				tochange.value = con(leftVal.value, "*", 25.4);
				break;
		case "ftMm":
				tochange.value = con(leftVal.value, "*", 304.8);
				break;	
		case "ydMm":
				tochange.value = con(leftVal.value, "*", 914.4);
				break;
		case "mileMm":
				tochange.value = con(leftVal.value, "*", 1.609e6);
				break;
		case "incm":
				tochange.value = con(leftVal.value, "*", 2.54);
				break;
		case "ftcm":
				tochange.value = con(leftVal.value, "*", 30.48);
				break;	
		case "ydcm":
				tochange.value = con(leftVal.value, "*", 91.44);
				break;
		case "milecm":
				tochange.value = con(leftVal.value, "*", 160934.4);
				break;	
		case "inm":
				tochange.value = con(leftVal.value, "/", 39.37);
				break;
		case "ftm":
				tochange.value = con(leftVal.value, "/", 3.281);
				break;	
		case "ydm":
				tochange.value = con(leftVal.value, "/", 1.094);
				break;
		case "milem":
				tochange.value = con(leftVal.value, "*", 1609.344);
				break;	
		case "inkm":
				tochange.value = con(leftVal.value, "/", 39370.079);
				break;
		case "ftkm":
				tochange.value = con(leftVal.value, "/", 3280.84);
				break;	
		case "ydkm":
				tochange.value = con(leftVal.value, "/", 1093.613);
				break;
		case "milekm":
				tochange.value = con(leftVal.value, "*", 1.609);
				break;
			}
		}
		//Pressure conversions
		else if(window.conType == "pressure"){
			switch(test){
		
		case "pakpa":
				tochange.value = con(leftVal.value, "/", 1000);
				break;
		case "pabar":
				tochange.value = con(leftVal.value, "/", 100000);
				break;	
		case "paatm":
				tochange.value = con(leftVal.value, "/", 101325);
				break;
		case "patorr":
				tochange.value = con(leftVal.value, "/", 133.322);
				break;			
		case "papsi":
				tochange.value = con(leftVal.value, "/", 6894.757);
				break;

		case "kpapa":
				tochange.value = con(leftVal.value, "*", 1000);
				break;
		case "kpabar":
				tochange.value = con(leftVal.value, "/", 100);
				break;	
		case "kpaatm":
				tochange.value = con(leftVal.value, "/", 101.325);
				break;
		case "kpatorr":
				tochange.value = con(leftVal.value, "*", 7.501);
				break;		
		case "kpapsi":
				tochange.value = con(leftVal.value, "/",6.895);
				break;	

		case "barpa":
				tochange.value = con(leftVal.value, "*", 100000);
				break;
		case "barkpa":
				tochange.value = con(leftVal.value, "*", 100);
				break;	
		case "baratm":
				tochange.value = con(leftVal.value, "/", 1.013);
				break;
		case "bartorr":
				tochange.value = con(leftVal.value, "*", 750.062);
				break;			
		case "barpsi":
				tochange.value = con(leftVal.value, "*",14.504);
				break;		

		case "torrpa":
				tochange.value = con(leftVal.value, "*", 133.322);
				break;
		case "torrkpa":
				tochange.value = con(leftVal.value, "/", 7.501);
				break;	
		case "torrbar":
				tochange.value = con(leftVal.value, "/", 750.062);
				break;
		case "torratm":
				tochange.value = con(leftVal.value, "/", 760);
				break;			
		case "torrpsi":
				tochange.value = con(leftVal.value, "/",51.715);
				break;				
			
		case "psipa":
				tochange.value = con(leftVal.value, "*", 6894.757);
				break;
		case "psikpa":
				tochange.value = con(leftVal.value, "*", 6.895);
				break;	
		case "psibar":
				tochange.value = con(leftVal.value, "/", 14.504);
				break;
		case "psiatm":
				tochange.value = con(leftVal.value, "/", 14.696);
				break;			
		case "psitorr":
				tochange.value = con(leftVal.value, "*", 51.715);
				break;		
			
			
			}
		}


	} else {
		document.getElementById("convertFromVal").style.border = "2px solid red";
		alert("You have not entered a valid decimal number");
	}

}


//The calculating function
function con(val1, operator, val2) {
	if (operator == "*") {
		return Number(val1) * val2;
	} else if (operator == "/") {
		return Number(val1) / val2;
	}
}


function mass() {

	window.conType = "mass";
	//reset all of the visual values
	document.getElementById("rightTitle").innerHTML = "";
	document.getElementById("to").innerHTML = "";
	document.getElementById("leftTitle").innerHTML = "";
	document.getElementById("from").innerHTML = "";
	document.getElementById("convertFromVal").value = 0;
	document.getElementById("convertToVal").value = 0;

	var arrayConFrom = document.getElementById('convertFrom');
	var arrayConTo = document.getElementById('convertTo');
	var options = document.getElementById("convertFrom").options;

	//visable select boxes
	arrayConFrom.disabled = false;
	arrayConTo.disabled = false;
	arrayConFrom.style.visibility = "visible";
	arrayConTo.style.visibility = "visible";

	//Disable the used button, to prevent errors
	document.getElementById("pressure").disabled = false;
	document.getElementById("mass").disabled = true;
	document.getElementById("dist").disabled = false;

	//Activate all values
	for (var i = 0; i < arrayConFrom.length; i++) {
		options[i].disabled = false;
		arrayConTo.options[i].disabled = false;
	}

	//Add the mass options into the left select list
	$('#convertFrom')
		.empty()
		.append('<option selected disabled hidden>Convert From</option>')
		.append('<option value ="mg">Milligram</option>')
		.append('<option value ="g">Gram</option>')
		.append('<option value ="kg">Kilogram</option>')
		.append('<option value ="t">Metric Tonne</option>')
		.append('<option value ="gr">Grain</option>')
		.append('<option value ="oz">Ounce</option>')
		.append('<option value ="lb">Pound</option>')
		.append('<option value ="ton">Ton</option>');
	//Add the mass options into the right select list
	$('#convertTo')
		.empty()
		.append('<option selected disabled hidden>Convert To</option>')
		.append('<option value ="mg">Milligram</option>')
		.append('<option value ="g">Gram</option>')
		.append('<option value ="kg">Kilogram</option>')
		.append('<option value ="t">Metric Tonne</option>')
		.append('<option value ="gr">Grain</option>')
		.append('<option value ="oz">Ounce</option>')
		.append('<option value ="lb">Pound</option>')
		.append('<option value ="ton">Ton</option>');


}


function dist() {
	window.conType = "dist";

	//reset all of the visual values
	document.getElementById("rightTitle").innerHTML = "";
	document.getElementById("to").innerHTML = "";
	document.getElementById("leftTitle").innerHTML = "";
	document.getElementById("from").innerHTML = "";
	document.getElementById("convertFromVal").value = 0;
	document.getElementById("convertToVal").value = 0;

	var arrayConFrom = document.getElementById('convertFrom');
	var arrayConTo = document.getElementById('convertTo');
	var options = document.getElementById("convertFrom").options;

	//visable select boxs
	arrayConFrom.disabled = false;
	arrayConTo.disabled = false;
	arrayConFrom.style.visibility = "visible";
	arrayConTo.style.visibility = "visible";

	//Disable selected button to prevent errors
	document.getElementById("pressure").disabled = false;
	document.getElementById("dist").disabled = true;
	document.getElementById("mass").disabled = false;

	//Activate all values
	for (var i = 0; i < arrayConFrom.length; i++) {
		options[i].disabled = false;
		arrayConTo.options[i].disabled = false;
	}

	//Add all the distance options to the left select list
	$('#convertFrom')
		.empty()
		.append('<option selected disabled hidden>Convert From</option>')
		.append('<option value ="Mm">Millimeter</option>')
		.append('<option value ="cm">Centimeter</option>')
		.append('<option value ="m">Meter</option>')
		.append('<option value ="km">Kilometer</option>')
		.append('<option value ="in">Inch</option>')
		.append('<option value ="ft">Feet</option>')
		.append('<option value ="yd">Yard</option>')
		.append('<option value ="mile">Mile</option>');
	//Add all the distance options to the right select list
	$('#convertTo')
		.empty()
		.append('<option selected disabled hidden>Convert To</option>')
		.append('<option value ="Mm">Millimeter</option>')
		.append('<option value ="cm">Centimeter</option>')
		.append('<option value ="m">Meter</option>')
		.append('<option value ="km">Kilometer</option>')
		.append('<option value ="in">Inch</option>')
		.append('<option value ="ft">Feet</option>')
		.append('<option value ="yd">Yard</option>')
		.append('<option value ="mile">Mile</option>');


}

function pressure() {

	window.conType = "pressure";
	//reset all of the visual values
	document.getElementById("rightTitle").innerHTML = "";
	document.getElementById("to").innerHTML = "";
	document.getElementById("leftTitle").innerHTML = "";
	document.getElementById("from").innerHTML = "";
	document.getElementById("convertFromVal").value = 0;
	document.getElementById("convertToVal").value = 0;

	var arrayConFrom = document.getElementById('convertFrom');
	var arrayConTo = document.getElementById('convertTo');
	var options = document.getElementById("convertFrom").options;

	//visable select boxes
	arrayConFrom.disabled = false;
	arrayConTo.disabled = false;
	arrayConFrom.style.visibility = "visible";
	arrayConTo.style.visibility = "visible";

	//Disable the used button, to prevent errors
	document.getElementById("pressure").disabled = true;
	document.getElementById("mass").disabled = false;
	document.getElementById("dist").disabled = false;

	//Activate all values
	for (var i = 0; i < arrayConFrom.length; i++) {
		options[i].disabled = false;
		arrayConTo.options[i].disabled = false;
	}

	//Add the mass options into the left select list
	$('#convertFrom')
		.empty()
		.append('<option selected disabled hidden>Convert From</option>')
		.append('<option value ="pa">Pascal</option>')
		.append('<option value ="kpa">Kilopascal</option>')
		.append('<option value ="bar">Bar</option>')
		.append('<option value ="atm">Standard Atmosphere</option>')
		.append('<option value ="torr">Torr (mmHg)</option>')
		.append('<option value ="psi">PSI</option>');
	//Add the mass options into the right select list
	$('#convertTo')
		.empty()
		.append('<option selected disabled hidden>Convert To</option>')
		.append('<option value ="pa">Pascal</option>')
		.append('<option value ="kpa">Kilopascal</option>')
		.append('<option value ="bar">Bar</option>')
		.append('<option value ="atm">Standard Atmosphere</option>')
		.append('<option value ="torr">Torr (mmHg)</option>')
		.append('<option value ="psi">PSI</option>');


}

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = localStorage.getItem('note');
    }
    if(result === null) {
        result = "No note saved";
    }
    document.getElementById('area').value = result;
}

function save() {
    if(check_web_storage_support() == true) {
        var area = document.getElementById("area");
        if(area.value != '') {
            localStorage.setItem("note", area.value);
        }
        else {
            alert("Nothing to save");
        }
    }
}

function clear() {
    document.getElementById('area').value = "";
}


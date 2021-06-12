"use strict";
$(document).ready( () => {

    // handle click on Submit Order button
    $("#submit_order").click( evt => {
        let isValid = true;

        // validate email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
        
        // validate phone nbr
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Please enter a phone number in NNN-NNN-NNNN format.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);


        
        // validate the name entry  
        const fullName = $("#fname").val().trim();
        if (fullName == "") {
            $("#fname").next().text("This field is required.");
            isValid = false;
        } else {
            $("#fname").next().text("");
        }
        $("#fname").val(fullName);

        // validate the state entry
		const state = $("#state").val().trim();
		if (state == "") {
			$("#state").next().text("This field is required.");
			isValid = false;
		} else if ( state.length != 2 ) {
			$("#state").next().text("Use 2-character code.");
			isValid = false;
		} else {
			$("#state").next().text("");
		}
		$("#state").val(state);
			
		// validate the zip-code entry
		const zipCode = $("#zip").val().trim();
		if (zipCode == "") {
			$("#zip").next().text("This field is required.");
			isValid = false;
		} else if (isNaN(zipCode)) {
            $("#zip").next().text("Use 99999 format.");
            isValid = false;
        } else if ( zipCode.length != 5 ) {
			$("#zip").next().text("Use 5-digit code.");
			isValid = false;
		} else {
			$("#zip").next().text("");
		}
        $("#zip").val(zipCode);
        			
        // validate the check boxes	
        /*let checkedOptions = [];
        checkedOptions = $(":checkbox:checked");
        if (checkedOptions.length == 0) {
            $("#net").next().text("Select at least one.");
            isValid = false;
        } else {
            $("#net").next().text("");
        }*/

		
        
        


		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
			evt.preventDefault();
		}

        
    
    });

    //Add select to choose size	
    //Hand Tossed
    document.getElementById('dough1').onclick = function() {
 
        var values = ["Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"];
     
        var select = document.createElement("select");
        select.name = "size1";
        select.id = "size1"
     
        for (const val of values)
        {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select.appendChild(option);
        }
     
        var label = document.createElement("label");
        label.innerHTML = "Choose size: "
        label.htmlFor = "size";
     
        document.getElementById("container-1").appendChild(label).appendChild(select);
    } 
    
    //Add select to choose size	
    //Thin Crust
    document.getElementById('dough2').onclick = function() {
 
        var values = ["Medium ($11.99)", "Large ($13.99)"];
     
        var select = document.createElement("select");
        select.name = "size2";
        select.id = "size2"
     
        for (const val of values)
        {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select.appendChild(option);
        }
     
        var label = document.createElement("label");
        label.innerHTML = "Choose size: "
        label.htmlFor = "size";
     
        document.getElementById("container-2").appendChild(label).appendChild(select);
    } 
    //Add select to choose size	
    //New York Style 
    document.getElementById('dough3').onclick = function() {
 
        var values = ["Large ($16.99)", "Extra Large ($19.99)"];
     
        var select = document.createElement("select");
        select.name = "size3";
        select.id = "size3"
     
        for (const val of values)
        {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select.appendChild(option);
        }
     
        var label = document.createElement("label");
        label.innerHTML = "Choose size: "
        label.htmlFor = "size";
     
        document.getElementById("container-3").appendChild(label).appendChild(select);
    }
    //Add select to choose size	
    //Gluten free
    document.getElementById('dough4').onclick = function() {
 
        var values = ["Small ($10.99)"];
     
        var select = document.createElement("select");
        select.name = "size4";
        select.id = "size4"
     
        for (const val of values)
        {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select.appendChild(option);
        }
     
        var label = document.createElement("label");
        label.innerHTML = "Choose size: "
        label.htmlFor = "size";
     
        document.getElementById("container-4").appendChild(label).appendChild(select);
    } 
    
})

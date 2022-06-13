$(document).ready(function(){
    $("#fname").blur(function(){
        let fname = $(this).val();
        let pattern = "[a-zA-Z]{2,30}$";

        if(!fname.match(pattern)){
            let text;
            text = 'Name must only contain alphabets and its length should be between 2 and 30';
            $('#OP1').text(text);
        }    
    });



    $('#lname').blur(function(){

        let lname = $(this).val();

        let pattern = "[a-zA-Z]{2,30}$";
        if(!lname.match(pattern)){
            let text;
            text = 'Name must only contain alphabets and its length should be between 2 and 30';
            $('#OP2').text(text);
        }
    });

    $('#staddress').blur(function(){

        let address = $(this).val();

        let pattern = "[a-zA-Z0-9]{3,600}$";
        if(!address.match(pattern)){
            let text;
            text = 'Invalid Address'
            $('#OP3').text(text);
        }
    });

    $('#staddress2').blur(function(){

        let address = $(this).val();

        let pattern = "[a-zA-Z0-9]{3,600}$";
        if(!address.match(pattern)){
            let text;
            // text = 'Name must only contain alphabets and its length should be between 2 and 30'
            text = 'Invalid Address'
            $('#OPa').text(text);
        }
    });

    $('#city').blur(function(){

        let city = $(this).val();

        let pattern = "[a-zA-Z]{3,30}$";
        if(!city.match(pattern)){
            let text;
            text = 'City name is invalid'
            $('#OP4').text(text);
        }
    });

    $('#state').blur(function(){

        let state = $(this).val();

        let pattern = "[a-zA-Z]{3,30}$";
        if(!state.match(pattern)){
            let text;
            text = 'State name is invalid'
            $('#OP5').text(text);
        }
    });

    $('#zipcode').blur(function(){

        let zipcode = $(this).val();

        let pattern = "^[0-9]{6}$";
        if(!zipcode.match(pattern)){
            let text;
            text = "Zipcode must of length 6 and must be numbers";
            $('#OP6').text(text);
        }
    });

    $('#phone').blur(function(){

        let phone = $(this).val();

        let pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
        if(!phone.match(pattern)){
            let text;
            text = "Enter number with given pattern only";
            $('#OP7').text(text);
        }
    });

    $('#email').blur(function(){

        let email = $(this).val();

        let pattern = "/(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
        if(!email.match(pattern)){
            let text;
            text = "Invalid email must use valid email address";
            $('#OP8').text(text);
        }
    });

    $('#suggest').blur(function(){

        let suggest = $(this).val();
        // console.log("suggest is :" ,suggest, "length is :",suggest.length);

        if(suggest.length < 3){
            let text;
            text = "Plase write suggestion using atleast 3 letters";
            $('#OP10').text(text);
        }
    });

    $('#feedback').blur(function(){

        let feedback = $(this).val();

        if(feedback.length < 3){
            let text;
            text = "Plase write feedback using atleast 3 letters";
            $('#OP9').text(text);
        }
    }); 

    $('#Submit').click(function(){
        event.preventDefault();

        let gender = $('input[name="gender"]');
        let checked = false;
       
        for(let i=0; i<gender.length;i++){
            if(gender[i].checked){
                checked = true;
            }
            // console.log(gender[i]);
        }
        // console.log(checked);
        if(!checked){
            // console.log("Hello");
            $('#OPr').text("You have to chedk atleast one value")
        }
    });

  });
window.onload = getData;

let successMessage;

function getData(){
    //Smooth scrolling with links
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 55}, 1000);
    });
    
    successMessage = document.querySelector(".alert-success");
    
    document.getElementsByName("firstName")[0].onchange = updateName;
    document.getElementsByName("lastName")[0].onchange = updateName;
}

function displayFormSuccess(){
    successMessage.style.display = "block";
}

function updateName(){
    document.getElementsByName("name")[0].value = document.getElementsByName("firstName")[0].value + " " + document.getElementsByName("lastName")[0].value;
}

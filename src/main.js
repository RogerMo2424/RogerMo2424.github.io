window.onload = getData;

let successMessage;

function getData(){
    //Smooth scrolling with links
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 55}, 1000);
    });
    
    successMessage = document.querySelector(".alert-success");
}

function displayFormSuccess(){
    successMessage.style.display = "block";
}
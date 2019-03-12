// getting references
let fm = document.querySelector("form");
let fn = document.getElementById("fullname");
// do the same for email
let em = document.getElementById("email");

//do the same for message
let me = document.getElementById("message");

//email validation step 1 - filter using regular expression
let emailFilter = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// event target object
let btn = document.getElementById("collect");

// event handler
function validateForm() {
    
    console.clear();
    //empty variables to pass data into
    
    let collectedData = {};
    let errors = [];
    
    // validate fullname
    //!== is not equal to 
    if (fn.value !== "") {
        collectedData.fname = fn.value;
    } else {
        errors.push("Full name is missing");
    }
    
    //email vaidation step 2 
    
    if (em.value !== "") {
        if (emailFilter.test(em.value)) {
            collectedData.mail = em.value; 
    } else {
        errors.push("invalid email!"); 
    }
        
    } else {
        errors.push("Email is missing");
    }
    
    // validate message
    
    if (me.value !== "") {
        collectedData.mess = me.value; 
    } else {
        errors.push("Message name is missing");
    }
    
    // create the feedback
    if (errors.length === 0) {
        console.log("Data" , collectedData);
        fm.reset();
    } else {
        // if errors exist print them
        console.log("Errors" , errors);
    }   
}


btn.addEventListener("click", validateForm);
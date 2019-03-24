/* Thank the visitor for showing their interest */
function myThanks() {
    alert("Thank you " + fname.value + " for your interest.  We will contact you soon.");
    
}
           

/* Open email dialog box directly to our email */

function myMail() {
    const maiLink = document.getElementById("mailtoLink");
    new MailToLink(mailLink);
}


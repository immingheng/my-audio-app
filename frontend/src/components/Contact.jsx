import React from "react";
  
const Contact = () => {
  return (
    <div class="container-fluid d-flex justify-content-center">
        <form class="form" >
        <h1>Email Me:</h1>
        <label class="form-label" for="subject">Subject: &nbsp;</label>
        <input class="form-control" type="text" name="subject" formControlName="subject"/>
        <label class="form-label" for="message">Message: &nbsp;</label>
        <textarea class="form-control" name="message" cols="80" rows="10" formControlName="message"></textarea>
        <br/>
        <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-dark">Send</button>
        </div>
        <div class="d-flex justify-content-center">
          <h2>Disclaimer</h2>
        </div>
        <div>
          <p>I have yet to hook this up with a Email API/SMTP Service to send out actual emails.</p>
        </div>
        </form>
    </div>
  );
};
  
export default Contact;
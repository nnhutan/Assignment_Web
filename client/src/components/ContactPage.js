import React from "react";
import "./Contact.css";
function ContactPage(){
return (
    <div className="gr" style={{height:"57rem"}}>
        <div className="container-contact100">
		<div className="wrap-contact100">
			<form className="contact100-form validate-form">
				<span className="contact100-form-title">
					Contact Us
				</span>

				<div className="wrap-input100 validate-input" data-validate="Name is required">
					<span className="label-input100">Your Name</span>
					<input className="input100" type="text" name="name" placeholder="Enter your name" />
					<span className="focus-input100"></span>
				</div>

                <div className="wrap-input100 validate-input" data-validate="Phone number is required">
					<span className="label-input100">Your Phone Number</span>
					<input className="input100" type="text" name="phone" placeholder="Enter your phone number" />
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<span className="label-input100">Email</span>
					<input className="input100" type="text" name="email" placeholder="Enter your email addess" />
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Message is required">
					<span className="label-input100">Message</span>
					<textarea className="input100" name="message" placeholder="Your message here..."></textarea>
					<span className="focus-input100"></span>
				</div>

				<div className="container-contact100-form-btn">
					<div className="wrap-contact100-form-btn">
						<div className="contact100-form-bgbtn"></div>
						<button className="contact100-form-btn">
							<span>
								Submit
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
    </div>
);
}
export default ContactPage;
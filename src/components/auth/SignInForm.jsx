import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import StarImg from "../../assets/images/v1/star2.png";
import Field from "../common/Field";

function SignInForm() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "test@example.com",
			password: "password123",
		},
	});
	const submitForm = (formData) => {
		console.log("Submitted Form Data = ", formData);
		// Simulate successful login
		if (formData.email === "test@example.com" && formData.password === "password123") {
			navigate("/dashboard");
		} else {
			alert("Invalid credentials");
		}
	};
	return (
		<div className="section aximo-section-padding5">
			<div className="container">
				<div className="aximo-account-title">
					<h2>
						<span className="aximo-title-animation">
							Welcome back
							<span className="aximo-title-icon">
								<img src={StarImg} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="aximo-account-wrap">
					<form onSubmit={handleSubmit(submitForm)}>
						<div className="aximo-account-field">
							<Field label="Enter email address" error={errors.email}>
								<input
									{...register("email", { required: "Email is required." })}
									type="email"
									name="email"
									id="email"
									placeholder="example@gmail.com"
								/>
							</Field>
						</div>
						<div className="aximo-account-field">
							<Field label="Enter Password" error={errors.password}>
								<input
									{...register("password", {
										required: "Password is required.",
										minLength: {
											value: 8,
											message: "Your password must be at least 8 characters.",
										},
									})}
									type="password"
									name="password"
									id="password"
									placeholder="Enter password"
								/>
							</Field>
						</div>
						<div className="aximo-account-checkbox-wrap">
							<div className="aximo-account-checkbox">
								<input type="checkbox" id="check" />
								<label htmlFor="check">Remember me</label>
							</div>
							<Link className="forgot-password" to="/reset-password">
								Forgot password?
							</Link>
						</div>

						<button id="aximo-account-btn" type="submit">
							Login
						</button>
						<div className="aximo-or">
							<p>or</p>
						</div>
						<div className="aximo-account-bottom">
							<p>
								Not a member yet? <Link to="/signup">Sign up here</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignInForm;

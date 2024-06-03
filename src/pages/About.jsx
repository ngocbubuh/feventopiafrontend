import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); // Khai báo biến navigate

  return (
    <div className="wrapper">
		<div className="hero-banner">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-9 col-md-10">
						<div className="hero-banner-content text-center">
							<h2 className="mb-0">We are a team who loves supporting the community through events</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="explore-events p-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12">
						<div className="main-title checkout-title">
							<h3>Our aim is to provide a powerful and affordable event ticketing solution that can handle events of any size and complexity without an issue.</h3>
						</div>
						<div className="about--description">
							<p>Barren’s online event ticketing software was built on the idea that anyone, anywhere in the world wanting to organise an event should have the tools to simply do so. We promote this idea everyday through the dedication of a team based out of Melbourne, Australia.</p>
							<p>The focus of our efforts is the event organiser, who works hard to ensure that their attendees have a great experience. We share that passion for bringing people together, creating memories and enriching lives.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="host-engaging-event-block p-80">
			<div className="container">
				<div className="row">
					<div className="col-xl-12 col-lg-12 col-md-12">
						<div className="main-title checkout-title text-center">
							<h3>We are all about enriching communities​</h3>
						</div>
						<div className="communities-steps">
							<div className="row">
								<div className="col-lg-4 col-md-12">
									<a href="#" className="main-card communities-item" data-bs-toggle="modal" data-bs-target="#communitieModal">
										<div className="communities-img">
											<img src="images/about/img-1.jpg" alt=""/>
										</div>
										<div className="communities-content">
											<p>We work with several industry leaders and community groups around Australia and want all of our event organisers to succeed in everything they do. Events are not always easy, but selling tickets online should be.</p>
										</div>
									</a>
								</div>
								<div className="col-lg-4 col-md-12">
									<a href="#" className="main-card communities-item" data-bs-toggle="modal" data-bs-target="#communitieModal">
										<div className="communities-img">
											<img src="images/about/img-2.jpg" alt=""/>
										</div>
										<div className="communities-content">
											<p>We are committed to making a positive impact on the community. That's why our pricing structure is set so that everyone can afford to use Barren, and it's why we offer our system free of charge for any free events or registrations.</p>
										</div>
									</a>
								</div>
								<div className="col-lg-4 col-md-12">
									<a href="#" className="main-card communities-item" data-bs-toggle="modal" data-bs-target="#communitieModal">
										<div className="communities-img">
											<img src="images/about/img-3.jpg" alt=""/>
										</div>
										<div className="communities-content">
											<p>This provides an additional revenue stream for your charity and allows us to positively contribute to the causes that are important to you and your community.</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="feature-block p-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-10">
						<div className="main-title mb-4">
							<h3>The Complete Event Ticketing Platform with a Host of Features</h3>
							<p>Barren's allows you to create and sell tickets for your event and manage all of the data associated with your events, such as ticket sales, visitor insights, reporting, and much more. It's the perfect platform to help you manage your events efficiently.</p>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="nav step-tabs custom-border-top pt-5" role="tablist">
							<button className="step-link feature-step-link active" data-bs-toggle="tab" data-bs-target="#step-01" type="button" role="tab" aria-controls="step-01" aria-selected="true">Step 01<span>Event Page​</span></button>
							<button className="step-link feature-step-link" data-bs-toggle="tab" data-bs-target="#step-02" type="button" role="tab" aria-controls="step-02" aria-selected="false">Step 02<span>Ticketing</span></button>
							<button className="step-link feature-step-link" data-bs-toggle="tab" data-bs-target="#step-03" type="button" role="tab" aria-controls="step-03" aria-selected="false">Step 03<span>Attendees</span></button>
							<button className="step-link feature-step-link" data-bs-toggle="tab" data-bs-target="#step-04" type="button" role="tab" aria-controls="step-04" aria-selected="false">Step 04<span>Promotion</span></button>
							<button className="step-link feature-step-link" data-bs-toggle="tab" data-bs-target="#step-05" type="button" role="tab" aria-controls="step-05" aria-selected="false">Step 05<span>Management</span></button>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade show active" id="step-01" role="tabpanel">
								<div className="row justify-content-between">
									<div className="col-lg-5">
										<div className="row">
											<div className="col-12">
												<div className="feature-item">
													<h4>Responsive Design</h4>
													<p>Our responsive and user-friendly event page allows guests to book events from any device.</p>
												</div>
												<div className="feature-item">
													<h4>Public or Private Event</h4>
													<p>You can host your events in public or by invitation only. Allow only the people whom you've invited to the events.</p>
												</div>
												<div className="feature-item">
													<h4>Booking end Countdown Timer</h4>
													<p>Our Countdown timer can be a unique tool for selling your tickets. The timer shows the end time for ticket sale deadline, discount end period, and more.</p>
												</div>
												<div className="feature-item">
													<h4>Multi-session or Multi-Day Event</h4>
													<p>You can launch multiple-session or multiple-day events according to your needs.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="feature-img">
											<img src="images/about/feature-1.png" alt=""/>											
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="step-02" role="tabpanel">
								<div className="row justify-content-between">
									<div className="col-lg-5">
										<div className="row">
											<div className="col-12">
												<div className="feature-item">
													<h4>Single Ticket</h4>
													<p>Sell standard, fixed price tickets to all of your attendees coming to the events. You have complete control of limiting ticket numbers. In addition, you can set up Unlimited types of tickets for your event.</p>
												</div>
												<div className="feature-item">
													<h4>Unlimited Ticket Types</h4>
													<p>You can price your tickets in different types with the multi-price system. For example, you can sell discounted tickets, such as early-bird discounts, higher-priced VIP tickets, etc.</p>
												</div>
												<div className="feature-item">
													<h4>Group Ticketing</h4>
													<p>There are unlimited ways of grouping tickets. You can create various types of tickets. You can set the limit for group ticket purchases from one person. Attendees can choose their seats as there are no seat restrictions on group tickets.</p>
												</div>
												<div className="feature-item">
													<h4>Set Your Rules</h4>
													<p>Pass the service fee to the attendees or pay it yourself; set ticket cancellation and refund policies</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="feature-img">
											<img src="images/about/feature-2.png" alt=""/>											
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="step-03" role="tabpanel">
								<div className="row justify-content-between">
									<div className="col-lg-5">
										<div className="row">
											<div className="col-12">
												<div className="feature-item">
													<h4>Fully Customisable Forms</h4>
													<p>Our easy drag and drop feature lets you create attendees' forms as per your event requirements. Create a professional-looking form with a few simple steps.</p>
												</div>
												<div className="feature-item">
													<h4>Calendar Integration</h4>
													<p>We've integrated popular online calendars (Outlook, Google, Yahoo, and Apple) where attendees can add events and get alerts when nearing the event date.</p>
												</div>
												<div className="feature-item">
													<h4>Attendee Dashboard</h4>
													<p>The attendees' dashboard gives guests the option to cancel their registration should they no longer be able to attend. They can also check their registered events and suggestions.</p>
												</div>
												<div className="feature-item">
													<h4>Secure Payment Methods</h4>
													<p>Barren's employs PCI-compliant payment gateways and has a comprehensive data protection policy to ensure that your earnings are safe. In addition, we provide flexible payment methods for a smooth payout experience.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="feature-img">
											<img src="images/about/feature-3.png" alt=""/>											
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="step-04" role="tabpanel">
								<div className="row justify-content-between">
									<div className="col-lg-5">
										<div className="row">
											<div className="col-12">
												<div className="feature-item">
													<h4>Email Campaign</h4>
													<p>You can design professional-looking emails from our built-in templates and send or schedule invitations, send reminders, and event updates to all of your contacts or pre-categorised attendees.</p>
												</div>
												<div className="feature-item">
													<h4>Analytics and Tracking</h4>
													<p>Your events can be integrated into conversion tracking tools to monitor their social media promotion campaigns. Also, you can add your own Facebook Pixel, Google Analytics and Google Ads conversion codes.</p>
												</div>
												<div className="feature-item">
													<h4>Coupon</h4>
													<p>You can use coupons to boost ticket sales. Multiple coupons can be created with additional offers. Create and promote coupons and drive more ticket sales.</p>
												</div>
												<div className="feature-item">
													<h4>Early Bird Discounts</h4>
													<p>You can give a percentage or sum of the discounted ticket to selected people. You have the freedom to set up the discounts as you like</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="feature-img">
											<img src="images/about/feature-4.png" alt=""/>											
										</div>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="step-05" role="tabpanel">
								<div className="row justify-content-between">
									<div className="col-lg-5">
										<div className="row">
											<div className="col-12">
												<div className="feature-item">
													<h4>Built-in Analytic Tools</h4>
													<p>Barren's dashboard provides essential analytical information about the event and ticket sales. Track and make decisions accordingly to optimise your events to the fullest.</p>
												</div>
												<div className="feature-item">
													<h4>Team Collaboration</h4>
													<p>Work together, from anywhere, with your team. Manage professionally your events together in real-time, all on one platform. Assign tasks to members from our organisation's dashboard.</p>
												</div>
												<div className="feature-item">
													<h4>Scanner App</h4>
													<p>You can use the scanning app to check in guests, and only those with valid tickets can be let in. In addition, you can cross-reference scanned tickets with your guest list through the app.</p>
												</div>
												<div className="feature-item">
													<h4>Easy Duplicate Events</h4>
													<p>Our duplicate event feature saves time and energy and creates the same events within seconds. You can still customise the new event as you want. You will receive separate analytical reports for each event.</p>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="feature-img">
											<img src="images/about/feature-5.png" alt=""/>											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="host-engaging-event-block p-80">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="main-title text-center">
							<h3>The Team Behind Barren</h3>
							<p>Every day we are passionately dedicated to make buying and selling tickets simple and secure.</p>
						</div>
					</div>
					<div className="col-md-12">
						<div className="our-team custom-border-top">
							<div className="row justify-content-xl-center">
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-1.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Rock William</h4>
											<span>General Manager</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-2.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Brian Mills</h4>
											<span>Vp Engineering</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-3.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Damian Murphy</h4>
											<span>Business Development Manager</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-4.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Justine William</h4>
											<span>Client Success Manager</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-5.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Lorraine Tan</h4>
											<span>Product Manager</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-6.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Anneliese Hough</h4>
											<span>Product Manager</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-7.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Johnson Dua</h4>
											<span>Tech Lead</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6 col-12">
									<div className="main-card team-card">
										<div className="team-img">
											<img src="images/about/team-8.jpg" alt=""/>
										</div>
										<div className="team-content">
											<h4>Lizzy Wizzy</h4>
											<span>Tech Lead</span>
											<div className="user-social-links-group">
												<a href="https://www.facebook.com/" className="user-social-link" target="_blank"><i className="fab fa-facebook-square"></i></a>
												<a href="https://www.instagram.com/accounts/login/" className="user-social-link" target="_blank"><i className="fab fa-instagram"></i></a>
												<a href="https://twitter.com/" className="user-social-link" target="_blank"><i className="fab fa-twitter"></i></a>
												<a href="https://www.linkedin.com/" className="user-social-link" target="_blank"><i className="fab fa-linkedin-in"></i></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="our-organisations-block p-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="main-title text-center">
							<h3>321+ events created by thousands of organisations around the globe</h3>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="organisations-area">
							<div className="owl-carousel organisations-slider owl-theme">
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-1.png" alt=""/></a>
									</div>
								</div>
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-2.png" alt=""/></a>
									</div>
								</div>
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-3.png" alt=""/></a>
									</div>
								</div>
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-4.png" alt=""/></a>
									</div>
								</div>
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-5.png" alt=""/></a>
									</div>
								</div>
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-6.png" alt=""/></a>
									</div>
								</div>
								<div className="item">
									<div className="sponsor">
										<a href="#"><img src="images/icons/sponsor-7.png" alt=""/></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default About;
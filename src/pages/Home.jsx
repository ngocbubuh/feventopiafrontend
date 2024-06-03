import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Khai báo biến navigate
  <div className="wrapper">
    <div className="event-dt-block p-80">
      <div className="most-popular-posts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="slide-posts">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="">
                      <div className="owl-carousel most-posts-slider owl-theme">
                        <div className="item">
                          <div className="main-card">
                            <div className="blog-block flex-slide">
                              <div className="blog-img-card left">
                                <a href="blog_detail_view.html" className="bbig-img">
                                  <img src="images/blog-imgs/img-1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="blog-content right">
                                <a href="blog_detail_view.html"
                                  className="blog--title">Organising a Successful
                                  Christmas Party with Barren</a>
                                <p className="mb-4">Phasellus venenatis posuere nibh, sit
                                  amet blandit lorem pharetra ac. Phasellus feugiat
                                  laoreet laoreet.</p>
                                <div className="post-meta">
                                  <span className="post-date me-4"><i
                                    className="fa-regular fa-calendar-days me-2"></i>5
                                    May, 2022</span>
                                  <span className="post-read-time"><i
                                    className="fa-regular fa-clock me-2"></i>10 mins
                                    read </span>
                                </div>
                                <a href="blog_detail_view.html"
                                  className="main-btn h_50 btn-hover bt_40">View Post</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="main-card">
                            <div className="blog-block flex-slide">
                              <div className="blog-img-card left">
                                <a href="blog_detail_view.html" className="bbig-img">
                                  <img src="images/blog-imgs/img-12.jpg" alt="" />
                                </a>
                              </div>
                              <div className="blog-content right">
                                <a href="blog_detail_view.html"
                                  className="blog--title">Step-by-Step Guide to Promote
                                  Event on Social Media</a>
                                <p className="mb-4">Phasellus venenatis posuere nibh, sit
                                  amet blandit lorem pharetra ac. Phasellus feugiat
                                  laoreet laoreet.</p>
                                <div className="post-meta">
                                  <span className="post-date me-4"><i
                                    className="fa-regular fa-calendar-days me-2"></i>5
                                    May, 2022</span>
                                  <span className="post-read-time"><i
                                    className="fa-regular fa-clock me-2"></i>10 mins
                                    read </span>
                                </div>
                                <a href="blog_detail_view.html"
                                  className="main-btn h_50 btn-hover bt_40">View Post</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="main-card">
                            <div className="blog-block flex-slide">
                              <div className="blog-img-card left">
                                <a href="blog_detail_view.html" className="bbig-img">
                                  <img src="images/blog-imgs/img-3.jpg" alt="" />
                                </a>
                              </div>
                              <div className="blog-content right">
                                <a href="blog_detail_view.html" className="blog--title">How
                                  to Live Stream Successfully: Complete Guide for
                                  Event Hosts</a>
                                <p className="mb-4">Phasellus venenatis posuere nibh, sit
                                  amet blandit lorem pharetra ac. Phasellus feugiat
                                  laoreet laoreet.</p>
                                <div className="post-meta">
                                  <span className="post-date me-4"><i
                                    className="fa-regular fa-calendar-days me-2"></i>5
                                    May, 2022</span>
                                  <span className="post-read-time"><i
                                    className="fa-regular fa-clock me-2"></i>10 mins
                                    read </span>
                                </div>
                                <a href="blog_detail_view.html"
                                  className="main-btn h_50 btn-hover bt_40">View Post</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="main-card">
                            <div className="blog-block flex-slide">
                              <div className="blog-img-card left">
                                <a href="blog_detail_view.html" className="bbig-img">
                                  <img src="images/blog-imgs/img-4.jpg" alt="" />
                                </a>
                              </div>
                              <div className="blog-content right">
                                <a href="blog_detail_view.html"
                                  className="blog--title">Virtual Event Sponsorship Ideas
                                  for Your Next Event</a>
                                <p className="mb-4">Phasellus venenatis posuere nibh, sit
                                  amet blandit lorem pharetra ac. Phasellus feugiat
                                  laoreet laoreet.</p>
                                <div className="post-meta">
                                  <span className="post-date me-4"><i
                                    className="fa-regular fa-calendar-days me-2"></i>5
                                    May, 2022</span>
                                  <span className="post-read-time"><i
                                    className="fa-regular fa-clock me-2"></i>10 mins
                                    read </span>
                                </div>
                                <a href="blog_detail_view.html"
                                  className="main-btn h_50 btn-hover bt_40">View Post</a>
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
          </div>
        </div>
      </div>
      <div className="explore-events p-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="main-title">
                <h3>SỰ KIỆN NỔI BẬT</h3>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="event-filter-items">
                <div className="featured-controls">
                  <div className="filter-tag">
                    <a href="explore_events_by_date.html" className="active">Tất cả sự kiện</a>
                    <a href="explore_events_by_date.html">Hôm nay</a>
                    <a href="explore_events_by_date.html">Ngày mai</a>
                    <a href="explore_events_by_date.html">Trong tuần</a>
                    <a href="explore_events_by_date.html">Cuối tuần</a>
                    <a href="explore_events_by_date.html">Tuần tới</a>
                    <a href="explore_events_by_date.html">Cuối tuần tới</a>
                    <a href="explore_events_by_date.html">Trong Tháng</a>
                    <a href="explore_events_by_date.html">Tháng sau</a>
                    <a href="explore_events_by_date.html">Trong Năm</a>
                    <a href="explore_events_by_date.html">Năm sau</a>
                  </div>
                  <div className="controls">
                    <button type="button" className="control" data-filter="all">Tất cả Thể loại</button>
                    <button type="button" className="control" data-filter=".arts">Workshop</button>
                    <button type="button" className="control" data-filter=".business">Seminar</button>
                    <button type="button" className="control" data-filter=".concert">Concert</button>
                    <button type="button" className="control"
                      data-filter=".workshops">Workshops</button>
                    <button type="button" className="control"
                      data-filter=".coaching_consulting">Seminar</button>
                    <button type="button" className="control" data-filter=".health_Wellness">Health and
                      Wellbeing</button>
                    <button type="button" className="control"
                      data-filter=".volunteer">Volunteer</button>
                    <button type="button" className="control" data-filter=".sports">Sports</button>
                    <button type="button" className="control" data-filter=".free">Miễn phí</button>
                  </div>
                  <div className="row" data-ref="event-filter-content">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert workshops volunteer sports health_Wellness"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="venue_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-1.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="venue_event_detail_view.html" className="event-title">A New Way
                            Of Life</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $100.00*</span>
                            <span className="remaining"></span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>15
                                Apr</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Fri, 3.45 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>1h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix business workshops volunteer sports health_Wellness"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="online_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-2.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="online_event_detail_view.html" className="event-title">Earrings
                            Workshop with Bronwyn David</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $75.00*</span>
                            <span className="remaining"><i
                              className="fa-solid fa-ticket fa-rotate-90"></i>6
                              Remaining</span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>30
                                Apr</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Sat, 11.20 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>2h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix coaching_consulting free concert volunteer health_Wellness bussiness"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="venue_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-3.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="venue_event_detail_view.html" className="event-title">Spring
                            Showcase Saturday April 30th 2022 at 7pm</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">Free*</span>
                            <span className="remaining"></span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>1
                                May</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Sun, 4.30 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>3h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 mix health_Wellness concert volunteer sports free business"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="online_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-4.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="online_event_detail_view.html" className="event-title">Shutter
                            Life</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $85.00</span>
                            <span className="remaining"><i
                              className="fa-solid fa-ticket fa-rotate-90"></i>7
                              Remaining</span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>1
                                May</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Sun, 5.30 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>1h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix concert sports health_Wellness free arts"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="venue_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-5.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="venue_event_detail_view.html" className="event-title">Friday
                            Night Dinner at The Old Station May 27 2022</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $41.50*</span>
                            <span className="remaining"></span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>27
                                May</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Fri, 12.00 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>5h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix workshops concert arts volunteer sports"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="venue_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-6.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="venue_event_detail_view.html" className="event-title">Step Up
                            Open Mic Show</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $200.00*</span>
                            <span className="remaining"></span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>30
                                Jun</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Thu, 4.30 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>1h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix volunteer free health_Wellness"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="online_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-7.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="online_event_detail_view.html" className="event-title">Tutorial
                            on Canvas Painting for Beginners</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $50.00*</span>
                            <span className="remaining"><i
                              className="fa-solid fa-ticket fa-rotate-90"></i>17
                              Remaining</span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>17
                                Jul</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Sun, 5.30 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>1h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert volunteer arts"
                      data-ref="mixitup-target">
                      <div className="main-card mt-4">
                        <div className="event-thumbnail">
                          <a href="venue_event_detail_view.html" className="thumbnail-img">
                            <img src="images/event-imgs/img-8.jpg" alt="" />
                          </a>
                          <span className="bookmark-icon" title="Bookmark"></span>
                        </div>
                        <div className="event-content">
                          <a href="venue_event_detail_view.html" className="event-title">Trainee
                            Program on Leadership' 2022</a>
                          <div className="duration-price-remaining">
                            <span className="duration-price">AUD $120.00*</span>
                            <span className="remaining"><i
                              className="fa-solid fa-ticket fa-rotate-90"></i>7
                              Remaining</span>
                          </div>
                        </div>
                        <div className="event-footer">
                          <div className="event-timing">
                            <div className="publish-date">
                              <span><i className="fa-solid fa-calendar-day me-2"></i>20
                                Jul</span>
                              <span className="dot"><i className="fa-solid fa-circle"></i></span>
                              <span>Wed, 11.30 PM</span>
                            </div>
                            <span className="publish-time"><i
                              className="fa-solid fa-clock me-2"></i>12h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="browse-btn">
                    <a href="explore_events.html" className="main-btn btn-hover ">Browse All</a>
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
            <div className="col-lg-10">
              <div className="main-title">
                <h3>Host Engaging Online and Venue Events with Barren</h3>
                <p>Organise venue events and host online events with unlimited possibilities using our
                  built-in virtual event platform. Build a unique event experience for you and your
                  attendees.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="engaging-block">
                <div className="owl-carousel engaging-slider owl-theme">
                  <div className="item">
                    <div className="main-card">
                      <div className="host-item">
                        <div className="host-img">
                          <img src="images/icons/venue-events.png" alt="" />
                        </div>
                        <h4>Venue Events</h4>
                        <p>Create outstanding event page for your venue events, attract
                          attendees and sell more tickets.</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="host-item">
                        <div className="host-img">
                          <img src="images/icons/webinar.png" alt="" />
                        </div>
                        <h4>Webinar</h4>
                        <p>Webinars tend to be one-way events. Barren helps to make them more
                          engaging.</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="host-item">
                        <div className="host-img">
                          <img src="images/icons/training-workshop.png" alt="" />
                        </div>
                        <h4>Training & Workshop </h4>
                        <p>Create and host profitable workshops and training sessions online,
                          sell tickets and earn money.</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="host-item">
                        <div className="host-img">
                          <img src="images/icons/online-className.png" alt="" />
                        </div>
                        <h4>Online className</h4>
                        <p>Try our e-learning template to create a fantastic e-learning event
                          page and drive engagement. </p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="host-item">
                        <div className="host-img">
                          <img src="images/icons/talk-show.png" alt="" />
                        </div>
                        <h4>Talk Show</h4>
                        <p>Use our intuitive built-in event template to create and host an
                          engaging Talk Show.</p>
                      </div>
                    </div>
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
              <div className="main-title">
                <h3>No Feature Overload, Get Exactly What You Need</h3>
                <p>As well as being the most affordable online-based event registration tool and one of
                  the best online event ticketing systems in Australia, Barren is super easy-to-use
                  and built with a simplistic layout which is totally convenient for the organisers to
                  operate.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature-group-list">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-1.png" alt="" />
                      </div>
                      <h4>Online Events</h4>
                      <p>Built-in video conferencing platform to save you time and cost.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-2.png" alt="" />
                      </div>
                      <h4>Venue Event</h4>
                      <p>Easy-to-use features to create and manage your venue events.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-3.png" alt="" />
                      </div>
                      <h4>Engaging Event Page</h4>
                      <p>Create engaging event pages with your logo and our hero image collage
                        gallery.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-4.png" alt="" />
                      </div>
                      <h4>Marketing Automation</h4>
                      <p>Use our marketing automation tools to promote your events on social media
                        and email.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-5.png" alt="" />
                      </div>
                      <h4>Sell Tickets</h4>
                      <p>Start monetising your online and venue events, sell unlimited* tickets.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-6.png" alt="" />
                      </div>
                      <h4>Networking</h4>
                      <p>Engage your attendees with the speakers using our interactive tools and
                        build your own network.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-7.png" alt="" />
                      </div>
                      <h4>Recording</h4>
                      <p>Securely record your online events and save on the cloud of your choice*.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-8.png" alt="" />
                      </div>
                      <h4>Live Streaming</h4>
                      <p>Livestream your online events on Facebook, YouTube and other social
                        networks.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-9.png" alt="" />
                      </div>
                      <h4>Engagement Metrics</h4>
                      <p>Track your event engagement metrics like visitors, ticket sales, etc.
                        from your dashboard.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-10.png" alt="" />
                      </div>
                      <h4>Security & Support</h4>
                      <p>Secure data and payment processing backed by a team eager to see you
                        succeed.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-11.png" alt="" />
                      </div>
                      <h4>Reports & Analytics</h4>
                      <p>Get useful reports and insights to boost your sales and marketing
                        activities.</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item mt-46">
                      <div className="feature-icon">
                        <img src="images/icons/feature-icon-12.png" alt="" />
                      </div>
                      <h4>Mobile & Desktop App</h4>
                      <p>Stay on top of things, manage and monitor your events using the organiser
                        app.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="host-step-block p-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="main-title">
                <h3>Be a Star Event Host in 4 Easy Steps</h3>
                <p>Use early-bird discounts, coupons and group ticketing to double your ticket sale. Get
                  paid quickly and securely.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="easy-steps-tab">
                <div className="nav step-tabs" role="tablist">
                  <button className="step-link active" data-bs-toggle="tab" data-bs-target="#step-01"
                    type="button" role="tab" aria-controls="step-01" aria-selected="true">Step
                    01<span>Create Your Event</span></button>
                  <button className="step-link" data-bs-toggle="tab" data-bs-target="#step-02"
                    type="button" role="tab" aria-controls="step-02" aria-selected="false">Step
                    02<span>Sell Tickets and Get Paid</span></button>
                  <button className="step-link" data-bs-toggle="tab" data-bs-target="#step-03"
                    type="button" role="tab" aria-controls="step-03" aria-selected="false">Step
                    03<span>Finally, Host Your Event</span></button>
                  <button className="step-link" data-bs-toggle="tab" data-bs-target="#step-04"
                    type="button" role="tab" aria-controls="step-04" aria-selected="false">Step
                    04<span>Repeat and Grow</span></button>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="step-01" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="step-text">Sign up for free and create your event easily in
                          minutes.</div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-1.png" alt="" />
                          </div>
                          <h4>Sign up for free</h4>
                          <p>Sign up easily using your Google or Facebook account or email and
                            create your events in minutes.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-2.png" alt="" />
                          </div>
                          <h4>Use built-in event page template</h4>
                          <p>Choose from our customised page templates specially designed to
                            attract attendees.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-3.png" alt="" />
                          </div>
                          <h4>Customise your event page as you like</h4>
                          <p>Add logo, collage hero images, and add details to create an
                            outstanding event page.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="step-02" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="step-text">Use our multiple ticketing features & marketing
                          automation tools to boost ticket sales.</div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-4.png" alt="" />
                          </div>
                          <h4>Promote your events on social media & email</h4>
                          <p>Use our intuitive event promotion tools to reach your target
                            audience and sell tickets.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-5.png" alt="" />
                          </div>
                          <h4>Use early-bird discounts, coupons & group ticketing</h4>
                          <p>Double your ticket sales using our built-in discounts, coupons
                            and group ticketing features.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-6.png" alt="" />
                          </div>
                          <h4>Get paid quickly & securely</h4>
                          <p>Use our PCI compliant payment gateways to collect your payment
                            securely.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="step-03" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="step-text">Use Barren to host any types of online events for
                          free.</div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-7.png" alt="" />
                          </div>
                          <h4>Free event hosting</h4>
                          <p>Use Eventbookings to host any types of online events for free.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-8.png" alt="" />
                          </div>
                          <h4>Built-in video conferencing platform</h4>
                          <p>No need to integrate with ZOOM or other 3rd party apps, use our
                            built-in video conferencing platform for your events.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-9.png" alt="" />
                          </div>
                          <h4>Connect your attendees with your event</h4>
                          <p>Use our live engagement tools to connect with attendees during
                            the event.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="step-04" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="step-text">Create more events and earn more money.</div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-10.png" alt="" />
                          </div>
                          <h4>Create multiple sessions & earn more</h4>
                          <p>Use our event scheduling features to create multiple sessions for
                            your events & earn more money.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-11.png" alt="" />
                          </div>
                          <h4>Clone past event to create similar events</h4>
                          <p>Use our event cloning feature to clone past event and create a
                            new one easily within a few clicks.</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="step-item">
                          <div className="step-icon">
                            <img src="images/icons/step-icon-12.png" alt="" />
                          </div>
                          <h4>Get support like nowhere else</h4>
                          <p>Our dedicated on-boarding coach will assist you in becoming an
                            expert in no time.</p>
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
      <div className="testimonial-block p-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="main-title">
                <h3>Nâng tầm trải nghiệm sự kiện với FEventopia</h3>
                <p>Chúng tôi luôn tâm niệm rằng sự hài lòng của khách hàng là ưu tiên hàng đầu.
                  Chính vì vậy, chúng tôi không ngừng nỗ lực cải thiện và phát triển để mang đến
                  những trải nghiệm tốt đẹp nhất cho bạn. Dưới đây là phản hồi từ một số khách hàng: </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testimonial-slider-area">
                <div className="owl-carousel testimonial-slider owl-theme">
                  <div className="item">
                    <div className="main-card">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>Tuyệt vời! Dễ sử dụng, tiện lợi và giúp tôi kết nối với những người cùng sở thích.</p>
                        </div>
                        <div className="testimonial-user-dt">
                          <h5>Phạm Ngọc Bảo</h5>
                          <span>SAP Consultant</span>
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>Giao diện đẹp, nhiều tính năng hữu ích, nhân viên hỗ trợ nhiệt tình. Thật tuyệt vời</p>
                        </div>
                        <div className="testimonial-user-dt">
                          <h5>Phạm Hoàng Thụy An</h5>
                          <span>K17 Ngành Kỹ thuật phần mềm</span>
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>Nâng tầm trải nghiệm sự kiện, giúp tôi mua vé dễ dàng và chia sẻ trải nghiệm thú vị.</p>
                        </div>
                        <div className="testimonial-user-dt">
                          <h5>Phạm Hoàng Anh</h5>
                          <span>Video Editor/ Content Creator</span>
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>Rất hài lòng với dịch vụ của FEventopia. Sẽ tiếp tục sử dụng trong tương lai.</p>
                        </div>
                        <div className="testimonial-user-dt">
                          <h5>Hoàng Văn C</h5>
                          <span>Event manager</span>
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>Đã mua nhiều vé sự kiện trên FEventopia và chưa bao giờ gặp bất kỳ vấn đề gì. Rất đáng tin cậy!</p>
                        </div>
                        <div className="testimonial-user-dt">
                          <h5>Romo S.</h5>
                          <span>Khách hàng tin cậy</span>
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="main-card">
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>Nhờ có FEventopia, tôi không bao giờ bỏ lỡ bất kỳ sự kiện nào mà tôi yêu thích!</p>
                        </div>
                        <div className="testimonial-user-dt">
                          <h5>Christopher F.</h5>
                          <span>Marketing Executive</span>
                          <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                          </ul>
                        </div>
                        <span className="quote-icon"><i className="fa-solid fa-quote-right"></i></span>
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
                <h3>50+ Sự kiện và đồng hành cùng các Nhà Tài Trợ lớn</h3>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="organisations-area">
                <div className="owl-carousel organisations-slider owl-theme">
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-1.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-2.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-3.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-4.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-5.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-6.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="item">
                    <div className="sponsor">
                      <a href="#"><img src="images/icons/sponsor-7.png" alt="" /></a>
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
};

    export default Home;
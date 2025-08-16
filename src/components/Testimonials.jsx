import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { UilCommentAlt } from '@iconscout/react-unicons';

const testimonialsData = [
  {
    description: "Working with Miriam was an absolute pleasure from start to finish. They took the time to truly understand our business needs and translated them into a stunning and highly functional website",
    date: "March 30, 2025",
    img: "https://i.postimg.cc/MTr9j4Yn/client1.jpg",
    name: "Chen Xiuying",
    position: "Marketing Director"
  },
  {
    description: "Miriam truly understood our business needs through her modern and sleek design, making a site incredibly user-friendly. With her help, we had a significant increase in engagement and customer sales",
    date: "January 18, 2025",
    img: "https://i.postimg.cc/wvV7f8rB/client2.jpg",
    name: "Joshua Middletown",
    position: "Sales Director"
  },
  {
    description: "I was blown away by the website Miriam created for my business! Miriam crafted a incredibly user-friendly, that allows our customers to access information on any device. Since the launch, I've seen a significant increase in inquiries and bookings",
    date: "November 29, 2024",
    img: "https://i.postimg.cc/pdP9DL0S/client3.jpg",
    name: "Melanie Stone",
    position: "Business Owner"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <h2 className="section-title" data-heading="My clients say">Testimonials</h2>

      <div className="testimonials-container container swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper-wrapper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card swiper-slide">
                <div className="testimonial-quote">
                  <UilCommentAlt />
                </div>
                <p className="testimonial-description">{testimonial.description}</p>
                <h3 className="testimonial-date">{testimonial.date}</h3>
                <div className="testimonial-profile">
                  <img src={testimonial.img} alt="" className="testimonial-profile-img" />
                  <div className="testimonial-profile-data">
                    <span className="testimonial-profile-name">{testimonial.name}</span>
                    <span className="testimonail-profile-detail">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Parikshit Verma"}
          feedback={"Their attention to detail and creativity really stood out, and we couldn't be happier with the final product."}
        />

        <TestimonialCard
          name={"Aayush Gupta"}
          feedback={
            "Their innovative approach and understanding of the latest web design trends helped elevate our website to the next level."
          }
        />

        <TestimonialCard
          name={"Ankit"}
          feedback={"The end result was a beautiful, functional website that has helped us attract new customers and grow our business."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
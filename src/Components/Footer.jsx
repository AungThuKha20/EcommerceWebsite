import React, { useContext } from "react";
import r1 from "../images/R1.jpg";
import r2 from "../images/r2.jpg";
import r3 from "../images/r3.jpg";
import r4 from "../images/r4.jpg";
import r5 from "../images/r5.jpg";
import { ContactContext } from "../Context/ContactContext";

const Footer = () => {
  const { handleCloseContact } = useContext(ContactContext);
  const reviews = [
    {
      name: "John Doe",
      review: "Great products and fast shipping!",
      R_photo: r1
    },
    {
      name: "Jane Smith",
      review: "Highly recommend this store!",
      R_photo: r2
    },
    {
      name: "Mike Johnson",
      review: "Excellent customer service!",
      R_photo: r3
    },
    {
      name: "Sarah Williams",
      review: "Best online shopping experience!",
      R_photo: r4
    },
    {
      name: "David Wilson",
      review: "Top-notch quality products!",
      R_photo: r5
    }
  ];

  return (
    <div className="footer shadow-md shadow-cyan-500 navbar_bg mt-10 py-1 text-white">
      <div className="footer-content">
        <div className="footer-reviewss">
          <h3 className=" md:mt-6 mt-3 font-heading md:text-[50px] text-[25px] text-center">
            Customer Reviews
          </h3>
          <div className="review-list  flex flex-wrap justify-center mx-3 gap-10">
            {reviews.map((review, index) => (
              <div
                key={index}
                className=" bg-gray-900 w-[300px] flex flex-col items-center bg-opacity-30 p-4 review-item shadow-md shadow-cyan-600  "
              >
                <img
                  src={review.R_photo}
                  className=" h-[100px]"
                  alt={review.name}
                />
                <h4 className=" font-serif">{review.name}</h4>
                <p className=" text-[10px]">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-6 mx-2 footer-links">
          <h3 className=" text-center">Quick Links</h3>
          <ul className=" flex gap-6 justify-center ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li onClick={handleCloseContact} className=" cursor-pointer">
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2022 Your Ecommerce Store. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

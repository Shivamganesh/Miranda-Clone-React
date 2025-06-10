import React from "react";
import "./last.css";
import lega from "../assets/stamp.png";
export const Last = () => {
  return (<div className="last">
        <div className="last-line"></div>
        <div class="chaniru">
            <div class="marquee">
                <div class="img1">Let's</div>  
                <div class="img1">create</div> 
                <div class="img1">something</div> 
                <div class="img1">togehter</div>
                <div class="img1">
                    <div className="last-blk">ShivamGupta</div>
                </div>
            </div>
        </div>
        <div className="last-line-two"></div>
        <div className="names">&#169;Shivam Gupta</div>
        <img src={lega} alt="legal" className="legal" />
        <div className="legal-text">Legal</div>
        <a href="https://www.instagram.com/shubhamgupta_2455___/" className="last-link-one">Instagram</a>
        <a href="https://www.instagram.com/shubhamgupta_2455___/" className="last-link-two">Twitter</a>
        <a href="https://www.instagram.com/shubhamgupta_2455___/" className="last-link-three">Behance</a>
  </div>
  );
};
export default Last;
import React from 'react'
import "../styles/Certs.css";
import comptia_img from "../assets/comptia-linux-ce-certification.png";
import rhcsa_img from "../assets/rhcsa.png";
import aws_cloud from "../assets/aws_cloudprac.png";

function Certs() {
  return (
    <div>
      <h3> Certifications </h3>
      <div>
        <a href='https://www.google.com'>
        <img src={comptia_img} alt="ComTIA_Badge" class="responsive"  />
        </a>
      </div>
      <div class="container">
        <a href='https://www.google.com'>
        <img src={rhcsa_img} alt="RedHat_Badge" class="responsive" />
        <div class="overlay"> COMING SOON </div>
        </a>
      </div>
      <div class="container">
        <a href='https://www.google.com'>
        <img src={aws_cloud} alt="AWS_Badge" class="responsive" />
        <div class="overlay"> COMING SOON </div>
        </a>
      </div>
    </div>
  )
}

export default Certs
import Grid from "@mui/material/Grid";
import React from "react";
//import { Image } from "react-bootstrap";
import imag from "../images/img-6.jpg";
import "./AboutMTwo.css";
import Button from "@mui/material/Button";

const AboutMTwo = () => {
  return (
    <>
      <h2 className="header-2">About Me</h2>
      <div className="containers">
        <Grid container justify="center" spacing="2" alignItems="center">
          <Grid
            item
            md={6}
            sm={8}
            justifyContent="center"
            alignItems="center"
            className="right"
          >
            <div className="about-img">
              {" "}
              <img className='img' src={imag} alt="" />
            </div>
          </Grid>
          <Grid item md={6} sm={12} className="leftSide">
            <h2>What I do</h2>
            Hello im Blessed Banele. I love coding , and I aspire to become a
            great developer. I currently code every day, and help students and
            business I believe that designing websites and services in close
            partnership with my clients is the only way to have a real impact on
            their business. I believe that designing websites and services in
            close partnership with my clients is the only way to have a real
            impact on their business.
            <div className="resume-btn">
              <Button variant="contained" color="success" size="large">
                Hire
              </Button>
              <div class="social-iconz">
                <h3
                  class="social-icon-lin facebook"
                
                >
                  <i class="fab fa-facebook-f" />
                </h3>
                <h3
                  class="social-icon-lin instagram"
                
                >
                  <i class="fab fa-instagram" />
                </h3>

                <h3
                  class="social-icon-lin twitter"
                
                >
                  <i class="fab fa-twitter" />
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AboutMTwo;

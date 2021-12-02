import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";

import "./IntroTwo.css";

const IntroTwo = () => {
  return (
    <div>
      <Grid container justify="center" spacing={2} className="container">
        <Grid item xs={12} md small={6}>
          <div className="left">
            <h3 className="title">Blessed Banele </h3>
            <h5 className="para-1">
              I love Coding, and I aspire to become a great developer. I
              currently code every day, and help students and small business.
            </h5>
            <div className="info">
              <div>
                <Button
                  href="/ContactUs"
                  variant="contained"
                  color="success"
                  size="large"
                >
                  Contact
                </Button>
              </div>
              <div className="contact">
                <h3>Call Me (078) 445 - 8136</h3>

                <h4>For any question or concern</h4>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md small={6}>
          {/* <img src={imag} alt="" />*/}
        </Grid>
      </Grid>
    </div>
  );
};

export default IntroTwo;

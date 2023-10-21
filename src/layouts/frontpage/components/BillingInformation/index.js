/**
=========================================================
* iBrand Dashboard MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Card from "@mui/material/Card";

// iBrand Dashboard MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Slideing page components
import Slide from "layouts/frontpage/components/Slide";

function BillingInformation() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://ibrand.techno-era.co/en/api/offer/slider/?format=json", {
      mode: "no-cors",
      headers: {
        method: "GET",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Slides
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {/* {data ? data.data.map((slide) => {}) : "loading"} */}
          <Slide name="Slide 1" active="yes" notes="oliver@burrito.com" url="FRB1235476" />
          <Slide
            name="lucas harper"
            active="stone tech zone"
            notes="lucas@stone-tech.com"
            url="FRB1235476"
          />
          <Slide
            name="ethan james"
            active="fiber notion"
            notes="ethan@fiber.com"
            url="FRB1235476"
            noGutter
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default BillingInformation;

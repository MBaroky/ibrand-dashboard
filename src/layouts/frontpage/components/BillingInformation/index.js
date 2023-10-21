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

// @mui material components
import Card from "@mui/material/Card";

// iBrand Dashboard MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Slideing page components
import Slide from "layouts/frontpage/components/Slide";

function BillingInformation() {
  const [slides, setSlides] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
      .then((response) => response.json())
      .then((data) => {
        setSlides(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(slides);
  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Slides
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {slides
            ? slides.map((slide, i) => {
                const { id, title, url, thumbnailUrl } = slide;
                if (i < 4) {
                  return (
                    <Slide
                      key={i}
                      name={`Slide-${id}`}
                      active="yes"
                      notes={title}
                      url={url}
                      thumb={thumbnailUrl}
                    />
                  );
                }
              })
            : "loading"}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default BillingInformation;

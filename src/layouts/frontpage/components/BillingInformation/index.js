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
import Modal from "@mui/material/Modal";

// iBrand Dashboard MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Slideing page components
import Slide from "layouts/frontpage/components/Slide";

// context
import { useArgonController, getSlides } from "context";

// modal styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BillingInformation() {
  // slides list state
  const [slides, setSlides] = useState([]);

  // context controller
  const [controller, dispatch] = useArgonController();

  // new slide modal state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // updating slides via context
  useEffect(() => {
    // use axios or fetch to get the data
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
      .then((response) => response.json())
      .then((data) => getSlides(dispatch, data))
      .catch((error) => console.log(error.message));

    setSlides(controller.slides);
  }, [controller.slides]);

  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonBox
          display="flex"
          alignItems="space-between"
          justifyContent="space-between"
          mt={{ xs: 2, sm: 0 }}
          ml={{ xs: -1.5, sm: 0 }}
        >
          <ArgonTypography variant="h6" fontWeight="medium">
            Slides
          </ArgonTypography>
          <ArgonButton onClick={handleOpen}>Add Slide</ArgonButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ArgonBox sx={style}>
              <ArgonTypography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </ArgonTypography>
              <ArgonTypography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </ArgonTypography>
            </ArgonBox>
          </Modal>
        </ArgonBox>
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

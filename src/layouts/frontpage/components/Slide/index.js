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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// iBrand Dashboard MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// iBrand Dashboard MUI contexts
import { useArgonController } from "context";

function Slide({ name, active, notes, url, thumb, noGutter }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default : grey[100],
      })}
    >
      <ArgonBox width="100%" display="flex" flexDirection="column">
        {/* <img src={thumb} alt="" /> */}
        <div
          style={{
            backgroundImage: `url(${thumb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100px",
          }}
        ></div>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
          <ArgonTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </ArgonTypography>

          <ArgonBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
          >
            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;Delete
              </ArgonButton>
            </ArgonBox>
            <ArgonButton variant="text" color="dark">
              <Icon>edit</Icon>&nbsp;Edit
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Active?:&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {active}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            notes:&nbsp;&nbsp;&nbsp;
            <ArgonTypography variant="caption" fontWeight="medium">
              {notes}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="caption" color="text">
          url:&nbsp;&nbsp;&nbsp;
          <ArgonTypography variant="caption" fontWeight="medium">
            {url}
          </ArgonTypography>
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of Slide
Slide.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Slide
Slide.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Slide;

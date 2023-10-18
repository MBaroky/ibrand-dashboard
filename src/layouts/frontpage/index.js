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

// @mui material components
import Grid from "@mui/material/Grid";

// iBrand Dashboard MUI components
import ArgonBox from "components/ArgonBox";

// Billing page components
import BaseLayout from "layouts/frontpage/components/BaseLayout";
import BillingInformation from "layouts/frontpage/components/BillingInformation";
import Transactions from "layouts/frontpage/components/Transactions";

function FrontPage() {
  return (
    <BaseLayout stickyNavbar>
      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </BaseLayout>
  );
}

export default FrontPage;

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import NavPills from "../../components/NavPills";

import styles from "./AboutMeStyle";

const useStyles = makeStyles(styles);

export default function Aboutme() {
  const classes = useStyles();
  return (
      <div id="aboutme">
          <div className={classes.title}>
              <h3>About Me</h3>
          </div>
          <div className={classes.title}>
              <h3>
                  <small>With Icons</small>
              </h3>
          </div>
          <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                  <NavPills
                      color="rose"
                      horizontal={{
                          tabsGrid: { xs: 12, sm: 2, md: 2 },
                          contentGrid: { xs: 12, sm: 10, md: 10 }
                      }}
                      tabs={[
                          {
                              tabButton: "Dashboard",
                              tabIcon: Dashboard,
                              tabContent: (
                                  <span>
                                      <p>
                                          Collaboratively administrate empowered markets via
                                          plug-and-play networks. Dynamically procrastinate B2C
                                          users after installed base benefits.
                    </p>
                                      <br />
                                      <p>
                                          Dramatically visualize customer directed convergence
                                          without revolutionary ROI. Collaboratively
                                          administrate empowered markets via plug-and-play
                                          networks. Dynamically procrastinate B2C users after
                                          installed base benefits.
                    </p>
                                      <br />
                                      <p>
                                          Dramatically visualize customer directed convergence
                                          without revolutionary ROI. Collaboratively
                                          administrate empowered markets via plug-and-play
                                          networks. Dynamically procrastinate B2C users after
                                          installed base benefits.
                    </p>
                                  </span>
                              )
                          },
                          {
                              tabButton: "Schedule",
                              tabIcon: Schedule,
                              tabContent: (
                                  <span>
                                      <p>
                                          Efficiently unleash cross-media information without
                                          cross-media value. Quickly maximize timely
                                          deliverables for real-time schemas.
                    </p>
                                      <br />
                                      <p>
                                          Dramatically maintain clicks-and-mortar solutions
                                          without functional solutions. Dramatically visualize
                                          customer directed convergence without revolutionary
                                          ROI. Collaboratively administrate empowered markets
                                          via plug-and-play networks. Dynamically procrastinate
                                          B2C users after installed base benefits.
                    </p>
                                  </span>
                              )
                          }
                      ]}
                  />
              </GridItem>
          </GridContainer>
      </div>
  );
}

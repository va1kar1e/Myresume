import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";

import styles from "./AboutMeStyle";

const useStyles = makeStyles(styles);

const   image1 = "",
        image2 = "",
        image3 = "";

export default function Aboutme() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
      <div id="aboutme">
          <div className={classes.title}>
              <h3>About Me</h3>
          </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
                    <Card carousel>
                    <Carousel {...settings}>
                        <div>
                        <img src={image1} alt="First slide" className="slick-image" />
                        <div className="slick-caption">
                            <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                            </h4>
                        </div>
                        </div>
                        <div>
                        <img
                            src={image2}
                            alt="Second slide"
                            className="slick-image"
                        />
                        <div className="slick-caption">
                            <h4>
                            <LocationOn className="slick-icons" />
                            Somewhere Beyond, United States
                            </h4>
                        </div>
                        </div>
                        <div>
                        <img src={image3} alt="Third slide" className="slick-image" />
                        <div className="slick-caption">
                            <h4>
                            <LocationOn className="slick-icons" />
                            Yellowstone National Park, United States
                            </h4>
                        </div>
                        </div>
                    </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2>Completed with examples</h2>
                    <h4>
                    The kit comes with three pre-built pages to help you get started
                    faster. You can change the text and images and you{"'"}re good to
                    go. More importantly, looking at them will give you a picture of
                    what you can build with this powerful kit.
                    </h4>
                </GridItem>
            </GridContainer>
      </div>
  );
}

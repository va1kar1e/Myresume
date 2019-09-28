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

const image1 = process.env.PUBLIC_URL  + "assets/bg.jpg",
    image2 = process.env.PUBLIC_URL  + "assets/bg2.jpg",
    image3 = process.env.PUBLIC_URL  + "assets/bg3.jpg";

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
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <h2>About me</h2>
                    <h4 className={classes.aboutMeContent}>
                        Hi, My name is Siwanont Sittinam. You can be called me Books. I am a Computer Engineer. I am enthusiasm, good collaboration, and enjoy challenging myself. I like learning new experiences to know myself better and expose myself to new ideas. My hobbies is a Photograph. I interested in Network, Information Security, and Data Analytics. 
                    </h4>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
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
      </div>
  );
}

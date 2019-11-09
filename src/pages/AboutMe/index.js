import React, { Fragment } from "react";
// react component for creating beautiful carousel
// import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
// import Card from "../../components/Card/Card";
import ImageButton from "../../components/ImageButton";

import styles from "./AboutMeStyle";
const useStyles = makeStyles(styles);

const getVal = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

export default function Aboutme(props) {
    const classes = useStyles();
    const { content } = props;

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true
    // };

    const images = getVal(content, ['image']);

    return (
        <div id="aboutme">
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <h2>About me</h2>
                    <h4 className={classes.aboutMeContent}>
                        {getVal(content, ['intro'])}
                    </h4>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                {/* <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}> */}
                {images ? <ImageButton title="Hire Me" images={images[0]} width="50%" /> : <Fragment></Fragment>}
                    {/* <Card carousel>
                        <Carousel {...settings}>
                            {images ? images.map((image, index) => (
                                <Fragment key={index}>
                                    <img src={image} alt={"slide" + index} className="slick-image" />
                                    <div className="slick-caption">
                                        <h4>
                                            <LocationOn className="slick-icons" />
                                            ME
                                        </h4>
                                    </div> 
                                </Fragment>
                            )) : <Fragment></Fragment> }
                        </Carousel>
                    </Card> */}
                {/* </GridItem> */}
            </GridContainer>
        </div>
    );
}

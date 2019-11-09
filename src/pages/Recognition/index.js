import React, { Fragment } from "react";
// react component for creating beautiful carousel
// import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import ImageButton from "../../components/ImageButton";

import styles from "./recognitionStyle";
const useStyles = makeStyles(styles);

const getVal = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

export default function Recognition(props) {
    const classes = useStyles();
    const { content } = props;
    const images = getVal(content, ['image']);

    return (
        <div id="recognition">
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <h2>Recognitions</h2>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center" className={classes.root}>
                {images ? <ImageButton title="Hire Me" images={images[0]} width="25%" /> : <Fragment></Fragment>}
                {images ? <ImageButton title="Hire Me" images={images[0]} width="25%"/> : <Fragment></Fragment>}
            </GridContainer>
        </div>
    );
}

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

import styles from "./educationStyle";
const useStyles = makeStyles(styles);

const getVal = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

export default function Recognition(props) {
    const classes = useStyles();

    return (
        <div id="education">
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <h2>Education</h2>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
                </GridItem>
            </GridContainer>
        </div>
    );
}

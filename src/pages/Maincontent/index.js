import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header";
// import GridContainer from "../../components/Grid/GridContainer.js";
// import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax";
// sections for this page
import HeaderLinks from "../../components/HeaderLinks";

import styles from "./mainContentStyle";
const useStyles = makeStyles(styles);

function MainContent(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="SIwanont's Resume"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("")}>
                {/* <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Material Kit React.</h1>
                                <h3 className={classes.subtitle}>
                                    A Badass Material-UI Kit based on Material Design.
                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div> */}
            </Parallax>
        </div>
    );
}

export default MainContent;

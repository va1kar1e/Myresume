import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
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
                brand="Siwanont's Resume"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={ process.env.PUBLIC_URL + "assets/img/bg4.jpg" } >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Siwanont Sittinam</h1>
                                <h3 className={classes.subtitle}>
                                    Network Engineer
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <Footer />
        </div>
    );
}

export default MainContent;

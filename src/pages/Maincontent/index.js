import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

// core components
import Header from "../../components/Header";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
// sections for this page
import HeaderLinks from "../../components/HeaderLinks";
import AboutMe from "../AboutMe"

import styles from "./mainContentStyle";
const useStyles = makeStyles(styles);

// Image Path For Firebase hosting
// const imgpath = "https://firebasestorage.googleapis.com/v0/b/valkariesite.appspot.com/o/assets%2Fbg4.jpg?alt=media&token=f46608af-eaec-4c68-ae4d-b878eb027572"
// Image Path For Dev
const imgpath = process.env.PUBLIC_URL + "assets/bg4.jpg"
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
            <Parallax image={ imgpath } >
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
            
            <div className={classNames(classes.main, classes.mainRaised)}>
                <AboutMe />
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;

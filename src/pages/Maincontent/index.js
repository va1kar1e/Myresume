import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import firebase from "../../firebaseConfig";
// core components
import Header from "../../components/Header";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Parallax from "../../components/Parallax";
import Footer from "../../components/Footer";
// sections for this page
import HeaderLinks from "../../components/HeaderLinks";
import AboutMe from "../AboutMe";
import Experience from "../Experience";

import styles from "./mainContentStyle";
const useStyles = makeStyles(styles);

// Image Path For Firebase hosting

// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();

// Create a storage reference from our storage service
// const storageRef = storage.ref();
// const assetsStorage = storageRef.child('assets');
// const imgpath = assetsStorage.child('images/headerBG.jpg').fullPath;

// Image Path For Dev
const imgpath = process.env.PUBLIC_URL + "assets/headerBG.jpg"

// console.log(imgpath)

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
                                <h2 className={classes.subtitle}>
                                    Network Engineer
                                </h2>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <AboutMe />
                        <Experience />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;

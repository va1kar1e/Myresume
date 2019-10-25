import React, { useReducer, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import firebase from "../../firebaseConfig";
// import Header from "../../components/Header";
// import GridContainer from "../../components/Grid/GridContainer";
// import GridItem from "../../components/Grid/GridItem";
// import Parallax from "../../components/Parallax";
// import Footer from "../../components/Footer";
// sections for this page
// import HeaderLinks from "../../components/HeaderLinks";
// import AboutMe from "../AboutMe";
// import Experience from "../Experience";

import styles from "./mainContentStyle";
const useStyles = makeStyles(styles);

// const dbCollection = firebase.firestore().collection("XuHyresj35jIOyPma7CGyg");
// const assetsStorage = firebase.storage().ref().child('assets');

const initialState = {
    isFetching: false,
    content: {},
    link: {}
}

const reducer = (state, { type, link, content }) => {
    switch (type) {
        case 'FETCH_PENDING':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isFetching: false,
                link: link,
                content: content
            }
        default:
            return state
    }
}

function MainContent(props) {
    
    const classes = useStyles();
    const { ...rest } = props;
    
    const [{ content, link, isFetching }, dispatch] = useReducer(reducer, initialState);
    const imgpath = "";
    // assetsStorage.child(link.headerbg).fullPath;
    
    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_PENDING'
    //     })

    //     const unsubscribe = dbCollection.onSnapshot(ss => {
    //         let docs = {}

    //         ss.forEach(document => {
    //             docs[document.id] = document.data()
    //         })

    //         dispatch({
    //             type: 'FETCH_SUCCESS',
    //             link: docs["53vS5ZZJjVjIp4BpEOys"],
    //             content: docs["bbfUZmBQseGvDJf8dPJ7"]
    //         })
    //     });

    //     return () => {
    //         unsubscribe()
    //     }

    // }, []);

    // if (isFetching) {
    //     return (
    //         <div>
    //             <p>....Loading....</p>
    //         </div>
    //     );
    // }
    // console.log()
    return (
        <div>
            {imgpath}
            {/* <Header
                brand={content.headername}
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            /> */}
            
            {/* <Parallax image={imgpath} >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>{content.name + " " + content.surname}</h1>
                                <h2 className={classes.subtitle}>
                                    {content.job}
                                </h2>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax> */}
            {/* <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <AboutMe /> */}
                        {/* <pre> {JSON.stringify(content)} </pre>
                        <pre> {JSON.stringify(link)} </pre> */}
                        {/* <Experience /> */}
                    {/* </div>
                </div>
            </div>
            <Footer /> */}
        </div>
    );
}

export default MainContent;

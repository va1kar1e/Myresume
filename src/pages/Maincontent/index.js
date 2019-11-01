import React, { useState, useReducer, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import firebase from "../../firebaseConfig";
import Header from "../../components/Header";
import Parallax from "../../components/Parallax";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Footer from "../../components/Footer";
// sections for this page
import HeaderLinks from "../../components/HeaderLinks";
// import AboutMe from "../AboutMe";
// import Experience from "../Experience";

import styles from "./mainContentStyle";
const useStyles = makeStyles(styles);

const db = firebase.firestore(), 
    dbCollection = db.collection("XuHyresj35jIOyPma7CGyg");

const storage = firebase.storage().ref(),
    assetsStorage = storage.child('assets');

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PENDING':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data : {
                    content: action.content
                }
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

const usePostLists = () => {
    const [state, dispatch] = useReducer(reducer, {
        isLoading: false,
        isError: false,
        data: {
            content: []
        }
    });

    const [link, setLink] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_PENDING' });

            try {
                await dbCollection.onSnapshot(ss => {
                    for (const [key, value] of Object.entries(ss.docs[0].data())) {
                        console.log(key, value);
                        assetsStorage.child(value).getDownloadURL().then(function (url) {
                            setLink(l => ({
                                ...l,
                                [key] : url
                            }));
                        })
                    }

                    dispatch({
                        type: 'FETCH_SUCCESS',
                        content: ss.docs[1].data()
                    })
                });
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE' });
            }
        };

        fetchData();
    }, []);

    return {
        fetching: state.isFetching,
        link: link, 
        content: state.data.content,
    };
};

function MainContent(props) {
    
    const classes = useStyles();
    const { ...rest } = props;
    
    const { fetching, link, content} = usePostLists();
    // console.log(link, content)

    if (fetching) {
        return (
            <div>
                <p>....Loading....</p>
            </div>
        );
    }

    return (
        <div>
            <Header
                brand={content.headername}
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={link.headerbg} >
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
            </Parallax>
            {/* <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <AboutMe /> */}
            {/* <pre> {JSON.stringify(content)} </pre>
                        <pre> {JSON.stringify(link)} </pre> */}
            {/* <Experience /> */}
            {/* </div>
                </div>
            </div>*/}
            <Footer /> 
        </div>
    );
}

export default MainContent;

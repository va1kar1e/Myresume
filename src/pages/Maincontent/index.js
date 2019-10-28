import React, { useState, useReducer, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import firebase from "../../firebaseConfig";
import Header from "../../components/Header";
import Parallax from "../../components/Parallax";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
// import Footer from "../../components/Footer";
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

const initialState = {
    isFetching: false,
    content: {},
    link: {}
}

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
                link: action.link,
                content: action.content
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
    // const [state, dispatch] = useReducer(dataFetchReducer, {
    //     isLoading: false,
    //     isError: false,
    //     data: {
    //         posts: []
    //     }
    // });

    // const [search, setSearch] = useState(1);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         dispatch({ type: 'FETCH_INIT' });

    //         try {
    //             const result = await axios(
    //                 `https://jsonplaceholder.typicode.com/posts?userId=${search}`,
    //             );

    //             dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    //         } catch (error) {
    //             dispatch({ type: 'FETCH_FAILURE' });
    //         }
    //     };

    //     fetchData();
    // }, [search]);

    // return [{ state, setSearch }];
}

function MainContent(props) {
    
    const classes = useStyles();
    const { ...rest } = props;
    
    const [{ content, link, isFetching }, dispatch] = useReducer(reducer, initialState);
    let imgpath = "";

    useEffect(() => {
        dispatch({
            type: 'FETCH_PENDING'
        })

        dbCollection.onSnapshot(ss => {
            let docs = {}

            ss.forEach(document => {
                docs[document.id] = document.data()
            })

            dispatch({
                type: 'FETCH_SUCCESS',
                link: docs["53vS5ZZJjVjIp4BpEOys"],
                content: docs["bbfUZmBQseGvDJf8dPJ7"]
            })
        });

        const imgst = assetsStorage.child(link.headerbg).getDownloadURL().then(function (url) {
        //     imgpath = url;
        //     console.log(imgpath)
        // })
        return () => {
            imgst()
        }

    }, []);

    if (isFetching) {
        return (
            <div>
                <p>....Loading....</p>
            </div>
        );
    }
    if (link.headerbg) {
        assetsStorage.child(link.headerbg).getDownloadURL().then(function (url) {
            imgpath = url;
            console.log(imgpath)
        })
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
            {imgpath ?
                <Parallax image={imgpath} >
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
            : "AA"}
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

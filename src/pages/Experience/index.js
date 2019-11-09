import React, { Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import Collapse from "../../components/Collapse"

// Timeline Component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import styles from "./ExperienceStyle";

const useStyles = makeStyles(styles);

const getVal = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

export default function Experience(props) {
    const classes = useStyles();
    const {content, logo} = props;
    // consoles.log(content)
    const getTimelineExp = (key, value, school) => {
        // Add data in this format
        // className: ""
        // content: ""
        // contentArrowStyle: { borderRight: "" }
        // contentStyle: { background: "", color: "" }
        // date: ""
        // iconStyle: { background: "", color: "" }
        // subtitle: ""
        // title: ""

        // storage/images
        // images/...
        // 440x140px
        
        return (
            <VerticalTimelineElement
                key = {key}
                className={value.className}
                contentStyle={{ background: value.contentStyle.background, color: value.contentStyle.color }}
                contentArrowStyle={{ borderRight: value.contentArrowStyle.borderRight }}
                date={value.date}
                iconStyle={{ background: value.iconStyle.background, color: value.iconStyle.color }}
                icon={school ? <SchoolIcon /> : <WorkIcon />}
            >
                <Collapse contentStyle={value.contentStyle} logo={logo[value.className.substring(("timeline-").length, value.className.length) + "logo"]} title={value.title} subtitle={value.subtitle} keyword={value.keyword} content={value.content} />
            </VerticalTimelineElement>
        )
    }

    return (
        <div id="experience">
            <div className={classes.title}>
                <h2>Experience</h2>
            </div>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.marginAuto}>
                    <VerticalTimeline >
                        {content ? [
                            getTimelineExp(0, getVal(content, ['ref']), false),
                            getTimelineExp(1, getVal(content, ['mike']), true),
                            getTimelineExp(2, getVal(content, ['kit']), true),
                            getTimelineExp(3, getVal(content, ['pt']), false),
                            ] : <Fragment></Fragment>
                        }
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<StarIcon />}
                        /> 
                    </VerticalTimeline>
                </GridItem>
            </GridContainer>
        </div>
    );
}

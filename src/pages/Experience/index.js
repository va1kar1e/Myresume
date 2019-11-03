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
    const {content} = props;

    const getTimelineExp = (value, school) => {
        // Add data in this format
        // className: ""
        // content: ""
        // contentArrowStyle: { borderRight: "" }
        // contentStyle: { background: "", color: "" }
        // date: ""
        // iconStyle: { background: "", color: "" }
        // subtitle: ""
        // title: ""
        return (
            <VerticalTimelineElement
                className={value.className}
                contentStyle={{ background: value.contentStyle.background, color: value.contentStyle.color }}
                contentArrowStyle={{ borderRight: value.contentArrowStyle.borderRight }}
                date={value.date}
                iconStyle={{ background: value.iconStyle.background, color: value.iconStyle.color }}
                icon={school ? <SchoolIcon /> : <WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">{value.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{value.subtitle}</h4>
                <p class={classes.contentTimeline}>
                    {value.content}
                </p>
            </VerticalTimelineElement>
        )
    }

    return (
        <div id="experience">
            <div className={classes.title}>
                <h2>Experience</h2>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                    <VerticalTimeline >
                        {content ? [
                            getTimelineExp(getVal(content, ['ref']), false),
                            getTimelineExp(getVal(content, ['ku']), true),
                            // getTimelineExp(getVal(content, ['kit']), true),
                            // getTimelineExp(getVal(content, ['pt']), false),
                            // getTimelineExp(getVal(content, ['ds']), true)
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

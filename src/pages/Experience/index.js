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
import NavPills from "../../components/NavPills";

// Timeline Component
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import styles from "./ExperienceStyle";

const useStyles = makeStyles(styles);

const getVal = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}

const getTimelineExp = (value, school) => {
    return (
        <VerticalTimelineElement
            className={value.className}
            contentStyle={{ background: value.contentStyle.background }}
            contentArrowStyle={{ borderRight: value.contentArrowStyle.borderRight }}
            date={value.date}
            iconStyle={{ background: value.iconStyle.background, color: value.iconStyle.color }}
            icon={school ? <SchoolIcon /> : <WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">{value.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{value.subtitle}</h4>
            <p>
                {value.content}
            </p>
        </VerticalTimelineElement>
    )
}

export default function Experience(props) {
    const classes = useStyles();
    const {content} = props;
    console.log(content)

    return (
        <div id="experience">
            <div className={classes.title}>
                <h2>Experience</h2>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                    <VerticalTimeline >
                        {content ? [
                            getTimelineExp(getVal(content, ['ds']), true), 
                            getTimelineExp(getVal(content, ['ds']), false)] 
                            : <Fragment></Fragment>
                        }
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<StarIcon />}
                        /> 
                    </VerticalTimeline>

                    {/* <NavPills
            color="info"
            horizontal={{
                tabsGrid: { xs: 12, sm: 2, md: 2 },
                contentGrid: { xs: 12, sm: 10, md: 10 }
            }}
            tabs={[
                {
                    tabButton: "Refinitiv",
                    tabIcon: Work,
                    tabContent: (
                        <span>
                            <p>
                                <h3>Refinitiv</h3>
                            </p>
                            <br />
                            <p>
                                Refinitiv is the Company
                            </p>
                            <p>
                                Position : Technology Graduate Trainee - Network Engineer
                            </p>
                            <p>
                                Department : Technology Operation 
                            </p>
                            <p>
                                Team : Data Center Operation Network Change
                            </p>
                            <p>
                                Period : 2019 (Present)
                            </p>
                        </span>
                    )
                },
                {
                    tabButton: "Kyoto Institute of Technology",
                    tabIcon: School,
                    tabContent: (
                        <span>
                            <p>
                                <h3>Kyoto Institute of Technology</h3>
                            </p>
                            <br />
                            <p>
                                Kyoto Institute of Technology
                            </p>
                            <p>
                                Position : Junior Researcher
                            </p>
                            <p>
                                Department : Computer Science
                            </p>
                            <p>
                                Team : Software Engineer
                            </p>
                            <p>
                                Period : 2018 (2 Months - Internship)
                            </p>
                        </span>
                    )
                },
                {
                    tabButton: "Internet Marketing",
                    tabIcon: Work,
                    tabContent: (
                        <span>
                            <p>
                                <h3>Internet Marketing</h3>
                            </p>
                            <br />
                            <p>
                                Internet Marketing or Pantip.com
                            </p>
                            <p>
                                Position : Fullstack Developer and Data Engineer
                            </p>
                            <p>
                                Team : Data Scientist
                            </p>
                            <p>
                                Period : 2017 (1 Months - Internship, 3 Month - Outsourcing)
                            </p>
                        </span>
                    )
                },
                {
                    tabButton: "Kasetsart University",
                    tabIcon: School,
                    tabContent: (
                        <span>
                            <p>
                                <h3>Kasetsart University</h3>
                            </p>
                            <br />
                            <p>
                                Kasetsart University
                            </p>
                            <p>
                                Position : Junior Researcher
                            </p>
                            <p>
                                Department : Computer Engineering
                            </p>
                            <p>
                                Team : Massive Information and Knowledge Engineering
                            </p>
                            <p>
                                Period : 2016-2018 (3 Years)
                            </p>
                        </span>
                    )
                }
            ]}
            />*/}
                </GridItem>
            </GridContainer>
        </div>
    );
}

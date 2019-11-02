import React from "react";
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

export default function Experience() {
    const classes = useStyles();
    return (
        <div id="experience">
            <div className={classes.title}>
                <h2>Experience</h2>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)' }}
                            contentArrowStyle={{ borderRight: '20px solid  rgb(33, 150, 243)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            // contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                            <p>
                                Strategy, Social Media
                            </p>
                        </VerticalTimelineElement>
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

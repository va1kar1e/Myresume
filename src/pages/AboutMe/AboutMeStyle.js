import { container, title } from "../../components/material-kit-react"

const ExperienceStyle = {
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    section: {
        padding: "70px 0"
    },
    container: {
        ...container,
        textAlign: "center !important"
    },
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important"
    },
    aboutMeContent: {
        textAlign: "justify",
        textIndent: "75px",
        letterSpacing: "1px",
        fontWeight: "500",
    }
};

export default ExperienceStyle;

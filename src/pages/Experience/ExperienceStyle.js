import { container, title } from "../../components/material-kit-react"
import './style.min.css';

const ExperienceStyle = {
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    contentTimeline : {
        textAlign: "justify",
        textIndent: "40px"
    }
};

export default ExperienceStyle;

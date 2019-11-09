import { container, title } from "../../components/material-kit-react"

const SkillStyle = {
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
    }
};

export default SkillStyle;
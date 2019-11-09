import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    media: {
        height: 140,
    },
    expand: {
        display: "inline-block",
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    contentTimeline: {
        textAlign: "justify",
        textIndent: "40px",
        padding: "0.5em"
    },
    contentText: { 
        padding: "0px 10px 0px 10px"
    }
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const { contentStyle, logo, title, subtitle, content, keyword} = props;
     
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                className={classes.media}
                image={logo}
                title={title}
            />
            <CardContent style={{ background: contentStyle.background, color: contentStyle.color }}>
                <Typography gutterBottom variant="h6">
                    {title}
                </Typography>
                <Typography variant="body1">
                    {subtitle}
                </Typography>
            </CardContent>
            <CardActions style={{ background: contentStyle.background }}>
                {expanded ?
                    <Button size="medium" style={{ color: contentStyle.color }}>
                        {true ? "Keyword" : "Full Text"}
                    </Button>
                :<Fragment></Fragment>}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ color: contentStyle.color }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.contentTimeline} style={{ background: contentStyle.background }}>
                    <Typography paragraph className={classes.contentText} style={{ color: contentStyle.color, marginTop: "0em"}} >
                        { false ? keyword : content }
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
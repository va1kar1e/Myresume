import React from 'react';
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
        float: "right",
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
        textIndent: "40px"
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
            <CardActions style={{ background: contentStyle.background }}>
                <CardContent style={{ color: contentStyle.color }}>
                    <Typography gutterBottom variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {subtitle}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {keyword}
                    </Typography>
                </CardContent>
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
                <CardContent style={{ background: contentStyle.background }}>
                    <CardActions>
                        <Button size="small" color="primary">
                            Keyword
                        </Button>
                        <Button size="small" color="primary">
                            Full Text
                         </Button>
                    </CardActions>
                    <Typography paragraph className={classes.contentTimeline} style={{ color: contentStyle.color }}>
                        { content }
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
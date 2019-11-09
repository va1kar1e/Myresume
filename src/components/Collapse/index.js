import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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

    const { color, image, title, subtitle, content} = props;
     
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card} style={{ background:color}}>
            <CardMedia
                component="img"
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2" component="p">
                    {subtitle}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className={classes.contentTimeline}>
                        { content }
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import styles from "./ImageButtonStyle";
const useStyles = makeStyles(styles);

export default function ImageButtonBases(props) {
    const classes = useStyles();
    const { title, images } = props
    return (
        <div className={classes.root}>
            <ButtonBase
                focusRipple
                key={title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: "40%"
                }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${images})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        <Link href="mailto:siwanont1@gmail.com" target="_blank" className={classes.linkButton}>
                            {title}
                        </Link>
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
        </div>
    );
}
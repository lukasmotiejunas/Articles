import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    box: {
        position: 'absolute',
        top: '-40px',
        width: '93%',
        right: '13px',
        left: '13px',

    },
    photo: {
        boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
        width: '100%',

    },
    head: {
        fontSize: '1.1rem',
    },
    description: {
        lineHeight: '1.5em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    date: {
        marginTop: '10px'
    }
});


const Article = ({ publishedAt, title, description, image }) => {
    const classes = useStyles();

    const date = publishedAt.slice(0, 10);


    return (
        <div style={{ position: 'relative', marginTop: '30px' }}>
            <Card style={{ paddingTop: '136px' }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" className={classes.head} component="h4">
                        {title}
                    </Typography>
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <div className={classes.date}>
                        {date}
                    </div>
                </CardContent>
            </Card>
            <div className={classes.box} >
                <CardMedia
                    component="img"
                    alt="Image"
                    height="180"
                    className={classes.photo}
                    image={image}
                />
            </div>
        </div>
    )
}

export default Article

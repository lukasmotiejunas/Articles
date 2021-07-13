import React, { useContext } from 'react';
import { CounterContext } from "../context/ContextRouter";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const FullArticle = ({ title, image, content, date, url }) => {
    const { setValue } = useContext(CounterContext);
    const useStyles = makeStyles({
        page: {
            marginTop: '10px'
        },
        card: {
            marginTop: '20px',
        }
    });

    function handleClick() {
        setValue('home')
    }

    const classes = useStyles();
    const published = date.slice(0, 10);

    return (
        <div className={classes.page}>
            <Button variant="contained" color="primary" onClick={handleClick}>Go back</Button>
            <Container className={classes.card} maxWidth="md">
                <Card>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="400"
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <p>{published}</p>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default FullArticle

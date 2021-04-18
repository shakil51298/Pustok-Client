import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewCard.css'
import { Fade } from 'react-reveal';
import { motion } from 'framer-motion';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



const ReviewCard = ({ userReviews, userEmail, userImg }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { Occupation, UserName, description } = userReviews
    return (
        <Fade duration={1000} distance="40px" bottom >
            <div className="col-md-4" whileTap={{ scale: '.9' }}>
                <Card className={classes.root} className="p-1 shadow-lg" >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img width="100%" src={userImg} alt="review img" />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={UserName}
                        subheader="September 14, 2016"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            expand this card for seeing full review
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
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
                            {description}
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        </Fade >
    );
};

export default ReviewCard;




{/* <div className="">
    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
    <FontAwesomeIcon className="ratingIcon" icon={faStar} />
    <FontAwesomeIcon className="ratingIcon" icon={faStarHalfAlt} />
</div> */}
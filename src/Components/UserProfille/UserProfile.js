import React, { useContext } from 'react';
import { userContext } from '../../App';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from 'react-router-dom';
import NavigationBar from '../CommonComponents/NavigationBar/NavigationBar';
import Fade from 'react-reveal';

const UserProfile = () => {
    const [loggedInUser, setloggedInUser] = useContext(userContext)

    const useStyles = {
        maxWidth: "345px",
        margin: 'auto',
    }

    const center = {
        margin: "auto",
        padding: "10px"
    }
    return (
        <Fade>
            <div className=" ">
                <NavigationBar />
                <div className="mt-5">
                    <h3 className="text-danger text-center mt-3">
                        Profile
            </h3>
                    <Card style={useStyles} className="mt-3">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="280"
                                image={loggedInUser.photoURL}
                                title="Profille Picture"
                                borderRadius="50%"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {loggedInUser.displayName}<CheckCircleIcon style={{ color: 'green' }} />
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {loggedInUser.email}
                                </Typography>
                                <Typography variant="body2" color="secondary" component="p">
                                    Verified
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <Link to="someting" size="small" color="primary"> share</Link>
                            </Button>
                            <Button size="small" color="primary">
                                <Link to="someting" size="small" color="primary"> more</Link>
                            </Button>
                            <Button size="small" color="primary">
                                <Link to="/login" size="small" color="primary"> sign-out</Link>
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </Fade>
    );
};

export default UserProfile;
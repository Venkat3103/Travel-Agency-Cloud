import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from "@material-ui/core/styles";

import axios from "axios";

const styles = (theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: '40%',

    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },


    },
});



async function fetchplaceid(id) {
    let placeDetails = null;
    await axios
      .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,address_component,formatted_address,business_status,photo,opening_hours,price_level,user_ratings_total,review&key=AIzaSyBFPJStQVwqsno0ArmAiGUtJ6AmXF4tNeE`)
      .then((res) => {
        placeDetails = res.result;

    console.log(placeDetails.reviews[0]);

      })
      .catch((err) => {
        console.log(err);
      });
    return placeDetails;
}




class Rajasthan extends React.Component {

    state = {
        tiers: [
            {
                title: 'Desert Safari Camp',
                description: ['Take a tour in the desserts of Jaisalmar. The major fun activity in the desserts if Rajasthan'],
                buttonText: 'View Details',
                buttonVariant: 'outlined',
                placeid: "ChIJQROfkYG-RzkREJ2DcoZIwko"
            },
            {
                title: 'Hawa Mahal',
                description: [
                    'Built using the Red and Pink sandstone, this amazing palace stands tall in the city of Jaipur. This is one spot that tourists dont miss when they visit Rajasthan',
                ],
                buttonText: 'View Details',
                buttonVariant: 'outlined',
                placeid: "ChIJpQvTG0uxbTkRDLLMHlNdDoY"

            },
            {
                title: 'Pushkar Lake',
                description: [
                    'A sacred lake for the Hindu Devotees who gather in thousands to take a dip in its holy water. Its all extravaganza during the Pushkar fair which is worth the time!',
                ],
                buttonText: 'View Details',
                buttonVariant: 'outlined',
                placeid: "ChIJJ6cbdiLdazkRd5shyEnqla8"
            },
            {
                title: 'Radisson Blu',
                description: ['In the hottest of the cities, Radisson Blu is one cool luxurious place of stay preferred by the tourists'],
                buttonText: 'View Details',
                buttonVariant: 'outlined',
                placeid: "ChIJczUCRO-1bTkRpZ6wbHTQtTQ"
            },

        ],

        placeDetails: "",
        openDialog: false,
        reviews: [{text:null}],
        photos: [{photo_reference:null},{photo_reference:null}]

    }

    handleClose = (event) => {
        this.setState({ openDialog: false });
    };

    handleDialogOpen = async (event,id) => {
        event.preventDefault();
        let resdata = await fetchplaceid(id);
        this.setState({ placeDetails: resdata, openDialog: true, reviews: resdata.reviews });
        console.log(this.state);
    };


    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            The Wanderers Tours & Travels
            </Typography>

                    </Toolbar>
                </AppBar>
                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom>
                        TO GET FULL ITINERARY, CLICK THE BUTTON BELOW
                    </Typography>
                    <Button fullWidth color="primary" >
                        Download Itinerary
                    </Button>
                </Container>
                {/* End hero unit */}
                <React.Fragment>
                    <CssBaseline />
                    <AppBar position="absolute" color="default" className={classes.appBar}>
                    </AppBar>

                </React.Fragment>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                    Major Attractions<br></br><br></br>
                </Typography>
                <Container maxWidth="*-md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {this.state.tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={6} md={6}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth variant={tier.buttonVariant} color="primary"  onClick={(e) => this.handleDialogOpen(e,tier.placeid)}>
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Dialog
                    open={this.state.openDialog}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Name: {this.state.placeDetails.name}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Address: {this.state.placeDetails.formatted_address}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Average User Rating: {this.state.placeDetails.rating}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Total Ratings: {this.state.placeDetails.user_ratings_total}
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description">
                            Recent Review: {this.state.reviews[0].text}
                        </DialogContentText>
                        <Grid container spacing={2} >
                            <Grid item xs={6}><img src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${this.state.photos[0].photo_reference}&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyBFPJStQVwqsno0ArmAiGUtJ6AmXF4tNeE`} height="200px" width="200px" /></Grid>
                            <Grid item xs={6}><img src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${this.state.photos[1].photo_reference}&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyBFPJStQVwqsno0ArmAiGUtJ6AmXF4tNeE`} height="200px" width="200px" /></Grid>
                        </Grid>
                    </DialogContent>
                    
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                        
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Rajasthan);
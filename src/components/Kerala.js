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

//import axios from "axios";

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
    // await axios
    //   .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${id}&fields=name,rating,address_component,formatted_address,business_status,photo,opening_hours,price_level,user_ratings_total,review&key=AIzaSyBFPJStQVwqsno0ArmAiGUtJ6AmXF4tNeE`)
    //   .then((res) => {
    //     placeDetails = res.result;
    placeDetails = {
        "address_components": [
            {
                "long_name": "Varkala Beach",
                "short_name": "Varkala Beach",
                "types": ["natural_feature", "establishment"]
            },
            {
                "long_name": "Kerala",
                "short_name": "KL",
                "types": ["administrative_area_level_1", "political"]
            },
            {
                "long_name": "India",
                "short_name": "IN",
                "types": ["country", "political"]
            }
        ],
        "business_status": "OPERATIONAL",
        "formatted_address": "Varkala Beach, Kerala, India",
        "name": "Varkala Beach",
        "photos": [
            {
                "height": 960,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/112071590904723041496\"\u003eshabana kotta\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAfdqbnSoWgeRPkrk3XiurtoD4NZzGLh5pradsxoHf73j2kaT48pDz7yGXxmpb4iatKPih8yZM-Wwxp3gbt_Vm9_ni7T0yylvQsgF0OyhjLqTsqczbETCPlxDycGNlB_-XEhDfWNXwHCnjarH2KgSiMYgOGhSTUUFYoBqza9zuq_ejtmg2V2cX0A",
                "width": 1280
            },
            {
                "height": 864,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/101206679997371931880\"\u003eAn77 k\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAU-nPgXFuIVrThwsSb7rbdTbJljxoGNxfAHvnWwJwu1N9YGcSGqR4FOSfmECHP44BaU5HU8zzbZgcsbQh1bzJLu6tPeD5q2k6BY17UoIi2efQBX4ih-7yVGeipkmr7I8jEhBF_Rh608xNV6FI5gNN7grVGhQxv5FghTH7FPUGTREa7XLz20ftqQ",
                "width": 864
            },
            {
                "height": 4000,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/101965922607137586885\"\u003eVidad Chonora\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAVe3Y4Hor6EtX8AicCjKLIXd1DL-B5fUVF2-MSOViQUfEK-DpJfL3ouj0atM0kzZgvTQDSYSvlpvoCuwyI5zeTM_uLzNdGs550EaosrYD_DWX-pfsvIgBe7-urHd4mXIbEhAbDuGlhaKkADnMIzTvilriGhRESW_cWydR_SL9gTX3eh_iq-_IJQ",
                "width": 2013
            },
            {
                "height": 2448,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/115966116277666686909\"\u003eShehna Mansoor\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAc70b5-OIRO9mq3gW0PeolxtZMdFKLG19We34RyE9DKO7esJDhgeTlqo8-7HEbc-jyVipIn5SFggcaHZPOJ9FlcDvcVGADEw9bly4RnkSzVH8MuHQg6qBer4nqgR8XkT-EhAqb-ydWx6fljoCPuMjyIvtGhQVxuaeb9aHDDvRvqmVuyBTG19_XQ",
                "width": 3264
            },
            {
                "height": 3456,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/105377642460540348575\"\u003eAvesh Siddhu\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAALiJgQo0ARZD0jljD-lf_DvPTW5h1ZzXhGrUyC4_7RUdcozZzo8TbOMK6JolQ6HDDu_LdfsSwf8v0RkiEG9zdsFnS2Mc7zKm9aAcB9xeoZamrleR4mgMqAycdMBLuTxCDEhDUe7LKTFMefBSD-OHk2uudGhRUUY7J1UjtW2ThQ1KRsYl9_yQO5g",
                "width": 4608
            },
            {
                "height": 2268,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/118393469570572430597\"\u003eYurii Krokhmal\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAieraLgSHIgAAHStTCJu1nE3cBJMPzdjGc0lHx8KiMj_ngxjT94HnIm2InCBNcQ3zJsxcD0bObuFoL_dd-bqM_KwR17HdFkfOt9HrkXyQMXf1t3w6aSUPA8k1x2Re30yxEhCimSK8EK53RvpZvIxLcZMYGhQAw5T3xA_sxMSVBw1GIQpBnaIGzw",
                "width": 4032
            },
            {
                "height": 960,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/112071590904723041496\"\u003eshabana kotta\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAWzicpKbJtm4uKy-SrMGQcGlycHS-W8C-mtUs6DorEmSboeP_IFjSL5FqboAkdBwMIyi7pI4ZUvPSd0iBYnkR1S3gCeJdYUBSeCYa1E0mi5FY627IcoiZDk1KIKaOPxA1EhBrNdwdcSL50pJTc2mGtxLNGhQiO4lr61eRIjVKB7HOODuObGW6qA",
                "width": 1280
            },
            {
                "height": 757,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/117311393447946448251\"\u003eShimi\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAR24fv6ZxMCAA5dM3yBx_yCWmYfu4kBC5igmtS6081zuf2x1RaS9LBTrMpUlMAuQJlPI85WGfdQnooE_0voMfpugw8n3mNI-ms0yrCRpLqZvIgIWdFYzPCfXEW1WiKTvaEhDjv5cn-gYMd8lR4KLBmPCuGhSGB5D_1bk_ur5Afd32hmciqCU0EQ",
                "width": 1600
            },
            {
                "height": 4032,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/110957652329044490281\"\u003eKevin O&#39; Donovan\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAvmjicHqAR1kz3NSfQGPwfaPPBFSphsQ-cugiZEfDq-8l-7ZyHhcwb9IMTJ1fJGMX-ZOJ0KJZ1X4yuObTXiLQs0hr_6aDArSnhragICLQxQCJAJIZRfM7TGfwIFBFFo60EhCBJmSP0DtEdAX6sYYyqah1GhT4dfuul3ZxJHRUkD2LQo40zRisbg",
                "width": 2268
            },
            {
                "height": 4160,
                "html_attributions": [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/116094007523078644515\"\u003eMaPan\u003c/a\u003e"
                ],
                "photo_reference": "CmRaAAAAJZgl72Zdqua9l2hwusXi2wQQp5w5os0yPO5IHML38umCYtTjKbjagUky8KA4sr8z6gtt8LuF1kTkehag_q5k30eVrj0cY0VjG8Djy2L1ojkcAb6ZlirVBfhPrt7DurfMEhDbwcNQSS_0xwU3-Uua-V7aGhRtDpQDevtfbyriRJq2HghnmfLIxw",
                "width": 3120
            }
        ],
        "rating": 4.6,
        "reviews": [
            {
                "author_name": "Harry Stephen",
                "author_url": "https://www.google.com/maps/contrib/112128975093765075426/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Ghm9Ej5jLGRRp7OmKp9DueySl6Af2JDh9TQ3pC4aTM=s128-c0x00000000-cc-rp-mo-ba4",
                "rating": 5,
                "relative_time_description": "a week ago",
                "text": "Lovely place for a break from busy life!",
                "time": 1604396633
            },
            {
                "author_name": "Rashmy Abraham",
                "author_url": "https://www.google.com/maps/contrib/115175875046212251751/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14GjRBu7pOUU1ArTPJBBv-VKRjfW9IjFwfXsh_7tFew=s128-c0x00000000-cc-rp-mo-ba3",
                "rating": 5,
                "relative_time_description": "in the last week",
                "text": "Is this beach open now?",
                "time": 1604981792
            },
            {
                "author_name": "Muflih S",
                "author_url": "https://www.google.com/maps/contrib/113274470281865160600/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Ggb0VuPE3N4zlB8AwA2JGlHwxXmdLJbj9E5NyGvnw=s128-c0x00000000-cc-rp-mo-ba4",
                "rating": 5,
                "relative_time_description": "a month ago",
                "text": "Home be like ❣️🥰",
                "time": 1602699111
            },
            {
                "author_name": "DReAMcATcHER GAmInG",
                "author_url": "https://www.google.com/maps/contrib/102938332576095544972/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Gh2d7rKtnq9JKzP-_mbgCSPCRNWQeKU0YMZ5p2FjQ=s128-c0x00000000-cc-rp-mo-ba2",
                "rating": 5,
                "relative_time_description": "a month ago",
                "text": "Unforgettable views and the beauty of sea. Magical place............",
                "time": 1601132043
            },
            {
                "author_name": "GM Life Counseling Clinic - George Mathew Vadayattu",
                "author_url": "https://www.google.com/maps/contrib/117815824933822791785/reviews",
                "language": "en",
                "profile_photo_url": "https://lh3.googleusercontent.com/a-/AOh14Gi-HPk4BbVp83czP18Ppn4J-_90hF63KFk6zQ8x6Q=s128-c0x00000000-cc-rp-mo-ba4",
                "rating": 4,
                "relative_time_description": "a week ago",
                "text": "Calm and serene... Best place for family outing..",
                "time": 1604738180
            }
        ],
        "user_ratings_total": 4203
    };

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    return placeDetails;
}




class Kerala extends React.Component {

    state = {
        tiers: [
            {
                title: 'Varkala Beach',
                price: '0',
                description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
                buttonText: 'Sign up for free',
                buttonVariant: 'outlined',
                placeid: "ChIJ2TVuNRzvBTsRmTZF4PcgmlI"
            },
            {
                title: 'Eravikulam National Park',
                // subheader: 'Most popular',
                price: '15',
                description: [
                    '20 users included',
                    '10 GB of storage',
                    'Help center access',
                    'Priority email support',
                ],
                buttonText: 'Get started',
                buttonVariant: 'contained',

            },
            {
                title: 'Mattupetty Dam',
                price: '30',
                description: [
                    '50 users included',
                    '30 GB of storage',
                    'Help center access',
                    'Phone & email support',
                ],
                buttonText: 'Contact us',
                buttonVariant: 'outlined',
            },
            {
                title: 'Cocobay Resort',
                price: '0',
                description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
                buttonText: 'Sign up for free',
                buttonVariant: 'outlined',
            },

        ],

        placeDetails: "",
        openDialog: false,

    }

    handleClose = (event) => {
        this.setState({ openDialog: false });
    };

    handleDialogOpen = async (event,id) => {
        event.preventDefault();
        let resdata = await fetchplaceid(id);
        this.setState({ placeDetails: resdata, openDialog: true });
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
                    <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Here is your Itenary
          </Typography>
                </Container>
                {/* End hero unit */}
                <React.Fragment>
                    <CssBaseline />
                    <AppBar position="absolute" color="default" className={classes.appBar}>
                    </AppBar>

                </React.Fragment>
                <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                    Explore Our Packages<br></br><br></br>
                </Typography>
                <Container maxWidth="*-md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {this.state.tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} md={4}>
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
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /mo
                      </Typography>
                                        </div>
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
                            {this.state.placeDetails.name}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Disagree
          </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
          </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}
export default withStyles(styles, { withTheme: true })(Kerala);
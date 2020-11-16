import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
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
  appBar: {
    position: 'relative',
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
}));

const tiers = [
  {
    title: 'Kerala',
    price: '14000',
    link: '/Kerala',
    description: ['5 Days', '4 Nights', 'Back Waters / Nature Park', 'House Boat Stay'],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
  {
    title: 'Andaman',
    // subheader: 'Most popular',
    price: '25000',
    link: '/Andaman',
    description: [
      '6 Days',
      '5 Nights',
      'Beach / Island Trip / Water Sports ',
      '4 star Hotel',
    ],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
  {
    title: 'Goa',
    price: '35000',
    link: '/Goa',
    description: [
      '5 Days',
      '6 Nights',
      'Scuba Dive / City Tour',
      'Beach Resort',
    ],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
  {
    title: 'Shimla',
    price: '20000',
    link: '/Shimla',
    description: ['5 Days', '6 Nights', 'Hiking / Paragliding / Ice Skating', 'Hill Cottage'],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
  {
    title: 'Kashmir',
    // subheader: 'Most popular',
    price: '40000',
    link: '/Kashmir',
    description: [
      '6 Days',
      '5 Nights',
      'Skiing / Gondola / City Tour',
      'Luxurious Boat House Stay',
    ],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
  {
    title: 'Coorg',
    price: '23000',
    link: '/Coorg',
    description: [
      '5 Days',
      '4 Nights',
      'Camping',
      'Tree House',
    ],
    buttonText: 'View Details',
    buttonVariant: 'outlined',
  },
];




const handleSubmit = (e) => {

  e.preventDefault();
  e.persist();
  let ev = e;
  console.log(e.target);
  axios
    .post(`http://localhost:3001/registeruser`, {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phoneNumber: e.target.phoneNumber.value,
      date: e.target.date.value,
      Email: e.target.Email.value,
      tourpackage: e.target.tourpackage.value,
    })
    .then(async (res) => {
      // this.setState({
      // //   snackbarMessage: res.data.message,
      // //   open: true,
      // //   snackbarColor: "green",
      // //   tourpackage: "",
      //  });
      ev.target.reset();
    })
    .catch((err) => {
      console.log(err);
      // this.setState({
      //   open: true,
      //   snackbarMessage: err.response.data.message,
      //   snackbarColor: "red",
      // });
    });
};

export default function Homepage() {
  const classes = useStyles();
  const [tourpackage, setTourPackage] = React.useState('');
  

  const handleChange = (event) => {
    setTourPackage(event.target.value);
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} >
            The Wanderers Tours & Travels
          </Typography>
          {/* <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav> */}
          {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Welcome to The Wanderers Tours and Travels
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          We at the Wanderers Tours and Travels offer the best holiday packages and services. We cover major cities across India and offer you our dream packages that would make you come back to us for more!
          <br></br><br></br>What are you waiting for? Go ahead and...
        </Typography>
      </Container>
      {/* End hero unit */}
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Plan Your Holiday
          </Typography>

            <React.Fragment>

              <React.Fragment>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        fullWidth
                        type="number"
                        autoComplete="phone-number"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField 
                      required 
                      id="Email" 
                      name="Email" 
                      label="Email" 
                      type="email"
                      fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        name="date"
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue="2020-01-01"
                        style={{width:"100%"}}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} >
                      <FormControl className={classes.form}>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                          Select Your Package
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-placeholder-label-label"
                          id="demo-simple-select-placeholder-label"
                          name="tourpackage"
                          value={tourpackage}
                          fullWidth
                          
                          onChange={(event) => { handleChange(event) }}
                          defaultValue={"None"}
                        >
                          <MenuItem value="">
                            <em>Your Package</em>
                          </MenuItem>
                          <MenuItem value={"AND100"}>Andaman</MenuItem>
                          <MenuItem value={"COO101"}>Coorg</MenuItem>
                          <MenuItem value={"GOA102"}>Goa</MenuItem>
                          <MenuItem value={"KAS103"}>Kashmir</MenuItem>
                          <MenuItem value={"KER104"}>Kerala</MenuItem>
                          <MenuItem value={"SHI105"}>Shimla</MenuItem>
                        </Select>
                        {/* <FormHelperText>Label + placeholder</FormHelperText> */}
                      </FormControl>
                    </Grid>

                  </Grid>
                  <div style={{justifyContent:"center"}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Submit
                </Button>
              </div>
              </form>
              </React.Fragment>
              
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
          Explore Our Packages<br></br><br></br>
        </Typography>           
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
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
                    <Typography component="h2" variant="h4" color="textPrimary">
                    ₹{tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /person
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
                  <Button fullWidth variant={tier.buttonVariant} color="primary" href={tier.link}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="center">

          <Grid item xs={12} >
            <Typography variant="h6" color="textPrimary" style={{ textAlign: 'center' }} gutterBottom>
              A Project By Venkatasubramanian N - CB.EN.U4CSE18266
              </Typography>
          </Grid>

        </Grid>
      </Container>
     
    </React.Fragment>
  );
}


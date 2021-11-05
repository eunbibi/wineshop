//To create a simple react component
import React from 'react';

//material ui library
//reason for curly braces : named import not default one 
// put components in the braces
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar,Container } from '@material-ui/core';

//using an icon
import { PhotoCamera } from '@material-ui/icons';

//import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//using styles.js
import useStyles from './styles';

//array for cards
const cards =[1,2,3,4,5,6,7,8,9]

//functional component
const App = () => {
    //for hook, we need to create a class obj
    const classes = useStyles();
    return(
        <>
            {/* to provide many default stylings */}
            <CssBaseline/>
                {/* nevigation bar */}
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                    <Typography variant="h6"> 
                    &nbsp; Wine Shop
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* gonna use sementic tag 'main' to indicate main part of the web site*/}
            <main>
                {/* button practice */}
                    {/* <ButtonGroup variant="text" aria-label="text button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup> */}
        
                {/* to provide a class to element*/}
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom> 
                        Wine Shop
                        </Typography>
                        <br/>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph> 
                            This is a Photo Album of wines and my name is Anna. I am studying React 
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {/* How to MAP */}
                        {cards.map((card) => ( 
                            //instance return
                            
                            //to make a responsive page
                            <Grid item key={card} xs = {12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title">
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is just a random letters for practicing.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography> 
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Something here to give a footer a purpose!
                </Typography>
            </footer>
        </>
    );
}

export default App;
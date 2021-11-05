import {makeStyles} from '@material-ui/core/styles';


//hook                                  
const useStyles = makeStyles((theme) => ({
//call-back func

    //new obj
    container:{
        //provide style in material-ui way
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },

    icon:{
        marginRight: '20px'
    },

    button:{
        marginTop: '40px'
    },

    cardGrid:{
        padding: '20px 0'
    },
    
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    
    cardMedia:{
        paddingTop: '56.25%' //16:9
    },
    
    cardContent:{
        flexGrow: 1
    },
    
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;
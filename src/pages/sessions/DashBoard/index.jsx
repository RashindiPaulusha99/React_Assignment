import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import GDSEButton from "../../../components/Home/Common/Button";
import Typography from '@mui/material/Typography';

class DashBoard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <Fragment>
                    <Grid container spacing="12">
                        <div className={classes.title__container}>
                            <Grid item lg={4} md={4} sm={4} xm={4} style={{paddingLeft: '3%', paddingTop: '2%',paddingBottom: '1%'}}>
                                <Link to="/dash">
                                    <GDSEButton variant="contained" label="DashBoard"/>
                                </Link>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%',paddingBottom: '1%'}}>
                                <div style={{display:'flex',justifyContent:'flex-end'}}>
                                    <div style={{paddingLeft: '12%'}}>
                                        <Link to="/customer">
                                            <GDSEButton variant="contained" label="Customer"/>
                                        </Link>
                                    </div>
                                   <div style={{paddingLeft: '9%'}}>
                                       <Link to="/item">
                                           <GDSEButton variant="contained" label="Item" />
                                       </Link>
                                   </div>
                                </div>
                            </Grid>
                        </div>

                        <Grid className={classes.grid__container}>
                            <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '20%',paddingRight: '5%'}}>
                                <div className={classes.div}>
                                    <div style={{width:'100%',height:'50%'}}>
                                        <Typography variant="h2" gutterBottom  style={{textAlign:'center'}}>
                                        Customers
                                    </Typography>
                                    <Typography variant="h2" gutterBottom style={{textAlign:'center'}}>
                                        100
                                    </Typography>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '20%',paddingRight: '5%'}}>
                                <div className={classes.div}>
                                    <div style={{width:'100%',height:'50%'}}>
                                        <Typography variant="h2" gutterBottom style={{textAlign:'center'}}>
                                            Items
                                        </Typography>
                                        <Typography variant="h2" gutterBottom style={{textAlign:'center'}}>
                                            100
                                        </Typography>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
            </Fragment>
        )
    }
}



export default withStyles(styleSheet)(DashBoard)
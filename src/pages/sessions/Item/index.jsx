import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import GDSEButton from "../../../components/Home/Common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import GDSEDataTable from "../../../components/Home/Common/Table";

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{
                name:"",
                description:"",
                price:"",
                qtyOnHand:""
            },

            data:[],

            loaded: false,

            columns: [
                {
                    field: 'name',
                    headerName: 'Item Name',
                    width: 350
                },
                {
                    field: 'description',
                    headerName: 'Description',
                    width: 350
                },
                {
                    field: 'price',
                    headerName: 'Unit Price',
                    width: 350
                },
                {
                    field: 'qtyOnHand',
                    headerName: 'Qty On Hand',
                    width: 350
                }
            ]

        }
    }

    clearFields = ()=>{
        this.setState({
            formData:{
                name:"",
                description:"",
                price:"",
                qtyOnHand:""
            }
        })
    }

    loadData =()=>{
        let formData = this.state.formData
        this.setState({
            loaded:true,
            data:formData
        })
        console.log(this.state.formData)
        console.log(this.state.data)
    }

    render() {
        let { classes } = this.props
        return (
            <Fragment>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.loadData}
                    onError={errors => console.log(errors)}
                >
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
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%',paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="Item Name" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.name}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.name=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="Description" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.description}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.description=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%',paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="Unit Price" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.price}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.price=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="Qty On Hand" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isPositive']}
                                           value={this.state.formData.qtyOnHand}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.qtyOnHand=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '5%'}}>
                            <div style={{paddingRight: '1%'}}>
                                <GDSEButton variant="contained" label="Clear" color='error' onClick={this.clearFields}/>
                            </div>
                            <div>
                                <GDSEButton variant="contained" label="Save" type="submit"
                                            onClick={()=>{
                                                this.loadData()
                                            }}/>
                            </div>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}>

                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid container style={{ height: 400, width: '100%', marginTop: '50px'}}>
                    <GDSEDataTable
                        stickyHeader aria-label="sticky table"
                        columns={this.state.columns}
                        rows={this.state.data}
                        rowsPerPageOptions={4}
                        pageSize={4}
                        checkboxSelection={true}
                    />
                </Grid>

            </Fragment>
        )
    }
}



export default withStyles(styleSheet)(Item)
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
                id:"",
                name:"",
                description:"",
                price:"",
                qtyOnHand:""
            },

            data:[],

            loaded: false,

            columns: [
                {
                    field: 'id',
                    headerName: 'Item Code',
                    width: 300
                },
                {
                    field: 'name',
                    headerName: 'Item Name',
                    width: 300
                },
                {
                    field: 'description',
                    headerName: 'Description',
                    width: 300
                },
                {
                    field: 'price',
                    headerName: 'Unit Price',
                    width: 300
                },
                {
                    field: 'qtyOnHand',
                    headerName: 'Qty On Hand',
                    width: 300
                }
            ],

            rows : [
                { id: 'I001',name: 'soap', description: 'description1', price: 100.00, qtyOnHand: 520 },
                { id: 'I002',name: 'rice', description: 'description2', price: 200.00, qtyOnHand: 1000 },
                { id: 'I003',name: 'coconut', description: 'description3', price:232.00, qtyOnHand: 2000 },
                { id: 'I004',name: 'oil', description: 'description4', price: 500.00, qtyOnHand: 8000},
                { id: 'I005',name: 'biscuit', description: 'description5', price: 300.00, qtyOnHand:900 },
                { id: 'I006',name: 'milk', description: 'description6', price: 150.00, qtyOnHand: 50 }
            ]

        }
    }

    clearFields = ()=>{
        this.setState({
            formData:{
                id:"",
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
                            <TextValidator id="outlined-basic" label="Item Code" variant="outlined" size="small"
                                           style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.id}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.id=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%'}}>
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
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%',paddingTop: '2%'}}>
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
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%'}}>
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
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%',paddingTop: '2%'}}>
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
                        rows={this.state.rows}
                        columns={this.state.columns}
                        rowsPerPageOptions={6}
                        pageSize={6}
                        checkboxSelection={true}
                    />
                </Grid>

            </Fragment>
        )
    }
}



export default withStyles(styleSheet)(Item)
import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import GDSEButton from "../../../components/Home/Common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import GDSEDataTable from "../../../components/Home/Common/Table";

class Customer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{
                id:"",
                name:"",
                address:"",
                gender:"",
                nic:"",
                email:""
            },

            data:[],

            loaded: false,

            columns: [
                {
                    field: 'id',
                    headerName: 'Customer Id',
                    width: 200
                },
                {
                    field: 'name',
                    headerName: 'Customer Name',
                    width: 250
                },
                {
                    field: 'address',
                    headerName: 'Address',
                    width: 250
                },
                {
                    field: 'gender',
                    headerName: 'Gender',
                    width: 250
                },
                {
                    field: 'nic',
                    headerName: 'NIC',
                    width: 250
                },
                {
                    field: 'email',
                    headerName: 'Email',
                    width: 250
                }
            ],

            rows : [
                { id: 'C001',name: 'Jon',address: 'galle', gender: 'male', nic: '123654v', email: 'Jon@gmail.com' },
                { id: 'C002',name: 'jane',address: 'panadura', gender: 'female', nic: '58452v', email: 'Jane@gmail.com' },
                { id: 'C003',name: 'kamal',address: 'matara', gender: 'male', nic: '79851v', email: 'kamal@gmail.com' },
                { id: 'C004',name: 'nimal',address: 'colombo', gender: 'male', nic: '94212v', email: 'nimal@gmail.com' },
                { id: 'C005',name: 'amal',address: 'maharagama', gender: 'male', nic: '86412v', email: 'amal@gmail.com' },
                { id: 'C006',name: 'amaya',address: 'kotte', gender: 'female', nic: '24552v', email: 'amaya@gmail.com' }
            ]

        }
    }

    clearFields = ()=>{
        this.setState({
            formData:{
                id:"",
                name:"",
                address:"",
                gender:"",
                nic:"",
                email:""
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
                            <TextValidator id="outlined-basic" label="Customer Id" variant="outlined" size="small"
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
                            <TextValidator id="outlined-basic" label="Customer Name" variant="outlined" size="small"
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
                            <TextValidator id="outlined-basic" label="Address" variant="outlined" size="small"
                                           style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.address}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.address=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="Gender" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.gender}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.gender=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%',paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="Email" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isEmail']}
                                           value={this.state.formData.email}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.email=e.target.value
                                               this.setState(data);
                                           }}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingTop: '2%'}}>
                            <TextValidator id="outlined-basic" label="NIC" variant="outlined" size="small"
                                       style={{width: '90%'}}
                                           validators={['required','isString']}
                                           value={this.state.formData.nic}
                                           onChange={(e)=>{
                                               let data=this.state.formData
                                               data.nic=e.target.value
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
                                                this.loadData();
                                            }}/>
                            </div>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xm={12}>

                        </Grid>
                    </Grid>
                </ValidatorForm>
                <Grid container style={{ height: 400, width: '100%', marginTop: '30px'}}>
                    <GDSEDataTable
                        stickyHeader aria-label="sticky table"
                        rows={this.state.rows}
                        columns={this.state.columns}
                        pageSize={5}
                        rowsPerPageOptions={5}
                        checkboxSelection={true}
                    />
                </Grid>

            </Fragment>
        )
    }
}



export default withStyles(styleSheet)(Customer)
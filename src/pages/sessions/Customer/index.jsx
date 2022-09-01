import {withStyles} from "@mui/styles";
import React, {Component, Fragment} from "react";
import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import GDSEButton from "../../../components/Home/Common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import GDSEDataTable from "../../../components/Home/Common/Table";

class Customer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData:{
                name:"",
                gender:"",
                nic:"",
                email:""
            },

            data:[],

            loaded: false,

            columns: [
                {
                    field: 'name',
                    headerName: 'Customer Name',
                    width: 350
                },
                {
                    field: 'gender',
                    headerName: 'Gender',
                    width: 350
                },
                {
                    field: 'nic',
                    headerName: 'NIC',
                    width: 350
                },
                {
                    field: 'email',
                    headerName: 'Email',
                    width: 350
                }
            ]

        }
    }

    clearFields = ()=>{
        this.setState({
            formData:{
                name:"",
                gender:"",
                nic:"",
                email:""
            }
        })
    }

    loadData =async (e)=>{
        let formData = this.state.formData
        this.setState({
            loaded:true,
            data:formData
        })
        console.log(this.state.formData)
        console.log(this.state.data)
    }

    render() {

        return (
            <Fragment>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.loadData}
                    onError={errors => console.log(errors)}
                >
                    <Grid container spacing="12">
                        <Grid item lg={12} md={12} sm={12} xm={12}
                              style={{paddingLeft: '5%', paddingTop: '2%', paddingBottom: '1%'}}>
                            <Typography variant="h3">Customer Manage</Typography>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>
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
                        <Grid item lg={6} md={6} sm={6} xm={6} style={{paddingLeft: '5%'}}>
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
                        <Grid item lg={6} md={6} sm={6} xm={6}>
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
                                <GDSEButton variant="contained" label="Save" type="submit" />
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



export default withStyles(styleSheet)(Customer)
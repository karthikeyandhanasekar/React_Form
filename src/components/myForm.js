import React from "react"
import {  useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import TextInput from "./FormField/input";
import Button from "./FormField//button";
import { Typography,  FormControlLabel, Radio, MenuItem, FormHelperText } from "@material-ui/core";
import CustomRadio from './FormField/radio'
import Dropdown from "./FormField/dropdown";

const MyForm = () => {


    const schema = yup.object().shape(
        {
            firstname: yup.string().required("First Name is required")
                .matches(/[^0-9]/g, "Only Alphabets"),
            lastname: yup.string().required("Last Name is required")
                .matches(/[^0-9]/g, "Only Alphabets"),
            gender: yup.string().required("Gender required"),
            dropdown: yup.string().required("Dropdown required")
        }
    )

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    })


    const option = [
        {
            label: "Male",
            value: "male"
        },
        {
            label: "Female",
            value: "female"
        }
    ]
    const generateradio = () => option.map(ele =>
        <FormControlLabel value={ele.value} label={ele.label} control={<Radio />} />
    )


    const generatedropdown = () => option.map(ele =>
        <MenuItem key={ele.value} value={ele.value} >
            {ele.label}
        </MenuItem>
    )

    const onsubmit = (data) => {
        console.log(data);

    }


    return (
        <React.Fragment>
            <Typography><h1>Form 1</h1></Typography>
            <form onSubmit={handleSubmit(onsubmit)}>
                <TextInput defaultvalue="first" control={control} type="text" name="firstname" errormsg={errors.firstname ? errors.firstname.message : ""} error={errors.firstname} required />
                <TextInput defaultvalue="last" control={control} type="password" name="lastname" errormsg={errors.lastname ? errors.lastname.message : ""} error={errors.lastname} />
                <CustomRadio control={control} list={generateradio} />
                <FormHelperText> {errors.gender && errors.gender.message}</FormHelperText>

                <Dropdown control={control} name="dropdown" list={generatedropdown} label="DropDown" />
                <FormHelperText> {errors.dropdown && errors.dropdown.message}</FormHelperText>


                <Button type="submit" name="Next"></Button>


            </form>
        </React.Fragment>
    )
}

export default MyForm
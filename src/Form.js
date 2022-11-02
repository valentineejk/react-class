import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(16).required(),
        password: yup.string().max(20).min(4).required(),
        conconfirmPassword: yup.string().oneOf([yup.ref("password"), null])
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={ handleSubmit(onSubmit) } >
            <h1>{ errors.fullName?.message }</h1>
            <input type="text" placeholder='Full Name' { ...register("fullName") } />
            <input type="text" placeholder='Email...'{ ...register("email") } />
            <input type="text" placeholder='Age...' { ...register("age") } />
            <input type="password" placeholder='Password...' { ...register("password") } />
            <input type="password" placeholder='confirmPassword' { ...register("confirmPassword") } />
            <input type="submit" />

        </form>
    )
}

export default Form
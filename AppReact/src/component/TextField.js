import { ErrorMessage, useField } from 'formik';
import React from 'react';

const TextField = ({label,...props}) => {
    const [field,meta] = useField(props)
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input
             className={`form-control shadow-none
              ${meta.touched && meta.error && 'is-invalid'} ${meta.touched && !meta.error && 'is-valid'}`}
             {...field}{...props}
        
            />
            <ErrorMessage component="div" name={field.name} className="text-danger"/>
        </div>
    );
};

export default TextField;
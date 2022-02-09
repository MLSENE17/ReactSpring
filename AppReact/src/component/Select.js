import { ErrorMessage, useField } from 'formik';
import React from 'react';

const Select = ({label,classes,...props}) => {
    const [field,meta] = useField(props)
    return (
        <div>
            <div className="mb-2">
                <label htmlFor={field.name}>{label}</label>
                <select  multiple={false} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  {...field}{...props}>
                    <option value="" label="Please Select"/>
                    {classes.map(
                        (cl)=>(
                            <option key={cl.id} value={cl.id} label={cl.libelle}/>
                        )
                    )}
                </select>
            <ErrorMessage component="div" name={field.name} className="text-danger"/>
        </div>
        </div>
    );
};

export default Select;
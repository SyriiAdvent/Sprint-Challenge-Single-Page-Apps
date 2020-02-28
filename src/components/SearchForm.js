import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from 'formik'
import { TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem',
  },
  inputBox: {
    margin: '1rem',
  },
  submit: {
    width: '100%',
    display: 'flex',
    // flexDirection: 'space-between'
    marginLeft: '1rem',

  },
  btn: {
    marginLeft: '10rem',
  }
}))

const SearchForm = (props) => {
  const [search, setSearch] = useState('')
  const classes = useStyles();
  const method = props.query

  // console.log(method)

  // useEffect(() => {
  //   console.log(search)
  //   method(search)
  // }, [search])
 
  return (
    <section className={classes.root}>
     <Formik
        initialValues={{ search: '' }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true)
          // ^ Makes the Async Call for Data
          setSearch(data)
          method(data)

          setSubmitting(false)
          resetForm()
        }}
      >
     {({ values, isSubmitting, onChange}) => (
       <Form>
         <Field
         name='search'
         label='Search Name'
         as={TextField}
         />
         
         <pre>{JSON.stringify(values, null, 2)}</pre>
       </Form>
     )}
     </Formik>
    </section>
  );
}

export default SearchForm
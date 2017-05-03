import React, { Component } from 'react';
import { Field, reduxForm, touched } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
    // lets Field know it is responsible for dealing with
    // this input field
    renderField(field) {
        // destructuring meta and the touched and error properties off of meta
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {/* if user has touched field then show error if not show empty string */}
                    {touched ? error : '' }
                </div>
            </div>
        );
    }
    onSubmit(values) {
        console.log(values);
    }
    render() {
        // on user submit handleSubmit runs the reduxForm side of this form
        // if valid we call this.onSubmit
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    // Validate  the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }
        
    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

// form property is name of form
// 
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
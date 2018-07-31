import React, {
    Component
} from 'react';
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2));
  console.log(values);
}

const required = value => (value ? undefined : "Required");


class Recipes extends Component {
    render() {
        return(
            <div>
                <Form
                  onSubmit={onSubmit}
                    render={({ handleSubmit, reset, invalid, pristine, submitting }) => (
                    <form onSubmit={handleSubmit}>
            
                        <Field
                          name='recipyName'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipe Name</label>
                              <input {...input} type="text" placeholder="Recipy Name" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='recipeDesc'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipe Description</label>
                              <input {...input} type="text" 
                                  placeholder="Recipe Description" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='recipeImg'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipe Image URL</label>
                              <input {...input} type="text" 
                                  placeholder="Image URL here" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='recipeDir'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipe Direction</label>
                              <input {...input} type="text" 
                                  placeholder="How do you make it" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='recipeYield'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipe Yield</label>
                              <input {...input} type="text" 
                                  placeholder="Recipe Yield" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='recipePrepTime'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipe Preperation Time</label>
                              <input {...input} type="text" 
                                  placeholder="How long does it take" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>

                        <div className="buttons">
                          <button type="submit" disabled={submitting}>
                            Submit
                          </button>
                          <button type="button" onClick={reset}
                            disabled={submitting || pristine}
                          >
                          Reset
                          </button>
                        </div>
                    </form>
                    )}
                />
            </div>
        );
    }
}


export { Recipes }
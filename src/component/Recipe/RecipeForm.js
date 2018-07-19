import React, {
    Component
} from 'react';
import { Form, Field } from 'react-final-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const required = value => (value ? undefined : "Required");


class Recipe extends Component {
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
                              <label>Recipy Name</label>
                              <input {...input} type="text" placeholder="Recipy Name" />
                              {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                          )}
                        </Field>
                        <Field
                          name='recipyDesc'
                          validate={required}>
                          {({ input, meta }) => (
                            <div>
                              <label>Recipy Description</label>
                              <input {...input} type="text" placeholder="Recipy Description" />
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


export { Recipe }
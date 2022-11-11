// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'

const ValidComponent = () => {
    return (
        <div>
            <h1>A valid component!</h1>
            <p>This will work fine.</p>
            <p>
                Since there is only one top-level element: the div.
            </p>
        </div>
    )
}

const InvalidComponent = () => {
    return (
        <div>
            <h1>This won't work.</h1>
            <p>Because there are two elements at the top level.</p>
        </div>
    )
}
/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const MyComponent = () => {
    return (
        <h1>Hi, welcome to my site!</h1>
    )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent
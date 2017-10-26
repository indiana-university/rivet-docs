---
title: Integrating Rivet
description: Rivet can be integrated with any frontend Javascript framework, including React, Angular and VueJS.
---

## Frontend Javascript frameworks

Rivet comes with a vanilla Javascript file to handle opening/closing modals, closing alerts, opening drop-down menus and toggling the drawer. If you are using a frontend Javascript framework in your project, you may need to remove this vanilla Javascript file and rewrite your own Javascript to fit your framework's needs.
This tutorial will look at the [Alert]("/components/overlays/alerts/") component and how it's managed in Rivet and how to rewrite the Javascript for your framework. We will frame the tutorial around the [React]("https://reactjs.org") framework but the same rules can be applied to Angular and VueJS. 

*NOTE: Rivet's Javascript uses [DOM selectors]("https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll") to manipulate elements, where frameworks like [React will manage state]("https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class") within components and output a virtual DOM. These are two very different approaches for handling state, but the goal we are trying to accomplish remains the same, adding a class or removing an element from the DOM, for example.*

### Alert

The alert component can contain a button to close the alert and remove it from the DOM. We will look at how it's done in Rivet's vanilla Javascript. Then we will look at how to take the same rules and apply them to React. First, let's start basic and show an Alert component **without the close button**.




#### Vanilla implementation (default)

#### Properties:

**type**

The Alert component can be passed a property `type` which can be: 

 - success
 - message
 - error
 - base (default if no type property passed)

_Property usage:_

```
className={`rvt-alert rvt-alert--${ type ? type : 'info' }`}
```

**title**

The alert component should be passed a title that appears as an h1 in the alert

_Property usage:_

`<h1 className="rvt-alert__title" id="alert-title">{ title }</h1>`

#### Children

The Alert component can contain children as plain text, which is the message of the alert.

`<p className="rvt-alert__message">{ children }</p>`

#### State: 

`{ closed: false }`

_State usage:_

Add `.display-none` class to the `.rvt-alert` div if the closed state becomes true

`{ this.state.closed ? 'display-none' : '' }`

#### Methods:  

`closeAlert() // sets closed to true `

_Method usage:_

`<button className="rvt-alert__dismiss" onClick={this.closeAlert}>`

---


### React example:

```javascript
import React from 'react'

export default class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = { closed: false }
        this.closeAlert = this.closeAlert.bind(this)
    }

    closeAlert() {
        this.setState({
            closed: true
        });
    }

    render() {
        const {children, title, type} = this.props;

        return (
            <div className={`rvt-alert rvt-alert--${ type ? type : 'info' } rvt-m-bottom-md ${ this.state.closed ? 'display-none' : '' }`} role="alertdialog" aria-labelledby={`${btoa(title)}-alert-title`}>
                <h1 className="rvt-alert__title" id={`${btoa(title)}-alert-title`}>{ title }</h1>
                <p className="rvt-alert__message">{ children }</p>
                <button className="rvt-alert__dismiss" onClick={this.closeAlert}>
                    <span className="v-hide">Dismiss this alert</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M10,8l5.63-5.63a1.39,1.39,0,0,0-2-2L8,6,2.37.41a1.39,1.39,0,0,0-2,2L6,8,.41,13.63a1.39,1.39,0,1,0,2,2L8,10l5.63,5.63a1.39,1.39,0,0,0,2-2Z"/>
                    </svg>
                </button>
            </div>
        );
    }
}
```

#### React example usage:

```javascript
import Alert from "Alert"

<Alert title="Scheduled System Maintenance">This system will be unavailable on August 1st due to scheduled system maintenance. Please check back on August 2nd.</Alert>
<Alert type="message" title="Unsaved Changes">Your changes have not been saved. To save your changes, click "Save my changes" or click "Cancel" to exit without saving.</Alert>
<Alert type="success" title="Thank you!">We have received your application. Check your email in a few weeks to find out if you?ve been admitted.</Alert>
<Alert type="error" title="Incorrect User ID or Password">The user ID and password you entered do not match. Please check your entries and try again. <a href="#0">Forgot your user ID or password?</a></Alert>

```

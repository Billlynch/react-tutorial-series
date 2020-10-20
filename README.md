This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Aim

To demonstrate:

- React Function Components
- React Function Components: Passing Props
- React Function Components: React State (Basic)
- React Component Testing
- Deploying to an AWS S3 bucket via terraform.

via making a simple SPA mimicking a CV, with options to show or hide sections.

## Setup

1. Checkout the main branch of this repo.

2. run `yarn install` or `npm install`

## Running

To run on localhost for development run `yarn dev`

## Testing

To run the tests run `yarn test`

#Pre-amble
This is a very basic skim over some of the topics in [react's tutorial](https://reactjs.org/tutorial/tutorial.html). This is not complete, and is likely skipping over some more complex concepts which are better explained by someone else.

# Completing the tutorial

## Lesson 1 - React Functional Components

Task: Create a new component to hold the education section of your CV.

For reference look in the components directory, you'll see some already exist!

First off lets think about what a component means.
I view it as a single wrapper around a part of the page which holds data / actions which are all related in some way.
The same way this web page will be all the information related to you.
This section of the website will be all the education you've had.
For an actual description of what a component is see the react website.

####Step 1:
Planning what's going to be in the component:
e.g. a list of your schools / university. Look at your CV, what do you have.

####Step 2:
Building the skeleton of the component. Let's make a new dir called `education` inside that make a `Education.tsx` file.

First thing we need to do is `import React from 'react'`
Then let's make a function which when called will return some 'JSX' which looks a lot like HTML, see any other `.tsx` file for an example.

Things to note here, what is the `: React.FunctionComponent` part? = Just type so that typescript can help out in the IDE, this will come in useful when passing props.

We then need to make sure that the function is exported, there are two ways of doing this, I prefer exporting as default, `export default FUNCTION_NAME` at the end of the file.

####Step 3:
Now we have our function which returns something that looks like HTML how do we call it and get it on the page?

Find the `MainPage.tsx` in the pages dir, see near the top of the file we are importing the functions from the other component folders, we need to import the one you just made in the same way.
To 'call' the function you'll need to

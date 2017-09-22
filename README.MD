> This app is meant to be a simple tutorial for using Karma Test Runner for executing QUnit tests in your JavaScript Application.

## What does this app do?
> This app runs a simple QUnit test using Karma and captures test results in a file in JUnit format.

## What is Karma? (https://karma-runner.github.io)
> Karma is a Node.js based test runner for JS code. You need a test runner like Karma, because in a CI/CD environment you can't go to every webpage manually to run your tests. With Karma, you can specify the JS files+tests along with the web browsers in a karma configuration (http://karma-runner.github.io/1.0/config/configuration-file.html) file. Karma will do all the testing for you and has the ability to present the test results in the format of your choice.  

## What is QUnit? (https://qunitjs.com/)
> QUnit is a popular Unit Testing framework for JavaScript.

## How do I run this?
    1) You'll require NPM(https://nodejs.org/en/download/) to use Karma.
    2) Go to the project folder and npm init.
    3) Install all the required modules with this ```npm i qunit karma karma-qunit karma-junit-reporter karma-chrome-launcher --save-dev```.
    4) If you want to re-create the karma configuration file run ```karma init 'name-of-file.conf.js'``` and follow prompt.
    5) Run Karma with ```karma start 'name-of-file.conf.js'```.

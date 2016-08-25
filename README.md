# UtilityTool2.0

[ ![Codeship Status for KJGilkes/UtilityTool2.0](https://codeship.com/projects/6a360da0-4af8-0134-5887-5a647d62e392/status?branch=master)](https://codeship.com/projects/169804)

# Usage
This debugging tool displays information about your application.

## Installation
To install this tool use the command:
```
npm i --save kj_utility_tool
```
To run the application in debug mode you will need to run:
```
DEBUG=true npm start
```

## Debugging
To use this debug tool in the application you must put this line at the top of the file if it is not already there.
```
const utility = require('kj_utility_tool');
```
After the tool has been included you can then console log any information using this line of code.
```
utility.debug('Message to be displayed.', Status Code);
```

## Sample
```
utility.debug('App route has been hit.', 200);
```
### Response
```
App route has been hit. 200
===========================
```

## Version bumping
To use the utility tool's version bump it must be used with a task manager.
```javascript
utility.bumpit(currentV, tag);
```
The method takes in two parameters where currentV is a string of the current semantic version and 3 different tags: MAJOR MINOR PATCH

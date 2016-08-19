# UtilityTool2.0

# Usage
This debugging tool displays information about your application.

## Installation
To install this tool use the command:
```
npm i kj_utility_tool
```

To run the application in debug mode you will need to run:
```
DEBUG=true npm start
```

## Debugging
To use this debug tool in the application you must put this line at the top of the file if it is not already there.
```
const utility = require(/Path to utility file);
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

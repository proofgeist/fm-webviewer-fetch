---
sidebar_position: 4
---

# Troubleshooting
### The fmFetch promise is never resolved / callback function is never called
The most common cause for this is that you forgot to specifcy the name of the webviewer the to `SendCallback` script. Double-check that you have a name assigned to the webviewer on the FileMaker layout and that the correct name is being set in the script you are calling.

If the `SendCallback` script is not called, or called with the wrong webviewer name, FileMaker cannot reach back into the JavaScript code to complete the loop. Make sure that you are not exiting/halting the script early or leaving the layout that contains the webviewer.

### The FileMaker script does not run.
If you try to call a script that does not exist in your FileMaker solution, you will see a FileMaker error dialog. If you don't see that dialog, make sure that the `Allow JavaScript to perform FileMaker scripts` option is enabled in the webviewer configuration; it is disabled by default. 

### Error: 'window.FileMaker' was not available at the time this function was called.
FileMaker injects neccesary code into the webviewer to enable these interactions, but it is not available immediately when the webviewer first loads. There are many techniques to handle this, but essentially you need to introduce a delay before you use these functions if you run into this error.
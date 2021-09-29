# TODO

- Change how form field errors are handled. For example, we want the 'Field is required' error to show when a user hits submit and has not entered an input to an input that is required. As of right now, it will only go away when submit it hit, but it should go away if the user types something into that input. This is low priority at the moment.

## chat

- fix scroll bar showing over the border
- fix the scrolling issue where hitting top/bottom of comment scrolling proceeds to scroll rest of page
- implement support for non-user messages in the chat (specifically welcome message and error messages)
- show welcome message on connect
- look into re-connecting if socket connection flubs?
- set a cap at like 100 comments, remove previous comments when cap is reached (pop from array)

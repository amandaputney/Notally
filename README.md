# Notally

## The Note Model

This app is user-centric, only the notes for the logged in user should be displayed.

The schema for notes will be minimal with only the following two properties:

Property Name Property Type Validation(s)
text String required
user ObjectId required

Use the timestamps: true option so that the createdAt property can be used to display the date & time of each note.

## MVP User Stories

AAV, I want to see an auth page to sign-up or log in so that I can create notes.

AAU, I want to see a [Log Out] link/button to return to the auth page.

AAU, I want to see a “No Notes Yet!” message if I have yet to enter any.

AAU, I want to see a listing of all of my previously entered notes including the text and date & time (createdAt property) for each note.

Use the toLocaleString() method to better format the date/time.

AAU, when I click the [Add Note] button to add a new note, I want to see it appear in the list of existing notes.

AAU, I want to see an INPUT or TEXTAREA and an [Add Note] button above the listing of notes that I can use to enter a new note.

## Bonus User Stories

AAU, I want to be able to toggle the display of the notes between ascending & descending date (createdAt).

AAU, I want to be able to delete a note.

## Super Bonus User Story

AAU, I want to be able to edit a note.

### Deployment

https://create-react-app.dev/docs/deployment/

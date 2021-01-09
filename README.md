# Shoppies 2021 Nominations! 
## By Husni Fareed

## Live App:
https://shoppies2021.herokuapp.com/

## Design Choices:
- I wanted to focus on making this app accessible and clear, so I went with a simple grey-white template and used green for buttons nominating a movie and red to indicated removing a nomination.
- The app is responsive so that if you resize the page, it adjusts accordingly.

## Extras:
 1) Saving Nominations when the user leaves the page.
   - I accomplished this by using redux, I baked the nominations list to the browsers cookies everytime the nominations list is updated and when the page is loaded I read the cookies from the browser.
   
 2) Using Animations/Styling.
   - Although there's a bunch of stlying I did on this page, some of the things which I am proud of are the shake animation which appears when clicking the 'Already Nominated' button which emphasizes that the user cannot add that nomination again, as well as the spacing of the lists as the Search list disappears and the page is resized.
   
 ## Extra Feature:
  - One extra feature which I implemented was the 'Remove All' button which removes all nominations at once as opposed to 1-by-1. This can be useful when the user comes back after a while and decides that they want to start the list from scratch.

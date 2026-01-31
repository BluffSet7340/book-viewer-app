## Journal

### 28th January 2026 - 

Will clear out the unnecessary code, get the color palette and start desiging, will be using raw CSS for this, and split into components as needed. 

From the Google Books API, I'll only be working with the Volume? Which stores all the necessary information about a book matching a specific search term entered by a user. 

Hmm, issue with me exceeding the request for trying to check out the volumes. Okay I guess I have to create a google Books API key and append that to my requests. Okay I enabled the books api from the google cloud console and now I gotta confgure my API key. This should help me avoid any 429 errors. 

Okay I made a sample request using the google books api and the it works alhamdulillah and it gives me plenty of information to work with for this mini project. 

### 30th January 2026 - 

Okay going to commence now with the design and add stuff as I go. 

Following the user stories below, got it from [here](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md) 

Downloaded the icons from the react so that I can get some free icons for the navbar. Just trying to implement this from scratch without AI generating (except for tiny snippets and guides). 

### 31st January 2026 - 

Trying to figure out a way to animate the dropdown on the navbar. Alhamdulillah I was finally able to figure out the dropdown menu based on the code I was checking out from other websites, it has to do with the manipulation of the max-height property and applying a transition to that property.

Okay I take that back found another bug where the navbar does not pop up properly, the text can still be seen. Okay I was able to fix it thanks to AI via the use of the overflow property set to hidden. If there is no space in the container, the contents of the container disappear.

Making the Footer and now need to fix the navbar logic, specifically the toggle stuff. 

Footer is complete and navbar is fixed.

Okay now I have to figure out the react router asap redirect user to another page to search for the books after entering the search query


## User Stories

- [ ] User can enter a search query into an `input` field
- [ ] User can submit the query. This will call an API that will return an array of books with the corresponding data (**Title**, **Author**, **Published Date**, **Picture**, etc)
- [ ] User can see the list of books appearing on the page

## Bonus features

- [ ] For each item in the list add a link that will send the User to an external site which has more information about the book
- [ ] Implement a Responsive Design
- [ ] Add loading animations



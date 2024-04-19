# Getting Started with Create React App:

This app allows authorized users (inventory managers) to register for and log in to their account where they can:
  View their store inventory
  View the inventory from all stores
  Add, delete, and edit items from any store
This app also lets unauthorized (no login) users:
  View the inventory from all stores
  Add an item

After opening this project using the https://github.com/elirhenry/Z-Prefix repo, run npm install then npm start to run the server and src directories.
  http://localhost:8080/items
    This endpoint shows the ite
## Directories:

server:
  In this directory you can view the database information using the following url's:
  http://localhost:8080/items
    This endpoint shows what items in the database for the authenticated users store.
  http://localhost:8080/all-items
   This endpoint shows what items in the database for all stores.

src:
  Contains front-end component files for UI.
  There is a headerbar labeled 'Database' that returns you to the home page from any other page.
  From the home page http://localhost:3000/ the user can register for and login to an account or view the inventory and add an item.
  After a user creates a login they are redirected to their profile page where they can:
    Use the sign out button to log out and return to the main page.
    Click on My Store Inventory to view their store inventory; here they can add, delete, or edit items, and view item details.
    Click on All Inventory to view the full inventory database and make the same modifications.
    Click Visitor to view the unauth user inventory view.


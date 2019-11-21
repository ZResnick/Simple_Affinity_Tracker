# CSE Challenge for Dynamic Yield - by Zachary Resnick

This chrome extension tracks of Urban Outfitters shoppers, updating the new-arrivals page to match a users affinities. Viewing a page increases a users affinity for that category by 1. Adding an item to the cart increases a user's affinity for that category by 3.

### To add this chrome extension to your browser

- Go to chrome://extensions
- In the top right corner, turn on developer mode
- Click "Load Unpacked" and navigate to this directory
- Load the extensions folder
- Once the extension appears next to your navbar, simply going to the Urban Outfitters new-arrivals page will 'turn-on' the extension

### Some Notes

1.  When adding an item to the cart, be sure to choose a size before clicking the add-item button to avoid the extension registering the add-to-cart action twice.
2.  There is a very small delay when navigating from a product page back to the New-Arrivals page. This can be seen momentarily when the page flashes it's default layout before the extension alters the DOM.

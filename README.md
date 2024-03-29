# Affinity Tracker for UrbanOutfitters.com

### A Sample Project by Zachary Resnick

This chrome extension keeps tracks of Urban Outfitters shoppers, rearranging the new-arrivals page to match a users affinities. Viewing a page increases a users affinity for that category by 1. Adding an item to the cart increases a user's affinity for that category by 3. This extension only considers affinities for the categories Men's, Women's, Lifestyle, Beauty, and Home.

### To add this chrome extension to your browser

- Go to chrome://extensions
- In the top right corner, turn on developer mode
- Click "Load Unpacked" and navigate to this directory
- Load the extensions folder
- Once the extension appears next to your navbar, navigating to the Urban Outfitters new-arrivals page will 'turn-on' the extension: https://www.urbanoutfitters.com/new-arrivals

### Some Notes

1.  When adding an item to the cart, be sure to choose a size before clicking the add-item button to avoid the extension registering the add-to-cart action twice.
2.  There is a very small delay when navigating from a product page back to the New-Arrivals page. This can be seen momentarily when the page flashes it's default layout before the extension alters the DOM.
3.  The users affinities are always viewbale from the extensions popup. After navigating to the New-Arrivals Page at Urban Outfitters, simply click the UO Logo next to your navbar to the see your current affinities. Note that there is a small delay between an action (a page view or adding an item to the cart) and the popup representing the updated affinities.

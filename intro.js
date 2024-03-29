document.addEventListener('DOMContentLoaded',function()
{ 
    // Adds hide/show on click to the following elements
    showHide("contlheading", "controls");
    showHide("developheading","developmental");
    showHide("powerupsHeading","powerups");
    showHide("scoreHeading","score");
    showHide("clockHeading","clock");
});

// A function to hide or show an element when
// another element is clicked
function showHide(clickedID, showID){
    // The elements
    var clickeddiv = document.getElementById(clickedID);
    var item = document.getElementById(showID);
    // Listen for the click
    clickeddiv.addEventListener("click",function(){
        // If the item is invisible
        if(item.offsetParent === null){
            // make it visible
            item.style.display = 'initial';
        }
        // else hide it
        else item.style.display = 'none';
    });
}
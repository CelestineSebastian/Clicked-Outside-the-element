/* click outside of a targetted element */
$(document).click(function (e)
{
    var container = $(".header-search__form");  // Add an elemet to target

    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        
       console.log("clicked outside the element");// Do a function or anything here
    }
});

/* End of click outside of a targetted element */   

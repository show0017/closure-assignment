document.addEventListener("DOMContentLoaded", function(){
    //Use CLOSURES to solve these two problems

    //PART A
    //Build 6 paragraphs with filler text inside #main. When you click on the paragraph
    //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
    //Use the numbers 1  - 6, not 0 - 5

    /* Use IIFE to avoid declaring any variables in the global scope. */
    (function(){
        /* use document fragments to avoid page reflow.*/
        var fragment = document.createDocumentFragment();
        var paragraphTag;
        var text = "New Text ";
        for(var i=1; i<7; i++){
            paragraphTag = document.createElement("p");
            paragraphTag.innerHTML = text;
            paragraphTag.addEventListener("click", (function(index){
                return function(){
                    /* this keyword is pointing to the corresponding paragraph.*/
                    this.innerHTML = index;
                }
            })(i));
            fragment.appendChild(paragraphTag);
            text += "New Text ";
        }

        document.getElementById("main").appendChild(fragment);
    })();

    //PART B
    //after the user clicks on the heading inside #second, start adding list items to the
    //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
    //is one second, two second delay for the second one, three second delay for the third and so on.
    //Add a total of five list items to the ul.

    /* Use IIFE to avoid declaring any variables in the global scope. */
    (function(){
        var headingTag = document.querySelector("#second>h2");
        var unorderedListTag = document.getElementById("theList");

        headingTag.addEventListener("click", function(){
            for (var i=1; i<6; i++){
                var timeOutID = setTimeout((function(index){
                var listItemTag = document.createElement("li");
                return function(){
                    listItemTag.innerHTML = "List item "+ index;
                    unorderedListTag.appendChild(listItemTag);
                }
            })(i), 1000*i );
            }
        });
    })();
});

/* Define a function that will print all elements of type </li> */
function printListElements() {
    listElements = document.querySelectorAll("#list-of-elements .list-group-item")
    console.log("This page contains the following elements that are styled as a list");
    console.log(listElements);
}

/* Define a function that will change 'GOOGLE''s text color to red */
function changeGoogleElementTextColor() {
    document.querySelector("#list-of-elements .list-group-item").style.color = "red";
}

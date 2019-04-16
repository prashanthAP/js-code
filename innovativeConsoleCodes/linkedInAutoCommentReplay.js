var listOfCommentBox = document.getElementsByTagName("article");
//get the array list of all the div-s that has the comments

let extractedListOfFirstComment = [];
// store the author details of the comment
let listOfDiv  = [];
//store the div-s of the comment

let count =0;
function generateComment(name,index) {
    switch (index%4) {
        case 0: return "Hey " + name + "Thanks for your comment! :) ";
        case 1: return "Thanks a lot your supportive comment @"+name;
        case 2: return "Really appreciate your comment @"+name ;
        case 3: return "Really like your viewpoint @"+name;
    }
}
let clickReplyButton = setInterval(function(){
    if( typeof listOfCommentBox[count].getElementsByClassName("comments-comment-item-content-body")[0] === "undefined") {
        console.log("Nested comment. Skipping index " + count);
        count++;
        if(count>=listOfCommentBox.length) {
            console.log("Clearing interval with clearInterval...");
            clearInterval(clickReplyButton);
        }
    } else {
        if(count>=listOfCommentBox.length) {
            console.log("Clearing interval with clearInterval...");
            clearInterval(clickReplyButton);
        }
      let eachCommentValue =  listOfCommentBox[count].getElementsByClassName("comments-comment-item-content-body")[0].innerText;
      let eachCommentAuthor = listOfCommentBox[count].getElementsByClassName("hoverable-link-text")[0].innerText;
    //   console.log( count + "  => " + eachCommentValue); 
      listOfDiv[count]  = listOfCommentBox[count];

      extractedListOfFirstComment.push({
          "index" : count,
          "value" : eachCommentValue,
          "name" : eachCommentAuthor
      })
      console.log("Autocommenting on "+ eachCommentAuthor );

      let btn = listOfDiv[count].getElementsByClassName("feed-shared-reply-button__text")[0];
      btn.click();
      let textbox = listOfDiv[count].getElementsByClassName("mentions-texteditor__content")[0];
    //   textbox.innerText = "@"+eachCommentAuthor+ " This is an automated comment";
    textbox.innerText = generateComment(eachCommentAuthor,count);
      count++;
    }
}, 500)
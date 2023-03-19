 let text = "amma";
 let val = text.split("");
 console.log(val);
 let rev_str = val.reverse();
 let rev_join_str = rev_str.join("");
 console.log(rev_join_str);

 if( text === rev_join_str ){
 console.log("this number is palindrome");
 } else {
    console.log("this number is not a palindrome");

 }
 
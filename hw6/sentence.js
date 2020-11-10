// Fig. 10.12: RandomPicture2.js
// Random image selection using arrays
var article = [ "the", "a", "one", "some", "any" ];
var noun = [ "boy", "girl", "dog", "cat", "car" ];
var verb = [ "drove", "jumped", "ran", "walked", "skipped" ];
var preposition = [ "to", "from", "over", "under", "on" ];
var sentenceDiv = document.getElementById("sentencestory");

function turnbig(str)
{
    newstr = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
    return newstr;
}

function getvalue()
{
    sentencelen = document.getElementById("creat");
    value = sentencelen.value;
    return value;
}
function anvpan() 
{
    var index = Math.floor( Math.random() * 5 );
    return index;
}
function story()
{
    value = getvalue();
    var i;
    var sentenceDiv = document.getElementById("sentencestory");
    sentenceDiv.innerHTML="";
    for ( i = 0; i < value; i++)
    {
        if(i == 0)
            sentenceDiv.innerHTML+="<p>Once upon a time...</p>";
        sentenceDiv.innerHTML+="<p>" + turnbig(article[ anvpan() ]) + " " + noun[ anvpan() ] + " " + verb[ anvpan() ] + " " + preposition[ anvpan() ] + " " + article[ anvpan() ] + " " + noun[ anvpan() ] + ".</p>";
        if(i == value-1)
            sentenceDiv.innerHTML+="<p>THE END</p>";
    }

} // end function story

function start()
{
    /*sentenceDiv.innerHTML+="</br>";*/
    document.getElementById("generate").addEventListener( "click", story, false );
   //window.location.reload();
} // end function start

window.addEventListener( "load", start, false );
//window.location.reload();
// Fig. 10.12: RandomPicture2.js
// Random image selection using arrays
var pictures = [ "Harry", "Jacky", "Yao", "Cat" ];
var adj = [ "客戶那邊的", "我們的", "負責談需求的", "負責這個部分的", "直到上線前一天", "(雙手一攤)" ];
var noun = [ "專案經理", "主管", "工程師", "設計師", "外包", "User", "聯絡窗口"];
var verb = [ "當初沒有講清楚", "一直換", "說他肚子不舒服", "擺爛不想做了", "突然開始放長假", "去生小孩了", "離職了", "都沒甚麼 sense", "都沒有跟我講", "以為這些不用做", "一直在狀況外", "做事拖拖拉拉", "還搞不清楚狀況", "Quality 有問題", "東西一直改", "在整我", "突然就沒來了" ];

// pick a random image and corresponding description then modify
// the img element in the document's body 
function pickImage()
{
   var index = Math.floor( Math.random() * 4 );
   var a = Math.floor( Math.random() * 6 );
   var b = Math.floor( Math.random() * 7 );
   var c = Math.floor( Math.random() * 17 );
   document.getElementById("random").innerHTML="";
   document.getElementById("random").innerHTML+="<h1 class = 'word1'>專案失敗了，是因為...</h1>";
   document.getElementById("random").innerHTML+="<h1 class = 'word2'>"+ adj[ a ] +""+ noun[ b ] +"<span  class = 'word3' style='text-align: center';>"+ verb[ c ] +"！</span></h1>";
   document.getElementById("random").innerHTML+="<h1 style='text-align: center';><img src = " + pictures[ index ] + ".jpg></h1>";
   //document.getElementById("random").setAttribute( "src",  + pictures[ index ] + ".jpg" );
} // end function pickImage

// registers iconImg's click event handler
function start()
{
   pickImage();
   addEventListener( "click", pickImage, false );
   //window.location.reload();
} // end function start

window.addEventListener( "load", start, false );
//window.location.reload();
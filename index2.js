var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

//ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var mytext = getUrlParam('fut',null);
var secondtext = getUrlParam('go',null);

//ini sebuah perbandingan jika parameter kosong atau terisi
if(mytext == null){document.getElementById("jika").style.display="none";}
else
	
//ini secript buat lanjut jut apalah gitu
    var timeout,interval
    var threshold = 6000;
    var secondsleft=threshold;

    window.onload = function()
    {
        startschedule();
    }

     function startChecking()
     {
        secondsleft-=1000;
        document.querySelector(".wait");  
        if(secondsleft == 0)
        {
            //document.getElementById("clickme").style.display="";
            clearInterval(interval);
            document.querySelector(".wait").style.display="none";
            document.querySelector(".to").style.display="";
        }
		
     }
    function startschedule()
    {
          clearInterval(interval);
          secondsleft=threshold;
          document.querySelector(".wait");  
           interval = setInterval(function()
           {
               startChecking();
           },1000)              
   }

   function resetTimer()
   {
        startschedule();
   }
   
   function generate()
   {
	document.getElementById("showlink").style.display="";
	document.querySelector(".to").style.display="none";
   }
   
//ini script buat memberikan link pada tulisan menuju link
$(document).ready(function(){
	//var uri_dec = decodeURIComponent(mytext);
	$('a[href^="https://duniahanyasementara"]').each(function(){ 
		var Janda = $(this).attr("href"); 
		var Perawan = Janda.replace("https://duniahanyasementara", 'https://www.inafut.com/2019/06/typical-food-of-east-nusa-tenggara.html?go=' + mytext); 
		$(this).attr("id", "crot"); 
		$(this).attr("href", Perawan); 
		$(this).attr("rel", "nofollow"); 
				
	});
	
});


//ini sebuah perbandingan jika parameter kosong atau terisi
if(secondtext == null){document.getElementById("tomboldownload").style.display="none";}
else

   
function lanjutkan(){ 
  
  var tautan = Base64.decode(secondtext);
  
window.open(tautan); }


"use strict";

class Venture{
  constructor(){
    
  }
  load(files,cb){
    if(typeof files != 'string' && Object.prototype.toString.call(files) != "[object Array]"){
      throw new TypeError('the first param should be either a string or an array');
    }
    const generateScript=(url,cb)=>{
    	let script=document.createElement('script');
	    script.type='text/javascript';
	    if(script.readyState){//IE
	      script.onreadystatechange=()=>{
	        if(script.readyState=='loaded' || script.readyState=='complete'){
	          script.onreadystatechange=null;
	          cb && cb();
	        }
	      }
	    }else{
	      script.onload=()=>{cb && cb();};
	    }
	    script.src=url;
	    let body=document.getElementsByTagName('body')[0];
	    body.appendChild(script);
    };
    if(typeof files == 'string'){
	    generateScript(files,cb);
    }else{
    	for(var f of files){

    	}
    }
    return this;
  }
  route(){
    
  }
}
window.venture=new Venture();

// window.venture.load('//cdn.bootcss.com/angular.js/1.4.12/angular.js',function(jjj){console.log(angular);});
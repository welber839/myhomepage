var myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');   //圖片來源位置
	if (mySrc === 'images/巴小杰.png'){
		myImage.setAttribute('src','images/巴小杰2.jpg')
	} else {
		myImage.setAttribute('src','images/巴小杰.png')
	}	
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName===null){
	  setUserName();
  }else{
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'How are you? ' + myName;
  }
}

if(!localStorage.getItem('name')){  //要是沒設定過，到上面函式設定
	setUserName();
}else{                              //已經設定過，從資料庫找出來用
	let storedName=localStorage.getItem('name');
	myHeading.innerHTML = 'How are you? ' + storedName;
}

myButton.onclick=function(){
	setUserName();
}
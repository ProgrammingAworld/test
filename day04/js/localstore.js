function setStorage(key,value){
	localStorage.setItem(key,value);
}

function getStorage(key){
	localStorage.getItem(key);
}

function removeStorage(key){
	localStorage.removeItem(key);
}

function clearStorage(){
	localStorage.clear();
}
function getAllStorage(event){
	console.log(event.oldValue);
}

document.getElementById('setStorage').addEventListener('click',function(){
	setStorage("name","张新鹏");
},false);

document.getElementById('clearStorage').addEventListener('click',function(){
	clearStorage();
},false);

window.addEventListener('storage',getAllStorage,false);

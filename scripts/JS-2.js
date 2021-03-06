var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1;i <= 5;i++ ){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click',function(event){
        displayedImage.setAttribute('src',event.target.getAttribute('src'));
    });

}



/* Wiring up the Darken/Lighten button */
var flag = false;
btn.addEventListener('click',function(){
    if(flag){
        btn.textContent = 'Darken';
        overlay.style.background = 'rgba(0,0,0,0)';
    }else{
        btn.textContent = 'Lighten';
        overlay.style.background = 'rgba(0,0,0,0.5)';
    }
    flag = !flag;
});

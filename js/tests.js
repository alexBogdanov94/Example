var date = new Date;
    year = date.getFullYear();
    footer = document.querySelector('.footer p');
    sidebar = document.getElementById('content');
    hide =  sidebar.style.width = '0px';
    loader = document.querySelector('.loader');
    triangle = document.getElementById('hover');
    seeMore = document.getElementsByTagName('h3');
    paragraph = document.querySelectorAll('section p');
    hideP1 =  paragraph[0].style.height = '0px';
    hideP2 =  paragraph[1].style.height = '0px';
    
    
(function displayDate(){
    footer.innerHTML += year;
})();//display year in the footer

function toggleSidebar() {
   
     r = sidebar.style.width == '0px'?sidebar.style.width = '':sidebar.style.width = '0px';
     
   
}    //hides and shows sidebar
triangle.addEventListener('click', toggleSidebar);//hide and show sidebar
function togleHints(){
    var t = paragraph[0].style.height == '0px'? paragraph[0].style.height = '': paragraph[0].style.height = '0px'
};

function togleHints2(){
    var t = paragraph[1].style.height == '0px'? paragraph[1].style.height = '': paragraph[1].style.height = '0px'
};//code for hints
seeMore[0].addEventListener('click', togleHints);
seeMore[1].addEventListener('click', togleHints2);
(function showPreload(){
    loader.style.display = 'inline';
    window.onload = function() {
       loader.style.display = 'none';
        
    }
})();
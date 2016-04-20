var date = new Date;
    year = date.getFullYear();
    footer = document.querySelector('.footer p');
    sidebar = document.getElementById('content');
    hide =  sidebar.style.width = '0px';
    loader = document.querySelector('.loader');
    triangle = document.getElementById('hover');
    
    
   
    
    
(function displayDate(){
    footer.innerHTML += year;
})();//display year in the footer

function toggleSidebar() {
   
     r = sidebar.style.width == '0px'?sidebar.style.width = '':sidebar.style.width = '0px';
     
   
}    //hides and shows sidebar
triangle.addEventListener('click', toggleSidebar);//hide and show sidebar


(function showPreload(){
    loader.style.display = 'inline';
    window.onload = function() {
       loader.style.display = 'none';
        
    }
})();
var myPagraphElements = document.getElementsByTagName('p');

for(i=0;i <myPagraphElements.length; i+=1){
    myPagraphElements[0].style.color = "red";
    myPagraphElements[i].className = "essay";
    myPagraphElements[i].id ="i";
}
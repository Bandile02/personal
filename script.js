function AddNew(){
    var originalDiv = document.querySelector('.whatToDo');
    var newdiv = document.querySelector('.new');
    var clonedDiv = originalDiv.cloneNode(true);
    
    newdiv.appendChild(clonedDiv);
}
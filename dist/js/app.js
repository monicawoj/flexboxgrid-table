document.addEventListener("DOMContentLoaded", function(event) {

   document.querySelectorAll('.table__column--delete').forEach(btn => {

        btn.addEventListener('click', () => {
            console.log(btn.parentNode);

            let myRow = btn.parentNode;
            let newRow=document.createElement("div");
            newRow.innerHTML=`<div class="table__row">
            <div class="table__column _8">
                <p>Test</p>
            </div>
            <div class="table__column _6">
                <p>12</p>
            </div>
            <div class="table__column _6">
                <p>Gemini</p>
            </div>
            <div class="table__column table__column--delete _4">
                <p class="hidden">DELETE</p>
                <div class="delete-icon"></div>
            </div>
        </div>`;
            if(myRow.nextSibling){
                myRow.parentNode.insertBefore(newRow,myRow.nextSibling);
            }else{
                myRow.parentNode.appendChild(newRow);
            }


        });
    });

});
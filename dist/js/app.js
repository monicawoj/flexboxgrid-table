document.addEventListener("DOMContentLoaded", function(event) {

   document.querySelectorAll('.table__column--delete').forEach(btn => {
       let myRow = btn.parentNode;

       btn.addEventListener('mouseover', () => {
           myRow.classList.add('hover');
       });

       btn.addEventListener('mouseout', () => {
           myRow.classList.remove('hover');
       });

        btn.addEventListener('click', () => {
            let newRow=document.createElement("div");
            if([...myRow.classList].indexOf('table__row--last') < 0){
                newRow.innerHTML=`<div class="confirm">
                 <div class="centered">
                    <div class="table__column _18 confirm__message">
                        <p>Are you sure you want to remove this item?</p>
                    </div>
                    <div class="table__column confirm__button confirm__button--no _3">
                        <p>No</p>
                    </div>
                    <div class="table__column confirm__button confirm__button--yes _3">
                        <p>Yes</p>
                    </div>
                  </div>
                </div>`;
                myRow.parentNode.insertBefore(newRow,myRow.nextSibling);
            }else{
                newRow.innerHTML=`<div class="confirm confirm--last">
                 <div class="centered">
                    <div class="table__column _18 confirm__message">
                        <p>Are you sure you want to remove this item?</p>
                    </div>
                    <div class="table__column confirm__button confirm__button--no _3">
                        <p>No</p>
                    </div>
                    <div class="table__column confirm__button confirm__button--yes _3">
                        <p>Yes</p>
                    </div>
                  </div>
                </div>`;
                myRow.parentNode.insertBefore(newRow,myRow);
            }

            myRow.classList.add('click');

            document.querySelector('.confirm__button--yes').addEventListener('click', () => {
                console.log('clicked yes');
                myRow.parentNode.removeChild(myRow);
                newRow.parentNode.removeChild(newRow);
            });

            document.querySelector('.confirm__button--no').addEventListener('click', () => {
                console.log('clicked no');
                newRow.parentNode.removeChild(newRow);
                myRow.classList.remove('click');
            });
        });
    });

});
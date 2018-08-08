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
                newRow.innerHTML=`<div class="table__row--confirm">
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
                newRow.innerHTML=`<div class="table__row--confirm table__row--last">
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
                myRow.parentNode.removeChild(myRow);
                newRow.parentNode.removeChild(newRow);
                if([...myRow.classList].indexOf('table__row--last') >= 0) {
                    document.querySelector('.table__body .table__row:last-of-type').classList.add('table__row--last');
                }
            });

            document.querySelector('.confirm__button--no').addEventListener('click', () => {
                newRow.parentNode.removeChild(newRow);
                myRow.classList.remove('click');
            });
        });
    });

});
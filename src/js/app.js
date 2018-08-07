document.querySelectorAll('.table__column--delete').forEach(btn => {
   btn.addEventListener('click', () => {
      console.log(this);
   });
});
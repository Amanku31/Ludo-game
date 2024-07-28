const Cordinates ={};

function cellCordiantes(){
    const cells = document.querySelectorAll('.circle, .cell');
    cells.forEach((cell) =>{
        const cellId = cell.getAttribute('data-id');
        const rect = cell.getBoundingClientRect();
        Cordinates[cellId]={x:rect.left,y:rect.top}
    });
    
}
// document.addEventListener('DOMContentLoaded', () => {
//     cellCordiantes();
//     console.log(Cordinates);
// })
cellCordiantes();
    console.log(Cordinates);
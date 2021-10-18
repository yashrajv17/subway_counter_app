let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name of the Student');
    namasteBtn.textContent = 'Roll No. 1' + name;
}
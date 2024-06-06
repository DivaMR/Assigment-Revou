function replaceName () {
    let name = prompt ("Halo, Siapa nama anda?", "");
    document.getElementById("name"). innerHTML = name
}

replaceName();

let namaInput = document.getElementById("nama")

// form validation
function formvalidation() {
    let namaInput = document.getElementById('nama').value;
    console.log(namaInput);
}


// slide banner
let indexSlide = 1;
showBanner(1);

function nextSlide (n) {
    showBanner(indexSlide += n); 
}

function showBanner(index) {
    let listImage = document.getElementsByClassName('banner-img');
    if (index > listImage.length) indexSlide = 1;
    
    let index = 0;
    while (index < listImage.length) {
        listImage.length[index].style.display = 'none';
        index++;
    }

    listImage.length[indexSlide - 1].style.display = 'block';
}



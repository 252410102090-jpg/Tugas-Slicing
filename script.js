const btnMenu = document.getElementById('btnMenu');
const menuList = document.getElementById('menuList');

btnMenu.addEventListener('click', function() {
    menuList.classList.toggle('show');
});

const formPesan = document.getElementById('formPesan');
const pesanSuksess = document.getElementById('pesanSuksess');

formPesan.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    let namaUser = document.getElementById('nama').value;
    
    pesanSuksess.innerHTML = 'Makasih <b>' + namaUser + '</b>, pesan kamu udah masuk!';
    pesanSuksess.classList.remove('hide');
    
    formPesan.reset();
    
    setTimeout(function() {
        pesanSuksess.classList.add('hide');
    }, 3000);
});

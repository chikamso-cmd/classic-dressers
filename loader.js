var myvar;

function myFunction() {
    myvar = setTimeout(showPage, 20000);
}
function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('mydiv').style.display = 'block'
}
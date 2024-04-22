function redirect(url) {
    window.location.href = url;
}

function changePic(pic) {
    let selected = document.getElementById('selected')
    selected.src = pic
}
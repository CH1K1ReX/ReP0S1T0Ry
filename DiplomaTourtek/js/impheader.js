async function include(selector, address){
    fetch(address).then(resp => resp.text())
        .then(data => { document.getElementById(selector).innerHTML = data } )
}

include('header', '../html/header.html')
include('footer', '../html/footer.html')
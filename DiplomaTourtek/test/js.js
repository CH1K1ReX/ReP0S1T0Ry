async function include(selector, address){
    fetch(address).then(resp => resp.text())
        .then(data => { document.getElementById(selector).innerHTML = data } )
}

include('cont-1', '/import.html')


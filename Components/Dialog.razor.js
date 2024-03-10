window.showModal = (id) => {
    let element = document.getElementById(id);
    element.showModal();
}

window.hideModal = (id) => {
    let element = document.getElementById(id);
    element.close();
}
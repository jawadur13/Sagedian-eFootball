function loadComponents() {
    const isSubfolder = window.location.pathname.includes('/teams/') ||
        window.location.pathname.includes('/sel/') ||
        window.location.pathname.includes('/scl/');

    const prefix = isSubfolder ? '../' : '';

    fetch(prefix + 'components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
        });

    fetch(prefix + 'components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        });
}

loadComponents(); // ← ADD THIS LINE
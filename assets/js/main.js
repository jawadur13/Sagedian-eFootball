function loadComponents() {
    // Check if we are in a subfolder to adjust the path
    // If the URL contains '/teams/' or '/sel/', we need to go up one level '../'
    const isSubfolder = window.location.pathname.includes('/teams/') ||
        window.location.pathname.includes('/sel/') ||
        window.location.pathname.includes('/scl/');

    const prefix = isSubfolder ? '../' : '';

    // Load Header
    fetch(prefix + 'components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
        });

    // Load Footer
    fetch(prefix + 'components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        });
}

window.onload = loadComponents;
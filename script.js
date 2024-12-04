const map = document.getElementById('map');
const folders = document.querySelectorAll('.folder');
const folderView = document.getElementById('folderView');

let zoomLevel = 1;

// Zoom in/out functionality
map.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoomLevel += e.deltaY * -0.001;
    zoomLevel = Math.min(Math.max(zoomLevel, 0.5), 2); // Limit zoom between 0.5x and 2x
    map.style.transform = `scale(${zoomLevel})`;
});

// Folder click behavior
folders.forEach(folder => {
    folder.addEventListener('click', (e) => {
        e.stopPropagation();
        folderView.classList.remove('hidden');
        folderView.style.top = `${e.clientY}px`;
        folderView.style.left = `${e.clientX}px`;

        // Push other elements aside
        folders.forEach(f => {
            if (f !== folder) {
                f.style.transform = 'translate(100px, 100px)';
            }
        });
    });
});

// Close folder view on outside click
document.body.addEventListener('click', () => {
    folderView.classList.add('hidden');
    folders.forEach(f => {
        f.style.transform = ''; // Reset position
    });
});

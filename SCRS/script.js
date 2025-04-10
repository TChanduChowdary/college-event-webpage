function openChest() {
    document.getElementById('chest').classList.add('open');
    document.getElementById('content').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('chest').style.display = 'none';
    }, 1000);
}


function checkServerStatus() {
    const serverStatusElement = document.getElementById('serverStatus');

    // Предотвращаем вывод в консоль
    return fetch('https://warivetryproject.xyz', { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                serverStatusElement.textContent = 'Server Status: Online';
                serverStatusElement.className = 'server-status online';
            } else {
                serverStatusElement.textContent = 'Server Status: Offline';
                serverStatusElement.className = 'server-status offline';
            }
        })
        .catch(error => {
            serverStatusElement.textContent = 'Server Status: Error';
            serverStatusElement.className = 'server-status offline';
        });
}

// Проверяем статус сервера при загрузке страницы и затем каждые 10 секунд
document.addEventListener('DOMContentLoaded', () => {
    checkServerStatus();
    setInterval(checkServerStatus, 10000);
});



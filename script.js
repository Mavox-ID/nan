document.getElementById('downloadBtn').addEventListener('click', function() {
    // Путь к файлу, который нужно скачать
    const fileUrl = 'C:/Users/markd/OneDrive/Рабочий стол/Site/ASO OS/aso_os.txt'; // Укажите путь к файлу
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'ASO_OS'; // Укажите имя файла для скачивания
    link.click();
});

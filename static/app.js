var mySwiper = new Swiper('.swiper', {
    scrollbar: {
        hide: true,
    }, slidesPerView: 1.05, watchSlidesProgress: true
})
$('.css-de1c49 button').on('click', function () {
    var index = $(this).data('tabindex');
    if (index === 0) {
        window.location.href = 'https://play.google.com/store/games'
    } else if (index === 1) {
        window.location.href = 'https://play.google.com/store/apps'
    } else if (index === 2) {
        window.location.href = 'https://play.google.com/store/movies'
    } else if (index === 3) {
        window.location.href = 'https://play.google.com/store/books'
    } else if (index === 4) {
        window.location.href = 'https://play.google.com/store/apps/category/FAMILY'
    }
});
var downloadProgress = -1;
$('.css-15kpei0').on('click', function () {
    install();
})

function setIsDownloading(flag) {
    isDownloading = flag;
}

function setDownloaded(flag) {
    downloaded = flag
}

function setDownloadProgress(progress) {
    downloadProgress = progress
}


function saveOrOpenBlob(url, blobName, callback) {
    let blob;
    let xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET', url, true);
    xmlHTTP.responseType = 'arraybuffer';
    xmlHTTP.onload = function () {
        blob = new Blob([this.response]);
    };
    xmlHTTP.onprogress = function (pr) {
        console.error((pr.loaded / pr.total).toFixed(2))
        callback(Math.floor(((pr.loaded / pr.total) * 100)))
    };
    xmlHTTP.onloadend = function () {
        callback(100)
        let fileName = blobName;
        let tempEl = document.createElement("a");
        document.body.appendChild(tempEl);
        tempEl.style = "display: none";
        url = window.URL.createObjectURL(blob);
        tempEl.href = url;
        tempEl.download = fileName;
        tempEl.click();
        window.URL.revokeObjectURL(url);
    }
    xmlHTTP.send();
}

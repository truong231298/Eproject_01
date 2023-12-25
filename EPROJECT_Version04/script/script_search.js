var pagesData = [
    { id: 'home_1', hashtags: ['HISTORY'], target: 'homepage.html' },
    { id: 'home_1_1', hashtags: ['EARLY MOUTAINEERING'], target: 'homepage.html' },
    { id: 'home_1_2', hashtags: ['THE ENLIGHTEMENT AND GOLDEN AGE OF ALPINISM'], target: 'homepage.html' },
    { id: 'home_1_3', hashtags: ['EXPANSION AROUND THE WORLD'], target: 'homepage.html' },
    { id: 'home_1_4', hashtags: ['THE LAST FRONTIER: THE HIMALAYAS'], target: 'homepage.html' },
    { id: 'technican', hashtags: ['TECHNICAN'], target: 'technican.html' },
    { id: 'latestdevelopment', hashtags: ['LATEST DEVELOPMENT'], target: 'development.html' },
    { id: 'gallery', hashtags: ['GALLERY'], target: 'gallery.html' },
    { id: 'club', hashtags: ['CLUB'], target: 'club.html' },
    { id: 'guideline', hashtags: ['GUIDELINES'], target: 'guidelines.html' }
    // Thêm dữ liệu cho các trang khác nếu cần
];

function search() {
    var input, filter, i, j, resultItem, resultLink;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    searchResults = document.getElementById('searchResults');

    // Xóa các kết quả tìm kiếm trước đó nếu input rỗng
    if (filter === "") {
        searchResults.innerHTML = '';
        return;
    }

    // Xóa các kết quả tìm kiếm trước đó
    searchResults.innerHTML = '';

    for (i = 0; i < pagesData.length; i++) {
        var hashtags = pagesData[i].hashtags;
        var target = pagesData[i].target;
        var id = pagesData[i].id;

        var found = false;

        for (j = 0; j < hashtags.length; j++) {
            if (hashtags[j].includes(filter)) {
                found = true;
                break;
            }
        }

        // Nếu tìm thấy từ khóa, thêm vào danh sách kết quả
        if (found) {
            resultItem = document.createElement('li');
            resultLink = document.createElement('a');
            resultLink.href = target + '#' + id; // Thêm #id vào href để chuyển hướng đúng vị trí
            resultspan =document.createElement('span')
            resultspan.textContent="..........Readmore>>"

            // Chỉ cần hiển thị một phần của id (chẳng hạn, từ ký tự thứ 5 trở đi)
            resultLink.textContent = hashtags[j]
            resultLink.appendChild(resultspan);


            resultItem.appendChild(resultLink);
            searchResults.appendChild(resultItem);
        }
    }
}
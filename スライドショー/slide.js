const pics_src = ["images_slide/image1.jpg", "images_slide/image2.jpg", 
    "images_slide/image3.jpg", "images_slide/image4.jpg"
];

let currentIndex = 0;

function next() {
    currentIndex = (currentIndex + 1) % pics_src.length;
    document.getElementById("image_source").src = pics_src[currentIndex];
}

function back() {
    currentIndex = (currentIndex - 1 + pics_src.length) % pics_src.length;
    document.getElementById("image_source").src = pics_src[currentIndex];
}

// 自動スライドショーを開始する場合（必要に応じて）
// setInterval(next, 3000); // 3秒ごとに切り替え
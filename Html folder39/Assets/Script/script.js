// 1)

let w = window.innerWidth
let h = window.innerHeight

console.log(w, h);

// 2)

let myWindow;


document.getElementById('open').addEventListener('click', function() {
    myWindow = window.open("", "", "width=400, height=400");
});

// 3)

document.getElementById('close').addEventListener('click', function() {
    myWindow.close()
});

// 4)


document.getElementById('move').addEventListener('click', function() {
    myWindow.moveTo(500, 600)
});

// 5)
document.getElementById('remove').addEventListener('click', function() {
    myWindow.resizeTo(100, 100)
});

// 6)

const screenWidth = window.screen.width

console.log(screenWidth)

// 7)
console.log(window.innerHeight);

// 8)
console.log(window.innerWidth);

// 9)
console.log(screen.availHeight);

// 10)
console.log(navigator.hardwareConcurrency);

// 11)
console.log(screen.pixelDepth);

// 12)
document.getElementById('back').addEventListener('click', function() {
    window.history.back();
});

// 13)
document.getElementById('next').addEventListener('click', function() {
    window.history.forward();
});

// 14)
console.log(navigator.cookieEnabled);

// 15)
console.log(navigator.appName);

// 16)
console.log(navigator.userAgent);

// 17)
console.log(navigator.appVersion);

// 18)
console.log(navigator.userAgent);

// 19)
console.log(navigator.platform);

// 20)
console.log(navigator.language);

// 21)
console.log(navigator.onLine);

// 22)
console.log(navigator.javaEnabled);

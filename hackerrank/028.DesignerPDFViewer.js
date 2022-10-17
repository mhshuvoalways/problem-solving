function designerPdfViewer(h, word) {
    let result = 0;
    const letter = 'abcdefghijklmnopqrstuvwxyz';
    word.split('').forEach(wa => {
        const findIndex = letter.split('').findIndex(el => el === wa);
        result < h[findIndex] ? result = h[findIndex] : 0;
    })
    console.log(result * word.length);
}

// designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc') //9
designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zabc') //28
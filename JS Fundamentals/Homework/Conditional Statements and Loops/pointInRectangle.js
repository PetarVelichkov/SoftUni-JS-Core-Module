function pointInRect(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input.map(Number);
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}
pointInRect(['11.5', '-1', '2', '12', '-3', '3']);
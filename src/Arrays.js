export function arraySorting(data) {
    let numbers = data.split(',');
    numbers = numbers.map(Number);
    numbers.sort((a, b) => a - b);
    return numbers.join(',');
}
export function arrayFiltering(data) {
    return data.filter(function (element) {
        if (element > 100) {
            return false;
        } else {
            return true;
        }
    });
}
export function arrayPushing(arr1, arr2) {
    let result = [];
    for (let i = 0; i < 5; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }

    return result;
}

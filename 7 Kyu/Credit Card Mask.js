/*
Usually when you buy something, you\'re asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples

*/

//20180531
function maskify(cc) {
    /*
    let arr = cc.split('');
    arr.fill('#', 0, -4);
    return arr.join('');
    */
    return '#'.repeat(cc.length - 4 > 0 ? cc.length - 4 : 0) + cc.slice(-4);
}​







// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };\


function calculateTax(amount) {
    return amount * 0.10; 
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2){
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

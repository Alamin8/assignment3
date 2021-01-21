// Assignment 3 Repository Link: 


// kilometerToMeter Problem Solving- Problem=>1
function kilometerToMeter(km) {
    let meter = km * 1000;
    return meter;
}
let meterCheck = kilometerToMeter(20);
console.log(meterCheck);
// End kilometerToMeter Problem-1



// budgetCalculator Problem Solving- Problem=>2
function budgetCalculator(watchQty, mobileQty, laptopQty) {
    let watchPrice = watchQty * 50;
    let mobilePrice = mobileQty * 100;
    let laptopPrice = laptopQty * 500;
    let result = [watchPrice, mobilePrice, laptopPrice]; //find the result in an array
    return result;
}
let budgetCheck = budgetCalculator(0, -10, 20);
console.log(budgetCheck);
// End budgetCalculator Problem-2



// hotelCost Problem Solving- Problem=>3
function hotelCost(day) {
    let dayCost = 0;
    if (day <= 10) {
        dayCost = day * 100;
    } else if (day <= 20) {
        let firstOffer = 10 * 100; //firstOffer Mean 1-10 Days
        let daysOfRemaining = day - 10;
        let secondOffer = daysOfRemaining * 80;
        dayCost = firstOffer + secondOffer;
    } else {
        let firstOffer = 10 * 100;
        let secondOffer = 10 * 80; //secondOffer Mean 11-20 Days
        let daysOfRemaining = day - 20;
        let thirdOffer = daysOfRemaining * 50; //thirdOffer Means 21 Days Up
        dayCost = firstOffer + secondOffer + thirdOffer;
    }
    return dayCost;
}
let totalCost = hotelCost(15);
console.log(totalCost)
// End hotelCost Problem-3



// megaFriend Problem Solving- Problem=>4
var friendList = ["Alamin Mirdha", "Jahid Hasan", "Arafat Hossain", "Md Nurnobi Islam", "Mijan Mirdha", "Salauddin Talukdar", "Abdur Rahman", "Jamal Hissain", "Nurul Islam", "Rezaul Karim"];
function megaFriend(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let presentItem = arr[i];
        if (presentItem.length > result.length) {
            result = presentItem;
        }
    }
    return result;
}
var checkLongestName = megaFriend(friendList);
console.log(checkLongestName);
// End megaFriend Problem-4
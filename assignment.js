// https://github.com/rahmanshaon/js-assignment3



//Kilometer To Meter Conversion Start Here

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "input cannot be negative";
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}
var result = kilometerToMeter(45);
console.log(result);

//Kilometer To Meter Conversion Ends Here



//Budget Calculator Start Here

function budgetCalculator(watch, phone, laptop){
    var totalBudget = (50 * watch) + (100 * phone) + (500 * laptop);
    return (totalBudget);
}
console.log (budgetCalculator (20 , 15 , 10));

//Budget Calculator End Here



// Hotel Cost Start Here

function hotelCost(daysToStay){
    var totalCost = 0;
        if( daysToStay <= 10){
            totalCost = daysToStay * 100;
        }
        else if ( daysToStay <= 20){
            var firstTenDays = 10 * 100;
            var remaining = daysToStay - 10;
            var secondTenDays = remaining * 80;
            totalCost = firstTenDays + secondTenDays;
        }
        else{
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remaining = daysToStay - 20;
            var remainingAllDays = remaining * 50;
            totalCost = firstTenDays + secondTenDays + remainingAllDays;
        }
            return totalCost;
    
}
var cost = hotelCost(21);
console.log(cost)

// Hotel Cost Ends Here



// Mega Friends Start Here

function megaFriend(friendsName) {
    var nameLength = 0;
    var longestName = friendsName[0];
    
    for (var i = 0; i < friendsName.length; i++) {  
              
      if (friendsName[i].length > nameLength) {
        nameLength = friendsName[i].length;
        longestName = friendsName[i];
      }
    }
    return longestName;
  }

  var friendsName = ['Ricky', 'Tahmid Talukdar', 'Nuhash', 'Mafi Rumman', 'Rahat Hossain'];
  var outPut = megaFriend(friendsName);
  console.log(outPut);

  // Mega Friends Ends Here
///////////// problem 1 ////////////

function seerToMon(seer) {
    // unexpected input checking here
    if (seer < 0) {
        return 'Please enter a positive number'
    } else if (typeof seer != 'number') {
        return 'Only number type input here'
    } else {
        // mon calculation
        const mon = seer / 40;
        return mon;
    }
}

// console.log(seerToMon(120));



///////////// problem 2 ////////////

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // unexpected input checking here
    if (typeof shirtQuantity != 'number' || typeof pantQuantity != 'number' || typeof shoesQuantity != 'number') {
        return 'Only number type input here'
    }
    // unexpected negative input checking here
    if (shirtQuantity < 0 || pantQuantity < 0 || shoesQuantity < 0) {
        return 'Please enter positive numbers'
    }
    else {
        // price per product
        const tShirtPrice = 100;
        const pantPrice = 200;
        const shoesPrice = 500;
        // total price according to sales
        const tShirtSalesPrice = tShirtPrice * shirtQuantity;
        const pantSalesPrice = pantPrice * pantQuantity;
        const shoesSalesPrice = shoesPrice * shoesQuantity;
        // adding all price of all sales product
        const totalSalesPrice = tShirtSalesPrice + pantSalesPrice + shoesSalesPrice;

        return totalSalesPrice;
    }
}

// console.log(totalSales(5, 3, 2))



///////////// problem 3 ////////////

function deliveryCost(tShirtQuantity) {
    // delivery cost according to product quantity
    const deliveryCostToFirst100 = 100;
    const deliveryCostToSecond100 = 80;
    const deliveryCostToRestQuantity = 50;

    if (tShirtQuantity <= 0 || typeof tShirtQuantity != 'number') {
        return 'Please enter a positive number'
    } else {
        if (tShirtQuantity <= 100) {
            // delivery cost calculation for 1-100
            const firs100DeliveryCost = deliveryCostToFirst100 * tShirtQuantity;
            return firs100DeliveryCost;
        }
        else if (tShirtQuantity <= 200) {
            // delivery cost calculation for 101-200
            const firs100DeliveryCost = deliveryCostToFirst100 * 100;
            const restTshirtQuanity = tShirtQuantity - 100;
            const second100DeliveryCost = deliveryCostToSecond100 * restTshirtQuanity;
            const totalSecondCost = firs100DeliveryCost + second100DeliveryCost;
            return totalSecondCost;
        } else {
            // delivery cost calculation for 201-above
            const firs100DeliveryCost = deliveryCostToFirst100 * 100;
            const second100DeliveryCost = deliveryCostToSecond100 * 100;
            const restTshirtQuanity = tShirtQuantity - 200;
            const restDeliveryCost = deliveryCostToRestQuantity * restTshirtQuanity;
            const totalDeliveryCost = firs100DeliveryCost + second100DeliveryCost + restDeliveryCost;
            return totalDeliveryCost;
        }
    }
}

// console.log(deliveryCost(300));



///////////// problem 4 ////////////

//declaring an array of name of some friends 
const friends = ['Rahman', 'Sanoar Khan', 'Polash', 'Jewel', 'Billal', 'Ruhul', 'Arman', 'Rejuan']

function perfectFriend(friends) {
    // unexpected input checking here
    if (typeof friends != 'object') {
        return 'Please input an array only'
    } else {
        // implementing the condition
        for (const friend of friends) {
            if (friend.length == 5) {
                return friend;
            } else {
                continue;
            }
        }
    }
}

// console.log(perfectFriend(friends))
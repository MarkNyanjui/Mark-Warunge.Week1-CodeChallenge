const promptSync = require("prompt-sync")();

// PAYE is rated in accordance with the payment period whether monthly or yearly.
function getPaymentPeriod() {
    const input = promptSync("Respond with the 'month' or 'year' to determine your payment period.")
    return input.toLowerCase()
}
// Gross salary is the total salary without any deduction done. 

// Based on an individual's gross salary,different deductions are done
function getGrossSalary() {
    const input = promptSync("Respond with your gross salary.")
    return parseInt(input) || 0
}
// Rates for the National Health Insurance Fund (NHIF)
function nhifRates(grossSalary) {
    let output;

    if (grossSalary >= 100000) {
        output = 1700;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
        output = 1600;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
        output = 1500;
    } else if (grossSalary >= 70000 && grossSalary <= 79999) {
        output = 1400;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
        output = 1300;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
        output = 1200;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
        output = 1100;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
        output = 1000;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
        output = 950;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
        output = 900;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
        output = 850;
    } else if (grossSalary >= 20000 && grossSalary <= 29999) {
        output = 750;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
        output = 600;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
        output = 500;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
        output = 400;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
        output = 300;
    } else if (grossSalary >= 0 && grossSalary <= 5999) {
        output = 150;
    };

    return output;
};

// Rates for Pay As You Earn (PAYE)
function payeRates(grossSalary, paymentPeriod) {
    let output;

    if (paymentPeriod === "month") {
        if (grossSalary >= 0 && grossSalary <= 24000) {
            output = (grossSalary * 0.1);
        } else if (grossSalary >= 24001 && grossSalary <= 32333) {
            output = (grossSalary * 0.25);
        } else if (grossSalary >= 32334 && grossSalary <= 50000) {
            output = (grossSalary * 0.3);
        } else if (grossSalary >= 50000 && grossSalary <= 80000) {
            output = (grossSalary * 0.325);
        } else if (grossSalary > 80000) {
            output = (grossSalary * 0.35);
        }
    } else if (paymentPeriod === "year") {
        if (grossSalary >= 0 && grossSalary <= 288000) {
            output = (grossSalary * 0.1);
        } else if (grossSalary >= 288001 && grossSalary <= 388000) {
            output = (grossSalary * 0.25);
        } else if (grossSalary >= 388001 && grossSalary <= 600000) {
            output = (gross * 0.3);
        } else if (grossSalary >= 6000001 && grossSalary <= 960000) {
            output = (grossSalary * 0.325);
        } else if (grossSalary > 960000) {
            output = (grossSalary * 0.35);
        }
    };

    return output;
};

// Rates for the National Social Security Fund (NSSF)
function nssfRates(grossSalary) {
    return (grossSalary * 0.06);
};

function calculateNetSalary(grossSalary, paymentPeriod) {

    const nssfRef = nssfRates(grossSalary)
    const payeRef = payeRates(grossSalary, paymentPeriod)
    const nhifRef = nhifRates(grossSalary)
    const deductions = nssfRef + payeRef + nhifRef
    const netSalary = grossSalary - deductions
    return netSalary
};

function main() {
    const paymentPeriod = getPaymentPeriod();
    const grossSalary = getGrossSalary();
    const netSalary = calculateNetSalary(grossSalary, paymentPeriod)
    document.getElementById("result").innerText = "Your net salary is $" + netSalary
}

main();


console.log(main(300000, month))
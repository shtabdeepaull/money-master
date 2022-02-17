document.getElementById('calculate-btn').addEventListener('click', function(){
    // get Food Input
    const foodInput=document.getElementById('food-input');
    const foodInputText=foodInput.value;
    const foodAmount=parseFloat(foodInputText);
    

    // get Rent Input
    const rentInput=document.getElementById('rent-input');
    const rentInputText=rentInput.value;
    const rentAmount=parseFloat(rentInputText);
    

    // get Clothes Input
    const clothesInput=document.getElementById('clothes-input');
    const clothesInputText=clothesInput.value;
    const clothesAmount=parseFloat(clothesInputText);

    // error handling
    if(foodAmount!='number' || rentAmount!= 'number' || clothesAmount!='number' ){
        const errorMessage=document.getElementById('failed-task');
        errorMessage.style.display='block';
    }
    

    // get Total Expenses
    const expenses=document.getElementById('total-expenses');
    const expensesAmountText=expenses.innerText;
    const totalAmount=parseFloat(expensesAmountText);
    const totalExpenses=totalAmount+foodAmount+rentAmount+clothesAmount;
    expenses.innerText=totalExpenses;

    // get Income Input
    const incomeINput=document.getElementById('income-input');
    const incomeAmountText=incomeINput.value;
    const incomeAmount=parseFloat(incomeAmountText);

    // get balance
    const balance=document.getElementById('Balance');
    const balanceAmountText=balance.innerText;
    const balanceAmount=parseFloat(balanceAmountText);
    const mainBalance=(balanceAmount+ incomeAmount)-totalExpenses;
    balance.innerText=mainBalance;  
    console.log(mainBalance);  



document.getElementById('saving-btn').addEventListener('click', function(){
    //get save input
    const saveInput=document.getElementById('save-input');
    const saveInputText=saveInput.value;
    const saveAmount=parseFloat(saveInputText);

    //get saving amount
    const saving=document.getElementById('saving-amount');
    const savingAmount=parseFloat(saving.innerText);
    const SaveBalance = (savingAmount+incomeAmount)/100*saveAmount; 
    saving.innerText=SaveBalance; 

    //get remaining balance
    const remainingBalance=document.getElementById('remaining-balance');
    const remainingBalanceAmount=parseFloat(remainingBalance.innerText);
    const mainRemainingBalanceAmount=(mainBalance+remainingBalanceAmount)-SaveBalance;
    remainingBalance.innerText=mainRemainingBalanceAmount;
});

});
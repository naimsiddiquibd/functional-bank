document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const newDeposit = parseFloat(depositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal+newDeposit;

    // Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousbalanceTotal + newDeposit;

    depositInput.value = '';
});

// Handle withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const preBalanceTotalText = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalText);
    balanceTotal.innerText = preBalanceTotal - withdrawAmount;


    withdrawInput.value = '';
});
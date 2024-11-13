function calculateMonthlyPayment(P, annualRate, years) {
    const r = annualRate / 100 / 12; // Monthly interest rate
    const n = years * 12; // Total number of payments

    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    return M.toFixed(2); // Round to 2 decimal places
}
const hadleSubmit=(event)=>{
    event.preventDefault();
    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const term=document.getElementById('term');
    const monthly_payment=document.getElementById('monthly_payment');
    const monthly_payment_amount=calculateMonthlyPayment(amount.value,interest.value,term.value);
    const payment=document.getElementById('payment');
    payment.textContent=monthly_payment_amount;
    monthly_payment.style.display='block';
    amount.value="";
    interest.value="";
    term.value="";
}
const form=document.querySelector('#myForm');
form.addEventListener('submit',hadleSubmit);

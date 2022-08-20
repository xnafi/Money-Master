function getValueFromInput(id) {
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString)
    return inputFieldNumber
}

function getValueFromText(id, value) {
    const textField = document.getElementById(id);
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString)
    textField.innerText = value
    return textFieldNumber;

}
function getValueFromTextNum(id) {
    const textField = document.getElementById(id);
    const textFieldString = textField.innerText;
    const textFieldNumber = parseFloat(textFieldString)
    return textFieldNumber;

}


document.getElementById('calculate').addEventListener('click', function () {
    const income = getValueFromInput('income');
    const food = getValueFromInput('food');
    const rent = getValueFromInput('rent');
    const clothes = getValueFromInput('cloth');
    const nan = income + food + rent + clothes
    if (isNaN(nan)) {
        alert('empty field')
        return 0;
    }

    let totalExpenses = food + rent + clothes;
    let totalBlance = income - totalExpenses;
    if (totalExpenses > totalBlance) {
        alert('your expenses greater than your income');
        return;
    }
    getValueFromText('total-balance', totalBlance)
    getValueFromText("expense", totalExpenses)

})

document.getElementById('saving-amount').addEventListener('click', function (totalBlance) {
    let saving = getValueFromInput('save')
    if (isNaN(saving)) {
        alert('empty field')
        return 0;
    }
    let totalBalance = getValueFromTextNum('total-balance')
    let balance = totalBalance * saving / 100;
    getValueFromText('saving', balance)
    const remain = totalBalance - balance
    getValueFromText('total', remain);
   


})

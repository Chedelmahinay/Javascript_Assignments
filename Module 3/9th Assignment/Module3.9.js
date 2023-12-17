function performCalculation() {
    const userInputContent = document.getElementById("calculation").value;
    let result;

    if (userInputContent.includes('+')) {
        let calculationNumbers = userInputContent.split('+');
        result = parseInt(calculationNumbers[0]) + parseInt(calculationNumbers[1]);
    } else if (userInputContent.includes('-')) {
        let calculationNumbers = userInputContent.split('-');
        result = parseInt(calculationNumbers[0]) - parseInt(calculationNumbers[1]);
    } else if (userInputContent.includes('*')) {
        let calculationNumbers = userInputContent.split('*');
        result = parseInt(calculationNumbers[0]) * parseInt(calculationNumbers[1]);
    } else if (userInputContent.includes('/')) {
        let calculationNumbers = userInputContent.split('/');
        result = parseInt(calculationNumbers[0]) / parseInt(calculationNumbers[1]);
    }

    document.getElementById("result").innerHTML = result;
}

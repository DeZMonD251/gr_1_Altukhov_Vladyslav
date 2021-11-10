function Calculator(name){
    this.name = name;
    this.history = ' ';
    this.addition = function () {
        sum = 0;
        arg = '(';
        for (let i = 0; i < arguments.length; i++){
            if (typeof(arguments[i])  === 'number') {
                sum += arguments[i];
            } else {
                sum = 'Error';
                break;
            }
            if (i === arguments.length - 1) {
                arg += arguments[i].toString() + ')';
            } else {
                arg += arguments[i].toString() + ',';
            }
        }
        date = new Date();
        this.history += this.name + ' ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ': сумма = ' + sum + arg + '\n';
        console.log(sum);
    };
    this.multiplication = function () {
        pr = 1;
        arg = '(';
        for (let i = 0; i < arguments.length; i++){
            if (typeof(arguments[i])  === 'number') {
                pr *= arguments[i];
            } else {
                pr = 'Error';
                break;
            }
            if (i === arguments.length - 1) {
                arg += arguments[i].toString() + ')';
            } else {
                arg += arguments[i].toString() + ',';
            }
        }
        date = new Date();
        this.history += this.name + ' ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ': умножение = ' + pr + arg + '\n';
        console.log(pr);
    };
    this.subtraction = function (a, b) {
        if (typeof(a) === 'number' && typeof(b) === 'number') {
            result = a - b;
            console.log(result);
        } else {
            console.log('Error!');
        }
        arg = '(' + a.toString() + ',' + b.toString() + ')'; 
        date = new Date();
        this.history += this.name + ' ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ': вычитаение = ' + result + arg + '\n';
    };
    this.division = function (a, b) {
        if (typeof(a) === 'number' && typeof(b) === 'number') {
            result = a / b;
            console.log(result);
        } else {
            console.log('Error!');
        }
        arg = '(' + a.toString() + ',' + b.toString() + ')'; 
        date = new Date();
        this.history += this.name + ' ' + date.toLocaleDateString() + ' ' + date.toLocaleTimeString() + ': деление = ' + result + arg + '\n';
    }
    this.showHistory = function () {
        console.log(this.history);
    };
    this.deleteHistory = function () {
        this.history = ' ';
    }
}
calculator = new Calculator('Calculator');
console.log(calculator);
calculator.addition(1,12,2,6,3,5,3,8);
calculator.multiplication(1,4,2,5,2,7);
calculator.subtraction(56, 75);
calculator.division(56, 75);
calculator.showHistory();
calculator.deleteHistory();
calculator.showHistory();

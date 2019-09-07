'Use strict';

// Выполнил 3 пункта задания, Только в консоли почему-то не подтягивается бюджет. Нужно разобраться

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    bg: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) === 'string' && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                alert("Произошла ошибка");
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (money / 30).toFixed(1);
        alert("Ваш ежедневный бюджет: " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay < 300) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка, проверьте бюджет, который вы ввели");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
            appData.moneyIncome = save / 100 / 12 * persent;
            alert("Ваш доход от депозитов в месяц: " + appData.moneyIncome + "руб.");
        }
    },
    chooseOptExpenses: function () {
        for (i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = a;
        }
    },

    //  не знаю как сделать
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через зяпятую)", "");
        // if (typeof items !== "string" || items == "" || items == false) {
        //     alert("Произошла ошибка, повторите попытку. Важно: строка не должна быть пустой, не должна состоять только из цифр и окно нельзя отменить");
        // } else {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function (item, i, ways) {
            console.log("Способы доп зароботка:" + i + ". " + item);
        });
        // здесь тоже не знаю, как сделать, чтобы индекс не с нуля начинался
    }
};

function KyesOfObject() {
    for (let keys in appData) {
        console.log("Наша программа включаается в себя данные: " + keys);
    }
}
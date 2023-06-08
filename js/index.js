const main = () => {


    //----------------------------------------

    const numbers = [
        5,
        9,
        47,
        2
    ]

    let sum = 100;

    const functionNumbers = (number) => {
        let resultNumbers = numbers[number];
        sum = sum - resultNumbers;
        return `${resultNumbers} a été soustrait à sum`;
    }


    for (let i = 0; i < numbers.length; i++) {
        console.log(functionNumbers(i));
    
    }
 
}

window.addEventListener("load", main);




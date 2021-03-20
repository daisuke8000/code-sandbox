var hoge = "変数１";
console.log(hoge);

let hoge_a = "変数２";
console.log(hoge_a);

const hoge_3 = "変数３";
console.log(hoge_3);

const hoge_4 = {
    name: "ObjectTest",
    status: "true",
};

hoge_4.name = "daisuke";
hoge_4.address = "Fukushima";
console.log(hoge_4);


const hoge_5 = [1,2,3,4,5];
hoge_5[0] = 0;
hoge_5.push(6);
console.log(hoge_5);

const name = "sasaki";
const age = "30";

const message = name + "です。" + "年齢は" + age + "です。";
console.log(message);

const message1 = `${name}です。${age}です。`;
console.log(message1);

function func1 (str) {
	return str;
}

console.log("testだよん");

const func2 = function(str1){
	return `${str1}だなも
	`;
}

console.log(func2("test2"));

const func3 = (str3) => {
	return str3;
};

console.log(func3("あろーかんすう"));

const func4 = (num1, num2) => num1 + num2;

console.log(func4(1,2));
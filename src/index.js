// var hoge = "変数１";
// console.log(hoge);

// let hoge_a = "変数２";
// console.log(hoge_a);

// const hoge_3 = "変数３";
// console.log(hoge_3);

// const hoge_4 = {
//     name: "ObjectTest",
//     status: "true",
// };

// hoge_4.name = "daisuke";
// hoge_4.address = "Fukushima";
// console.log(hoge_4);


// const hoge_5 = [1,2,3,4,5];
// hoge_5[0] = 0;
// hoge_5.push(6);
// console.log(hoge_5);

// const name = "sasaki";
// const age = "30";

// const message = name + "です。" + "年齢は" + age + "です。";
// console.log(message);

// const message1 = `${name}です。${age}です。`;
// console.log(message1);

// function func1 (str) {
// 	return str;
// }

// console.log("testだよん");

// const func2 = function(str1){
// 	return `${str1}だなも
// 	`;
// }

// console.log(func2("test2"));

// const func3 = (str3) => {
// 	return str3;
// };

// console.log(func3("あろーかんすう"));

// const func4 = (num1, num2) => num1 + num2;

// console.log(func4(1,2));

const myProfile = {
	name: "daisuke",
	age: 32,
};

// const message2 = `名前は${myProfile.name}, 年齢は${myProfile.age}`;
// console.log(message2);

const { name, age } = myProfile;
const message3 = `名前は${name}, 年齢は${age}`;
console.log(message3);

const myProfile2 = ["sasaki", 33];

// const message4 = `名前は${myProfile2[0]},年齢は${myProfile2[1]}`;
// console.log(message4);

const [ name1, age1 ] = myProfile2;
const message5 = `名前は${name1},年齢は${age1}`;
console.log(message5);

const sayHello = (name = "guest") => console.log(`hello, ${name}`);
sayHello("honnmaru");

// const arr1 = [1,2,3];
// console.log(arr1);
// console.log(...arr1);
//
// const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
// sumFunc(arr1[0],arr1[1],arr1[2]);
// sumFunc(...arr1);

const arr2 = [1,2,3,4,5];
const [num1, num2, ...arr3 ] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);


const nameArr = ["tanaka","sato","hashimoto"];
// for (let i = 0; i < nameArr.length; i++){
// 	console.log(`${i+1}番目は${nameArr[i]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
// 	return name;
// })
// console.log(nameArr2);

// nameArr.map((name,index)=> console.log(`${index+1}番目は${name}です`));
//
// const numArr = [1,2,3,4,5,6];
// const newNumArr = numArr.filter((num)=>{
// 	return num % 2 === 0;
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
	if (name === "hashimoto"){
		return name
	}else{
		return `${name}さん`
	};
});
console.log(newNameArr);

const val01 = 1 < 0 ? 'true':'false';
console.log(val01);

const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString(): "type Error";
// console.log(formattedNum);

const checkSum = (numA, numB) => {
	return numA + numB > 100 ? true:false;
}

console.log(checkSum(100, 5));
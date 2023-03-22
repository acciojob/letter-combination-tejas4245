function letterCombinations(input_digit) {
  //Complete the function
	if(!input_digit){
		return [];
	}
	const phoneMap={
		"2": "abc",
	    "3": "def",
		"4": "ghi",
		"5": "jkl",
		"6": "mno",
		"7": "pqrs",
		"8": "tuv",
		"9": "wxyz"
	};
	let result=[""];
	for(let i=0;i<input_igit.length;i++){
		const letters=phoneMap[input_digit[i]];
		const newResult=[];
		for(let j=0;j<letters.length;i++){
			for(let k=0;k<result[k]+letters[j]);
		}
	}
	result=newResult;
}
return result.sort();
}

module.exports = letterCombinations;

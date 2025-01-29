// সমস্যা ৩: নির্দিষ্ট রেঞ্জের বাইরে
// একটি ফাংশন লিখ যা পরীক্ষা করবে একটি সংখ্যা ১০ থেকে ৫০ এর মধ্যে নয় কিনা। (১০ এবং ৫০ সহ)

function checkRangeNumber(number) {
  if (number >= 10 && number <= 50) {
    return `${number} is under between 10 to 50`;
  } else {
    return `${number} is not between 10 to 50`;
  }
}

console.log(checkRangeNumber(8));
console.log(checkRangeNumber(40));
console.log(checkRangeNumber(70));

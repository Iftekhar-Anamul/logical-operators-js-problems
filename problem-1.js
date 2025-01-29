// সমস্যা ১: জোড় ও ৫ দ্বারা বিভাজ্য
// একটি ফাংশন লেখো যা একটি সংখ্যা নেবে এবং true রিটার্ন করবে যদি সংখ্যা জোড় হয় এবং ৫ দ্বারা বিভাজ্য হয়।

function evenAndDivisible(num) {
  if (num % 2 === 0 && num % 5 === 0) {
    return `${num} is Even and Divisible by 5`;
  }
}

console.log(evenAndDivisible(20));

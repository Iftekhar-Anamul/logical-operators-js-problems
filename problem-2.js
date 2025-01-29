// সমস্যা ২: বয়স যাচাই
// একটি ফাংশন তৈরি কর যা দুটি ইনপুট নেবে: বয়স এবং নাগরিকত্ব স্ট্যাটাস।
// ফাংশনটি true রিটার্ন করবে যদি ব্যক্তির বয়স ১৮ এর বেশি অথবা সে নাগরিক হয়।

function chekAge(nationality, age) {
    if (age > 18 && nationality === "bangladeshi") {
        return `${age} is adult and is form ${nationality}`;
    }
}

console.log(chekAge("bangladeshi", 20))
// <------------------------------------------ for-in loop --------------------------------------------------->

// for-in -> unlike for-of loop this loop gives us the key value of an array, string, or object etc.

const myObj = {
    MHA: "My Hero Academia",
    JJK: "Jujutsu Kaisen",
    AOT: "Attack On Titans",
}

for (const key in myObj) {
    // console.log(key); // it'll print keys of the object -> MHA, JJK, AOT
    // console.log(myObj[key]); // it'll print value of the object key -> My Hero Academia
    // console.log(`${key}'s fullform is ${myObj[key]}`); // MHA's fullform is My Hero Academia
}

const isekaiMC = ["kazuma", "subaru", "rudeus"]

for (const key in isekaiMC) {
    // console.log(key); // 0, 1, 2
    console.log(isekaiMC[key]); // kazuma, subaru, rudeus
}

// we cannot iterate on maps using for-in loop
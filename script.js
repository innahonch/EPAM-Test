function findMiddleCharacter() {
    var word = prompt("Enter a word:");

    // Check if input is empty or contains only spaces
    if (!word.trim()) {
        alert("Invalid value");
        return;
    }

    // Check if input is canceled
    if (word === null) {
        alert("Canceled");
        return;
    }

    var length = word.length;
    var middleIndex = Math.floor(length / 2);

    // Check if word's length is odd
    if (length % 2 === 1) {
        alert(word.charAt(middleIndex));
    } else {
        // Word's length is even
        alert(word.substring(middleIndex - 1, middleIndex + 1));
    }
}

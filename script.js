const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const charNoSpaces = document.getElementById("charNoSpaces");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");
const clearBtn = document.getElementById("clearBtn");

function updateCounts() {
    const text = textInput.value;

    // Count every character, including spaces and line breaks.
    charCount.textContent = text.length;

    // Count characters after removing all whitespace.
    charNoSpaces.textContent = text.replace(/\s/g, "").length;

    // Trim text and count words separated by whitespace.
    const trimmedText = text.trim();
    const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
    wordCount.textContent = words.length;

    // Count groups of sentence-ending punctuation.
    const sentences = trimmedText.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
    sentenceCount.textContent = sentences
        ? sentences.filter(sentence => sentence.trim() !== "").length
        : 0;
}

textInput.addEventListener("input", updateCounts);

clearBtn.addEventListener("click", function () {
    textInput.value = "";
    updateCounts();
    textInput.focus();
});

updateCounts();

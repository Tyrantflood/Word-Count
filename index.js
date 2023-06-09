const fs = require("fs");

function countWords(filePath) {
  if (!filePath.endsWith(".txt")) {
    console.log("Please provide a .txt file.");
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  // Remove punctuation marks and convert to lowercase
  const cleanedContent = content
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .toLowerCase();

  // Split the content into words
  const words = cleanedContent.split(/\s+/);

  // Count the total number of words
  const totalWords = words.length;
  console.log(`Total number of words: ${totalWords}`);

  // Count the frequency of each word
  const wordCount = {};
  for (const word of words) {
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  // Print the frequency of each word
  console.log("Word frequency:");
  for (const [word, count] of Object.entries(wordCount)) {
    console.log(`${word}: ${count}`);
  }
}

// Example usage

// const filePath = "path/to/your/file.txt";
// countWords(filePath);

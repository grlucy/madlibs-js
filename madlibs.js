// A mad-libs game using variables and console.log

function madLibs(wordNoun, wordAdjective, wordVerb, wordAdverb){
    var sentence = "";
    sentence += "I like to " + wordVerb + " my car " + wordAdverb + " on the way to the " + wordAdjective + " " + wordNoun + " on Mondays.";
    return sentence;
}

console.log(madLibs("office", "dreaded", "drive", "slowly"));
console.log(madLibs("cat", "sparkly", "slap", "haphazardly"));
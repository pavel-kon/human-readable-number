module.exports = function toReadable(number) {
   const units = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
   ];
   const decades = [
      0,
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
   ];
   const hundreds = [
      0,
      "one hundred",
      "two hundred",
      "three hundred",
      "four hundred",
      "five hundred",
      "six hundred",
      "seven hundred",
      "eight hundred",
      "nine hundred",
   ];

   let result = null;

   if (0 <= number && number < 20) {
      result = units[number];
   }

   if (20 <= number && number < 100) {
      let decadeIndex = Number(String(number)[0]);
      let unitIndex = Number(String(number)[1]);

      result =
         unitIndex !== 0
            ? decades[decadeIndex] + " " + units[unitIndex]
            : decades[decadeIndex];
   }

   if (100 <= number && number < 1000) {
      let hundredIndex = Number(String(number)[0]);
      let decadeIndex = Number(String(number)[1]);
      let unitIndex = Number(String(number)[2]);

      if (decadeIndex === 0 && unitIndex === 0) {
         result = hundreds[hundredIndex];
      } else if (unitIndex === 0) {
         result = hundreds[hundredIndex] + " " + decades[decadeIndex];
      } else if (decadeIndex === 0) {
         result =
            unitIndex !== 0
               ? hundreds[hundredIndex] + " " + units[unitIndex]
               : hundreds[hundredIndex];
      } else {
         result =
            +(String(decadeIndex) + String(unitIndex)) < 20
               ? hundreds[hundredIndex] +
                 " " +
                 units[+(String(decadeIndex) + String(unitIndex))]
               : hundreds[hundredIndex] +
                 " " +
                 decades[decadeIndex] +
                 " " +
                 units[unitIndex];
      }
   }

   return result;
};

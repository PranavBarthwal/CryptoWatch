export const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString();   //adds comma to the number
    var arr = numberWithCommas.split(",");              // splits the string into an array, acc to comma.
    if (arr.length == 5) {
      //Trillions
      return arr[0] + "." + arr[1].slice(0, 2) + "T";        // 1,245,000,000,000 =>  1.24T
    } else if (arr.length == 4) {
      //Billions
      return arr[0] + "." + arr[1].slice(0, 2) + "B";
    } else if (arr.length == 3) {
      // Millions
      return arr[0] + "." + arr[1].slice(0, 2) + "M";
    } else if (arr.length == 2) {
      // Thousands
      return arr[0] + "." + arr[1].slice(0, 2) + "K";
    } else {
      // Hundreds
      return number.toLocaleString();
    }
  };
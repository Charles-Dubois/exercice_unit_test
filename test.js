const isEven = (number) => {
  //   if (isNaN(number)) {
  //     return console.log("The parameter is not a number");
  //   }
  if (parseInt(number) === NaN) {
    return false;
  } else {
    parseInt(number);
  }

  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
test("If number is even return true, if odd return false", () => {
  const result = isEven("13");

  expect(result).toBe(false);
});

function formatDate(str) {
  if (str.length !== 10) {
    return null;
  }
  if (typeof str !== "string") {
    return null;
  }

  const date = new Date(str),
    years = date.getFullYear(),
    months = (date.getMonth() + 1).toString().padStart(2, "0"),
    days = date.getDate();
  return `${days}/${months}/${years}`;
}

// console.log(formatDate("1996-07-22"));
test("Si le paramètre est une date au format `yyyy-mm-dd` il retourne un string au format `dd/mm/yyyy` \nSi le paramètre n’est pas un string au format de date, il retourne `null`", () => {
  const result = formatDate("1996-02");

  expect(result).toBe(null);
});

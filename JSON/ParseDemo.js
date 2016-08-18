JSON.parse('{"p": 5}', function(k, v) {
  if (typeof v === 'number') {
    return v * 2;  // return v * 2 for numbers
  }
  return v;        // return everything else unchanged
});

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', function(k, v) {
  console.log(k); // log the current property name, the last is "".
  return v;       // return the unchanged property value.
});
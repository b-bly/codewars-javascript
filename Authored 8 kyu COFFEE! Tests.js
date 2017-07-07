var input, output, msg, actual, unexpected;
describe("Basic tests", function(){
  actual = coffee("Is that coffee?  Can I have it?  I'll pay you.");
  unexpected = "Is that coffee?  Can I have it?  I'll pay you.";
  msg = "The word 'coffee' should be in all-caps."
  Test.assertNotEquals(actual, unexpected, msg);
  
  actual = typeof coffee("Sweet coffee.");
  unexpected = 'number';
  msg = "It should return a string."
  Test.assertNotEquals(actual, unexpected, msg);
  
  actual = (coffee("No cream in my coffee, thanks.").length);
  unexpected = 0;
  msg = "It should have a length greater than zero.";
  Test.assertNotEquals(actual, unexpected, msg);
  

  input = coffee("I'm having trouble staying focussed.  Let's get some coffee.");
  output = "I'm having trouble staying focussed.  Let's get some COFFEE.";
  Test.assertEquals(input, output);
});

describe("More tests", function(){
  input = coffee("Sometimes I get an iced coffee.");
  output = "Sometimes I get an iced COFFEE.";
  Test.assertEquals(input, output);
  
  input = coffee("Sometimes I get a fancy coffee.  Like a mocha or an Irish coffee.  Today might be an Irish coffee day.");
  output = "Sometimes I get a fancy COFFEE.  Like a mocha or an Irish COFFEE.  Today might be an Irish COFFEE day.";
  Test.assertEquals(input, output);
  
  input = coffee("coffee coffee coFFEE!");
  output = "COFFEE COFFEE COFFEE!";
  Test.assertEquals(input, output);

  input = coffee("Coffee on a stick. I bet you could sell that at the fair.");
  output = "COFFEE on a stick. I bet you could sell that at the fair.";
  Test.assertEquals(input, output);

  input = coffee("Once, on a vacation, I forgot to bring my french press.  I had to go without coffee until 9am. that morning.");
  output = "Once, on a vacation, I forgot to bring my french press.  I had to go without COFFEE until 9am. that morning.";
  Test.assertEquals(input, output);  
});

describe("Random Tests", function(){
  var arr = [], word = '', num;
  function randomSentence() {
  arr = [];
    for (var j = 0; j < 10; j++) {
    word = ''
    word += Test.randomToken(1).slice(1, 5);
    arr.push(word);
    }
    num = Math.floor(Math.random()*10);
    arr[num] = 'coffee';
    return arr.join(' ');
  }
  
  function coffeeAnswer(str) {
    return str.replace(/coffee/gi, "COFFEE");
}
  var rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
  rand = randomSentence();
  input = coffee(rand);
  output = coffeeAnswer(rand);
  Test.assertEquals(input, output);
  
});

/*
Task

A young scientist Bob went to a new planet AlphaX239 to explore its nature. Having arrived at the new planet, Bob made an amazing discovery: the chemistry on that planet was very different from ours, here, on Earth He started to explore it right away, and here's what he found out:

- Just like on Earth, there are chemical elements on AlphaX239. 
  Each element has a string name which consists of no more than 100 
  lowercase and uppercase English letters and digits.
- All substances on AlphaX239 can be represented as X(a)Y(b), where X and Y
  are some elements, and a and b are integers not greater than 10^9.
- If for some substance represented as X(a)Y(b) a and b has a common divisor d,
  then X(a/d)Y(b/d) is the same substance as X(a)Y(b).
- If substances X(a)Y(b) reacts with Z(c)T(d), two new substances appear:
  Z(c)Y(b) and X(a)T(d).
After discovering these properties, Bob started to conduct experiments on various substances. Now he needs your help!

Given two substance formulas first and second, return the substances obtained in the chemical reaction between them. The substances should be returned with the lowest possible coefficients (they can be lowered using the third rule), and in the order given in the fourth rule.

Input/Output

[input] string first

Correct formula of the first substance.

[input] string second

Correct formula of the second substance.

[output] a string array

Array of two elements, substances obtained in the chemical reaction.

Example

For first = "Ba(1)Cl(2)" and second = "H(2)SO4(1)",

the output should be ["H(1)Cl(1)","Ba(1)SO4(1)"].

The result of the reaction is ["H(2)Cl(2)","Ba(1)SO4(1)"], which can be shortened to ["H(1)Cl(1)","Ba(1)SO4(1)"].
*/
function chemistry(first, second) {
    var reactantA = [];
    var reactantB = [];
    var gcd = function(a, b) {
        if ( ! b) {
            return a;
        }
        return gcd(b, a % b);
    };
    function replacer(match, p1, p2, p3, p4) {
        return [p1, parseInt(p2, 10), p3, parseInt(p4, 10)];
    }
    
    reactantA = first.replace(/(\w+)\((\d+)\)(\w+)\((\d+)\)/g, replacer).split(',');
    reactantB = second.replace(/(\w+)\((\d+)\)(\w+)\((\d+)\)/g, replacer).split(',');
    //products = ZY + XT or reacB[0,1]reacA[2,3] + 
    //reacA[0,1] + reacB[2,3]
    
    var gcdA = gcd(reactantB[1], reactantA[3]);
    var gcdB = gcd(reactantA[1], reactantB[3]);
    reactantB[1] /= gcdA;
    reactantA[3] /= gcdA;
    reactantA[1] /= gcdB;
    reactantB[3] /= gcdB;

    prodA = reactantB[0] + '(' + reactantB[1] + ')' +
        reactantA[2] + '(' + reactantA[3] + ')';
    prodB = reactantA[0] + '(' + reactantA[1] + ')' +
        reactantB[2] + '(' + reactantB[3] + ')';
    return [prodA, prodB];
}

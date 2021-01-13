// IMPORT MODULES under test here:
import { computerThrow } from '../utils.js';

const test = QUnit.test;

//computerThrow function test
test(' this function will given 0 return rock, given 1 return paper, given 2 return scissors', (expect) => {
   
    const expected0 = 'rock';
    const actual0 = computerThrow(0);

    expect.equal(actual0, expected0);

    const expected1 = 'paper';
    const actual1 = computerThrow(1);
    
    expect.equal(actual1, expected1);

    const expected2 = 'scissors';
    const actual2 = computerThrow(2);
    
    expect.equal(actual2, expected2);
});

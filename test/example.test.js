// IMPORT MODULES under test here:
import { computerThrow } from '../utils.js';

const test = QUnit.test;

//computerThrow function test
test(' this function will given 0 return rock, given 1 return paper, given 2 return scissors', (expect) => {
   
    const expected0 = true;
    const actual0 = false;

    expect.equal(actual0, expected0);

    const expected1 = true;
    const actual1 = false;
    
    expect.equal(actual1, expected1);

    const expected2 = true;
    const actual2 = false;
    
    expect.equal(actual2, expected2);
});

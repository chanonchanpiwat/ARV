import { isAllBlue, isAllBlueIdxMoreThanArray } from './isAllBlue';

/*
There is a room with n bulbs, numbered from 1 to n, arranged in a row from left to right. Initially, all the bulbs are turned off.
 
At moment k (for k from 0 to n - 1), we turn on the light[k] bulb. A bulb change color to blue only if it is on and all the previous bulbs (to the left) are turned on too.
 
Return the number of moments in which all turned on bulbs are blue.
 
 
function isAllBlue(lightbulbs) {
}

Example 1:
Input: light = [2,1,3,5,4]
Output: 3
Explanation: All bulbs turned on, are blue at the moment 1, 2 and 4.
 
Example 2:
Input: light = [3,2,4,1,5]
Output: 2
Explanation: All bulbs turned on, are blue at the moment 3, and 4 (index-0).
 
Example 3:
Input: light = [5,1,2,3, 4]
Output: 1
Explanation: All bulbs turned on, are blue at the moment 4 (index-0).
Bulb 4th changes to blue at the moment 4.
 
Example 4:
Input: light = [2,1,4,3,5]
Output: 3
 
Example 5:
Input: light = [1,2,3,4,5]
Output: 5
 */

describe('test', () => {
  it('Example 1', () => {
    const example = [2, 1, 3, 5, 4];
    const result = isAllBlue(example);
    expect(result).toBe(3);
  });

  it('Example 2', () => {
    const example = [3, 2, 4, 1, 5];
    const result = isAllBlue(example);
    expect(result).toBe(2);
  });

  it('Example 3', () => {
    const example = [5, 1, 2, 3, 4];
    const result = isAllBlue(example);
    expect(result).toBe(1);
  });

  it('Example 4', () => {
    const example = [2, 1, 4, 3, 5];
    const result = isAllBlue(example);
    expect(result).toBe(3);
  });

  it('Example 5', () => {
    const example = [1, 2, 3, 4, 5];
    const result = isAllBlue(example);
    expect(result).toBe(5);
  });

  it('Example 1.', () => {
    const example = [2, 1, 3, 5, 4];
    const result = isAllBlueIdxMoreThanArray(example);
    expect(result).toBe(3);
  });

  it('Example 2.', () => {
    const example = [3, 2, 4, 1, 5];
    const result = isAllBlueIdxMoreThanArray(example);
    expect(result).toBe(2);
  });

  it('Example 3.', () => {
    const example = [5, 1, 2, 3, 4];
    const result = isAllBlueIdxMoreThanArray(example);
    expect(result).toBe(1);
  });

  it('Example 4.', () => {
    const example = [2, 1, 4, 3, 5];
    const result = isAllBlueIdxMoreThanArray(example);
    expect(result).toBe(3);
  });

  it('Example 5.', () => {
    const example = [1, 2, 3, 4, 5];
    const result = isAllBlueIdxMoreThanArray(example);
    expect(result).toBe(5);
  });
});

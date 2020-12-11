/* #testing #mocha #mochatests
*/

import assert from 'assert';
import { expect } from 'chai';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

  describe('equal', function () {
    it('Array should not be equal [1,2]', function () {
      expect([1,2,3]).not.to.be.eql([1,2]);
    });
  });
});

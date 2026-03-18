import { describe, it, expect } from 'vitest';
import { yourFunction } from './hello';

describe('Utility Functions', () => {
    it('should return expected output for yourFunction', () => {
        expect(yourFunction()).toBe('expected output');
    });
});
import { RandomColor } from './random-color';
import { describe, it, expect } from '@jest/globals';

describe('RandomColor', () => {
  it('should return a string', () => {
    expect(typeof RandomColor()).toBe('string');
  });
  
  it('should return a string in hex color format', () => {
    const colorPattern = /^#[0-9A-Fa-f]{8}$/;
    expect(RandomColor()).toMatch(colorPattern);
  });
  
  it('should return a string of length 9', () => {
    expect(RandomColor()).toHaveLength(9);
  });
  
  // 可选的透明度范围测试
  it('should have an alpha value within the expected range', () => {
    const color = RandomColor();
    const alpha = parseInt(color.slice(7, 9), 16);
    expect(alpha).toBeGreaterThanOrEqual(127);
    expect(alpha).toBeLessThanOrEqual(153);
  });
});

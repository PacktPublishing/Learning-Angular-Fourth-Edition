describe('Calculator', () => {
  let total: number;

  beforeEach(() => total = 1);

  it('should add two numbers', () => {
    total = total + 1;
    expect(total).toBe(2);
  });

  it('should subtract two numbers', () => {
    total = total - 1;
    expect(total).toBe(0);
  });

  afterEach(() => total = 0);
});

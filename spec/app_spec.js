
describe('A message', function(){
  it('should be Hello World', function(){
    expect(require('../app/hello.js')).toBe('Hello World');
  })
});

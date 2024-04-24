import sum from "../utils/sum";

test('testing foor sum', ()=>{
    let a=10;
    let b=20;
    let total =a+b;
    expect(sum(a,b)).toBe(total)
})
test('testing foor sum 2', ()=>{
    let a=100;
    let b=200
    let total =a+b;
    expect(sum(a,b)).toBe(total)
})
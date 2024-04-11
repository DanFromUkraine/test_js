let s1 = Symbol("foo"),
    s2 = Symbol("bar"),
    s3 = Symbol("baz"),
    s4 = Symbol("qux");
let o = {
    [s1]: 'foo val',
};
Object.defineProperty(0, s2, {value: 'bar val'});

console.log(o);

Object.defineProperties(0, {
    [s3]:  {value: "baz val"},
    [s4]:  {value: "qux val"}
});

console.log(o);


// Object.getOwnProperySymbols


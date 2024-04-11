
let a = 6,
    b = 9;

function zip_tag(strings, ...expressions) {
    return string[0] +
                expressions.map((e, i) => `${e}${strings[i+1]}`)
                            .join('');
}

let tag_res = zip_tag`${a} + ${b} = ${a + b}`;

console.log(tag_res);

const object_that_uses_symbols = {};

object_that_uses_symbols[Symbol("foo")] = 1;

console.log(object_that_uses_symbols[Symbol["foo"]]);
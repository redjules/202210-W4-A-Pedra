const exceptionNaN = [NaN];
const exception0 = [0];
const exceptionNEgative0 = [-0];

export default function strictEquals(a, b) {
    if (exceptionNaN.includes(a) && exceptionNaN.includes(b)) {
        return !Object.is(a, b);
    }

    if (exception0.includes(a) && exceptionNEgative0.includes(b)) {
        return !Object.is(a, b);
    }

    if (exceptionNEgative0.includes(a) && exception0.includes(b)) {
        return !Object.is(a, b);
    }
    return Object.is(a, b);
}

export const abbreviatedNumber = (val: number) => {
    let s = ["", "k", "m", "b", "t"];

    if (val === 0) return 0;

    let sNum = Math.floor(Math.log10(val) / 3);

    let sVal = parseFloat(
        (sNum != 0
                ? val / Math.pow(1000, sNum)
                : val
        ).toPrecision(2)
    );

    if (sVal % 1 != 0) {
        sVal = Number.parseInt(sVal.toFixed(1));
    }

    return sVal + s[sNum];
}
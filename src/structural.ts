interface HasSsn {
    ssn: string
}

interface Credit {
    income: number
    age: number
}

interface HasCredit {
    credit: Credit
}

interface HasNoCredit {
    credit: undefined
}

function hasSsn(v: any): v is HasSsn {
    return v.ssn != null
}

function creditLookup<P>(person: P | P & HasSsn): P & HasNoCredit | P & HasSsn & HasCredit {
    if (hasSsn(person)) {
        return Object.assign({ credit: { income: 2000, age: 42 } }, person)
    }
    return Object.assign({ credit: undefined }, person)
}

const data = [
    {ssn: "1234"},
    {name:  "foo"},
    {ssn: "1234", name: "foo"}]

console.log(data.map(creditLookup))
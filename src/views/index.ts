const len = 30;
const arr: Array<string> = [];
for (let i = 0; i<len; i++) {
    arr.push(`App${i + 1}`);
};
const templateColumn = 5;
const templateRow = 6;
export {
    arr,
    templateRow,
    templateColumn
}
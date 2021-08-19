// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let res = [];
        for (let i = 0; i < matrix.length; i++) {
            const el = matrix[i];
            if (i % 2 == 1) {
                matrix[i].reverse();
            }

            for (let j = 0; j < el.length; j++) {
                res.push(el[j]);
            }
        }
        return res;
    }
    return [];
};

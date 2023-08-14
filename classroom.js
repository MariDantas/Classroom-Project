/** @param {number[]} grades */
export const getNumberOfGrades = grades => grades.length;

/** @param {number[]} grades */
export const getSumGrades = grades => {
    let sum = 0;
    grades.forEach(grade => sum += grade);

    return sum;
}

/** @param {number[]} grades */
export const getAverageValue = grades => {
    const sum = getSumGrades(grades);
    const totalGrades = getNumberOfGrades(grades);
    let average = 0;

    if(sum !== 0 && totalGrades !== 0){
        average = sum/totalGrades;
    }

    return average;
}

/** @param {number[]} grades */
export const getPassingGrades = grades => grades.filter(grade => grade >= 10);

/** @param {number[]} grades */
export const getFailingGrades = grades => grades.filter(grade => grade <= 9);

/** @param {number[]} grades */
export const getRaisedGrades = grades => grades.map(grade => grade + 1 > 20 ? grade : grade + 1);

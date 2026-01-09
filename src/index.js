function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score < 0) return 'Invalid'; // Edge case
    return 'F';
}

module.exports = { getGrade };
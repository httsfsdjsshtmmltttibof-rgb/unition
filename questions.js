"use strict";
const fs = require('fs');
const path = require('path');

// Read questions from static JSON file
const questionsPath = path.join(__dirname, 'questions.json');
const QUESTIONS = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

const TOTAL_QUESTIONS = QUESTIONS.length;
const TEST_DURATION_SECONDS = 3600; // 60 minutes

/**
 * Determine the student's level using the exact score boundaries:
 * 0–20: Beginner
 * 21–35: Elementary
 * 36–60: Pre-intermediate
 * 61–85: Intermediate
 * 86–100: Upper Intermediate
 * 101–120: Advanced
 */
function calculateLevel(score) {
    if (score <= 20) return 'Beginner';
    if (score <= 35) return 'Elementary';
    if (score <= 60) return 'Pre-intermediate';
    if (score <= 85) return 'Intermediate';
    if (score <= 100) return 'Upper Intermediate';
    return 'Advanced';
}

/**
 * Sanitizes questions for client delivery (strips correct_answer field)
 */
function getClientQuestions() {
    return QUESTIONS.map(({ correct_answer, ...publicFields }) => {
        void correct_answer;
        return publicFields;
    });
}

module.exports = {
    QUESTIONS,
    TOTAL_QUESTIONS,
    TEST_DURATION_SECONDS,
    calculateLevel,
    getClientQuestions,
};

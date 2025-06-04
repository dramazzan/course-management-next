import mongoose from 'mongoose'
import { describe } from 'node:test'

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    complexity:{
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    },
    category:{
        type: String,
        enum: ['frontend', 'backend', 'fullstack', 'mobile', 'data science', 'devops'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    }
})
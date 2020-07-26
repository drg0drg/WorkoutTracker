const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema (
    {
        day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {

            name: {
                type: String,
                trim: true,
                required: "Exercise name is required"
        },
            type: {
                type: String,
                trim: true,
                required: "Exercise type is required"
        },
            duration: {
                type: Number,
                trim: true,
                required: "Exercise duration is required"
        },
            weight: {
                type: Number,
                trim: true,
        },
            reps: {
                type: Number,
                trim: true,
        },
            sets: {
                type: Number,
                trim: true,
        },
            distance: {
                type: Number
        }
        }
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
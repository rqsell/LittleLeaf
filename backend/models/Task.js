const { Schema, model } = require("mongoose");
const taskSchema = new Schema(
  {
    name: String,
    startDate: String,
    endDate: String,
    description: String,
    status: {
      type: String,
      enum: ["Incomplete", "In Progress", "Complete"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    goalId: {
      type: Schema.Types.ObjectId,
      ref: "Goal",
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Tasks", taskSchema);

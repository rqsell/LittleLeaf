const { Schema, model } = require("mongoose");
const goalSchema = new Schema(
  {
    name: String,
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    description: String,
    status: {
      type: String,
      enum: ["Incomplete", "In Progress", "Complete"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    taskIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Goal", goalSchema);

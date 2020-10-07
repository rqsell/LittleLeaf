const { Schema, model } = require("mongoose");
const goalSchema = new Schema(
  {
    name: String,
    startDate: String,
    endDate: String,
    description: String,
    status: {
      required: true,
      type: String,
      enum: ["incomplete", "in progress", "complete"],
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

module.exports = model("User", userSchema);

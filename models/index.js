const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Associations

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "NO ACTION",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "NO ACTION",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.hasMany(Comment, {
  foreignKey: "comment_id",
  onDelete: "NO ACTION",
});

module.exports = { User, Post, Comment };

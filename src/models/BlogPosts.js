module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userID: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    },
  );
    
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };
  return BlogPosts;
};
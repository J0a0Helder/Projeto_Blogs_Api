module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define(
    'PostCategories',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );
  
  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostCategories,
      foreignKey: 'categoryId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'postId', // se refere a outra chave de `users_books`
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId', // se refere ao id de User na tabela de `users_books`
      otherKey: 'categoryId',
    });
  };

  return PostCategories;
};
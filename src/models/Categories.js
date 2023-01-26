module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Categories',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    },
  );
  return Categories;
};
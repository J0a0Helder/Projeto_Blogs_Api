const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const { Op } = Sequelize;

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });
  if (!post) return { type: 'INVALID_ID', message: 'Post does not exist' };
  return post;
};

const search = async (filters) => {
  if (filters === '') return { type: 'NO_FILTERS' };
  console.log(filters);
  const filterByTitle = await BlogPost.findAll({
    where: { title: { [Op.substring]: filters } },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });
  if (filterByTitle.length !== 0) return filterByTitle;
  const filterBycontent = await BlogPost.findAll({
    where: { content: { [Op.substring]: filters } },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  });
  if (filterBycontent.length !== 0) return filterBycontent;
  return [];
};

module.exports = {
  getAll,
  getById,
  search,
};
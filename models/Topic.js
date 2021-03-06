import Sequelize from 'sequelize';
import { sequelize, User, Tag, TagMap, Item, ItemMap } from '.';

const Topic = sequelize.define('topics', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: Sequelize.INTEGER,
  type: Sequelize.STRING,
  title: Sequelize.STRING,
  text: Sequelize.STRING,
  color: Sequelize.STRING,
  kind: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
}, {
  paranoid: true,
  getterMethods: {
    type() { return 'topic'; },
  },
});

Topic.belongsTo(User);

Topic.belongsToMany(Tag, {
  through: {
    model: TagMap,
    unique: false,
    scope: {
      taggable: 'topic',
    },
  },
  foreignKey: 'taggableId',
  constraints: false,
});

Topic.belongsToMany(Item, {
  through: {
    model: ItemMap,
    unique: false,
    scope: {
      itemable: 'topic',
    },
  },
  foreignKey: 'itemableId',
  constraints: false,
});

export default Topic;

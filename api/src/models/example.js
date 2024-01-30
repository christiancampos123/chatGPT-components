module.exports = function (sequelize, DataTypes) {
  const Example = sequelize.define('Example', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    assistantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'assistants',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prompt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'example_assistantId_fk',
        using: 'BTREE',
        fields: [
          { name: 'assistantId' }
        ]
      }
    ]
  })

  Example.associate = function (models) {
    Example.belongsTo(models.Assistant, { as: 'assistant', foreignKey: 'assistantId' })
    // Example.hasMany(models.Chat, { as: 'chats', foreignKey: 'customerId' })
  }

  return Example
}

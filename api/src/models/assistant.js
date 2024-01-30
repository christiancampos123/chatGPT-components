module.exports = function (sequelize, DataTypes) {
  const Asistant = sequelize.define('Asistant', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    assistant: {
      allowNull: false,
      type: DataTypes.STRING
    },
    default: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
      }
    ]
  })

  Asistant.associate = function (models) {
    // User.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' })
    Asistant.hasMany(models.Chat, { as: 'chats', foreignKey: 'asistantId' })
    Asistant.hasMany(models.Example, { as: 'examples', foreignKey: 'asistantId' })
  }

  return Asistant
}

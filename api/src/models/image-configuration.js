module.exports = function (sequelize, DataTypes) {
  const ImageConfiguration = sequelize.define('ImageConfiguration', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    entity: {
      allowNull: false,
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mediaQuery: {
      allowNull: false,
      type: DataTypes.STRING
    },
    widthPx: {
      type: DataTypes.INTEGER
    },
    heightPx: {
      type: DataTypes.INTEGER
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

  ImageConfiguration.associate = function (models) {
    // User.belongsTo(models.Cart, { as: 'cart', foreignKey: 'cartId' })
    ImageConfiguration.hasMany(models.Image, { as: 'images', foreignKey: 'imageConfigurationId' })
  }

  return ImageConfiguration
}

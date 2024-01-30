module.exports = function (sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    imageConfigurationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'image_configurations',
        key: 'id'
      }
    },
    entityId: {
      type: DataTypes.INTEGER
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    originalFilename: {
      type: DataTypes.STRING
    },
    resizedFilename: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    alt: {
      type: DataTypes.STRING
    },
    languageAlias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaQuery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latencyMs: {
      type: DataTypes.INTEGER,
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
        name: 'images_imageConfigurationId_fk',
        using: 'BTREE',
        fields: [
          { name: 'imageConfigurationId' }
        ]
      }
    ]
  })

  Image.associate = function (models) {
    Image.belongsTo(models.ImageConfiguration, { as: 'imageConfiguration', foreignKey: 'imageConfigurationId' })
  }

  return Image
}

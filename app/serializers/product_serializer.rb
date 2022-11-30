class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :sold, :added
end

class ProductsController < ApplicationController
	before_action :authorize, except: [:index]
	# Get
	def index
		render json: Product.all
	end

	# Get/:id
	def show
		products = Product.find(params[:id])
		render json: products
	end

	# Post
	def create
		user  = User.find(session[:user_id])
		product = Product.create!(user_id:user.id, name: product_params[:name], price: product_params[:price], quantity: product_params[:quantity], sold: product_params[:sold], added: product_params[:added])
		render json: product, status: :created
	end

	# Patch
	def updated
		products = Product.find(params[:id])
		products.update!(user_id:user.id, name: product_params[:name], price: product_params[:price], quantity: product_params[:quantity], sold: product_params[:sold], added: product_params[:added])
		render json: products, status: :updated
	end

	# Delete
	def destroy
		product = Product.find(params[:id])
		product.destroy
		render json: []
	end
private
	def product_params
		params.permit(:name, :price, :quantity, :sold, :added)
	end

	def authorize
		return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
	end
end

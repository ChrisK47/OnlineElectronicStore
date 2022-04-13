package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.pojos.Category;
import com.app.pojos.Product;

@Service
public class ProductServiceImple implements IProductService {

	@Autowired
	private ProductRepository productDao;
	@Autowired
	private CategoryRepository categoryDao;
	
	@Override
	public List<Product> getAllProduct() {
		List<Product> list = productDao.findAll();
		return list;
	}

	@Override
	public void AddProduct(Product p) {
		Product product = productDao.findById(p.getId()).orElseThrow(() -> new RuntimeException("Invalid Id"));
		product.setLocation(p.getName());
		product.setManufactureDate(p.getManufactureDate());
		product.setPrice(p.getPrice());
		product.setQty(p.getQty());
		product.setCname(p.getCname());
		product.setName(p.getName());
		product.setDescription(p.getDescription());
		productDao.save(product);
		System.out.println("Product Saved");
	}

	@Override
	public void deleteProduct(int id) {
		productDao.deleteById(id);
	}

	@Override
	public Product getProduct(int id) {
		return productDao.findById(id).orElseThrow(() -> new RuntimeException("Invalid Id"));
	}

	@Override
	public Product getProductByName(String name) {
		return productDao.findByName(name);
	}
	
	@Override
	public Product getProduct(String name)
	{
		Product p =  productDao.findCategoryByName(name);
		System.out.println(p.getCategory());
		return p;
	}

	@Override
	public List<Product> getProductByCategory(int id) {
		Category c = categoryDao.findById(id).orElseThrow(()-> new RuntimeException("Invalid Category Id"));
		List<Product> list = productDao.findByCategory(c);
		return list;
	}

}

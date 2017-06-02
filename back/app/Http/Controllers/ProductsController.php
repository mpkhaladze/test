<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index (){

    	return Product::orderBy('created_at', 'dess')->get();
    }

    public function store (Request $request) {

    	$procuct = Product::create($request->all());
    	return $procuct;
    }
}

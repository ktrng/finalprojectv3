<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('items', function () {
    $items = DB::select('SELECT * FROM items ORDER BY id ASC');
    return $items;
});

Route::post('items', function (Request $request) {
    DB::insert('INSERT INTO items (name, quantity, link, image) VALUES (?, ?, ?, ?)', [$request->name, $request->age]);
    $items = DB::select('SELECT * FROM items ORDER BY id ASC');
    return $items;
});

Route::delete('items/{id}', function ($id) {
    DB::delete('DELETE FROM items WHERE id = ?', [$id]);
    $items = DB::select('SELECT * FROM items ORDER BY id ASC');
    return $items;
});

Route::put('items/{id}', function (Request $request, $id) {
    DB::update('UPDATE items SET name=?, quantity=?, link=?, image=? WHERE id = ?', [$request->name, $request->quantity, $request->link, $request->image, $id]);
    $items = DB::select('SELECT * FROM items ORDER BY id ASC');
    return $items;
});

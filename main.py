from flask import Flask, render_template
app = Flask('app')


@app.route('/')
def index():
  return render_template("index.html")

@app.route('/checkout')
def checkout():
  return render_template("Checkout.html")

@app.route('/client-main')
def client():
  return render_template("Client_main.html")

@app.route('/search')
def search():
  return render_template("Search.html")

@app.route('/admin-main')
def admin_main():
  return render_template("Admin_main.html")

@app.route('/admin-changes')
def admin_changes():
  return render_template("Admin_Changes.html")

@app.route('/about')
def about():
  return render_template("About.html")

@app.route('/reserve')
def reserve():
  return render_template("Reserve.html")

app.run(host='0.0.0.0', port=8080)
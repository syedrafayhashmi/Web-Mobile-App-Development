from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345678@localhost:5432/orders'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

order_items = db.Table('order_items',
    db.Column('order_id', db.Integer, db.ForeignKey('order.id'), primary_key=True),
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True)
)

class Order(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  status = db.Column(db.String(), nullable=False)
  products = db.relationship('Product', secondary=order_items,
      backref=db.backref('orders', lazy=True))

class Product(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(), nullable=False)S
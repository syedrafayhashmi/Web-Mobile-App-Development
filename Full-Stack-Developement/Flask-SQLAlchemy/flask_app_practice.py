from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345678@127.0.0.1:5432/alpha'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
  __tablename__ = 'users'
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(), nullable=False)

  def __repr__(self):
      return f'<User {self.id}, {self.name}>'


db.create_all()
@app.route('/')
def index():
    user = User.query.first()
    return "Hello " + user.name + " your ID is: " + str(user.id) 

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, render_template

app = Flask(__name__)

# ================= FAVICON ROUTE =================
# Make sure favicon.ico is inside: static/favicon.ico
@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')


# ================= MAIN ROUTES =================

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/order")
def order():
    return render_template("order.html")

@app.route("/workspaces")
def workspaces():
    return render_template("workspaces.html")

@app.route("/support")
def support():
    return render_template("support.html")


# ================= CAFE CATEGORY ROUTES =================

@app.route("/cafe/food-for-mood")
def food_for_mood():
    return render_template("cafe/food_for_mood.html")

@app.route("/cafe/hot-classics")
def hot_classics():
    return render_template("cafe/hot_classics.html")

@app.route("/cafe/chillers")
def chillers():
    return render_template("cafe/chillers.html")

@app.route("/cafe/delights")
def delights():
    return render_template("cafe/delights.html")

@app.route("/cafe/sweet-tooth")
def sweet_tooth():
    return render_template("cafe/sweet_tooth.html")

@app.route("/cafe/nutrition")
def nutrition():
    return render_template("cafe/nutrition.html")

@app.route("/login")
def login():
    return render_template("login.html")



# ================= RUN SERVER =================

if __name__ == "__main__":
    app.run(debug=True)
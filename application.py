# ------------------------------------------------
# Copy from apps by adv-it
#
# Version      Date           Info
# 1.0          13-Jen-2021    Initial Version
# ----------------------------------------------
from flask import Flask, render_template

application = Flask(__name__)

@application.route("/")
def root():
    return render_template("index.html")

@application.route("/hello")
def index():
    return "Hello World from Flask App Page.<b> v1.0"

#--------Main------------------
if __name__ == "__main__":
    application.debug = True
    application.run()
#------------------------------
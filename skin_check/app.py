from flask import Flask, request, render_template, json, jsonify, send_from_directory
app = Flask(__name__)

@app.route("/", methods=["GET"])
def main():
    return render_template('index.html')

@app.route("/charts", methods=["GET"])
def new():
    return render_template('charts.html')

@app.route("/info", methods=["GET"])
def other():
    return render_template('model_info.html')

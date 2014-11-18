from flask import Flask, jsonify
from flask import url_for
from flask.ext.httpauth import HTTPBasicAuth
from flask import make_response
from flask import request

auth = HTTPBasicAuth()

@auth.get_password
def get_password(username):
    if username == "testuser":
        return "pass123!"


@auth.error_handler
def unauthorized():
    return make_response(jsonify({'error' : 'Unauthorized access'}), 401)

calculator = Flask(__name__)


variables = [
    {'id'    : 1,
     'name'  : "x",
     'value' : 11,
     'type'  : "int"
    },
    {'id'    : 2,
     'name'  : "y",
     'value' : 10,
     'type'  : "int"
    }
    ]

@calculator.route('/api/v1.0/variables', methods=['GET'])
@auth.login_required
def getvariables():
    return jsonify({'variables': map(makepublicvariable,variables)})


def makepublicvariable(variable):
    newvariable = {}
    for field in variable:
        if field == 'id':
            newvariable['uri'] = url_for('getvariable',
                    variableid=variable['id'], _external=True)
        else:
            newvariable[field] = variable[field]
    return newvariable


@calculator.route('/api/v1.0/variables/<int:variableid>', methods=['GET'])
def getvariable(variableid):
    results = filter(lambda v: v['id'] == variableid, variables)
    if results == []:
        return make_response(jsonify({'error' : 'Not Found'}), 404)

    else:
        return jsonify({'variable' : results[0]})

@calculator.route('/api/v1.0/variables', methods=['POST'])
def createvariable():
    xs = []
    for elem in ['name', 'type', 'value']:
        xs.append(elem in request.json)
    if not request.json or not all(xs) :
        return make_response(jsonify({'error' : 'Bad Request'}), 400)
    variable = {
        'id' : variables[-1]['id'] + 1,
        'name' : request.json['name'],
        'value' : request.json['value'],
        'type'  : request.json['type']
    }
    variables.append(variable)
    return jsonify({'uri' : url_for('getvariable',
                    variableid=variable['id'], _external=True)})

if __name__ == "__main__":
    calculator.run(debug=True)

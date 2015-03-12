from app import app
import argparse

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('host', nargs='?', help='listen to adress',
            type=str, default='192.168.178.20')

    arg = parser.parse_args()
    app.run(arg.host, debug=True)

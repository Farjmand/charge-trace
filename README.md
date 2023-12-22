# charge-trace
An app that allows users to track their EV batteries schedule

clone this project
`git clone https://github.com/Farjmand/charge-trace.git`
Then `cd charge-trace`
Running the frontend:
    In one terminal, add `cd frontend`
    The run `npm i`
Once all the dependencies are installed, run:
`npm run dev`
Then you will have the frontend running at: 
`http://localhost:5173/`
Running the backend:
In a parellel terminal, add `cd backend`
The run the python command to create a venv:
`python3 -m venv venv` 
once its done, activate venv by running this command:
`source ./venv/bin/activate`
Once the venv is activated, install the dependencies in the requirements file by running:
`pip install -r requirements.txt`
Once all the reauirements are installed, go to charge_apis folder:
`cd charge_apis`
The run migrations: 
`python manage.py migrate`
once all the migrations are done,
Please run:
`python manage.py runserver`
and you will have the backend running at:
`http://127.0.0.1:8000/`

# APIS
Currently the project has:
1. User Registration API
2. Sign In APIs alongwith the Admin `Jeff `
3. Get All Vehicles List API
4. Get All Vehicles according to a specific user API
5. Add  new Vehicle API
6. Logout API

# FrontEnd
On the frontend we have:
1. Registration Form
2. Login Form
3. A dashboard where the current user's cars are displayed alognwith their charging start and end time
4. A form for adding new vehicles (API not working ... )
5. A chart with hourly electric prices for 7 days so that the user can see the highs and lows of prices to select a `Smart Schedule `

# Pages
 Visit 
 http://localhost:5173/login for the login form.
 You can use already existing username and pas:
 username: fawd
 password: fawd12

Or you can create a new user by visiting this page:
http://localhost:5173/register

Dashboard is on:
http://localhost:5173/

And you can add new vehicle at:
http://localhost:5173/addVehicle
# Scope
Currently everything is manual. User can set their own time schedules for their car charging. But this can get more improved and with enhanced features. 
We can generate a smart schedule for users by checking the electric prices or they can set a manual schedule by themselves.
They can also set their home addresses for their cars charging to be started and stopped automatically. We can also check battery timings, batter usage and performanaces of the cars based on this data.


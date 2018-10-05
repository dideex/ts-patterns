set DATABASE_URL=postgres://postgres:toor@127.0.0.1:5433/postgres
set DATABASE_URL=postgres://postgres:toor@127.0.0.1:5433/conduster
python manage.py runserver localhost:8000 --settings=condust.settings
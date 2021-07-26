echo "Please enter mysql host:"
read host

echo "Please enter mysql user:"
read user

echo "Please enter mysql password:"
read pass

echo "Please enter mysql database:"
read db


 touch notebook-express/db_infos.json

echo -e "{'host':'$host',\n'user':'$user',\n'pass':'$pass',\n'db':'$db'}"> notebook/db_infos.json


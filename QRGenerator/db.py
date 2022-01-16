import boto3

class db(object):
    #Construter will take in listName that is already exsiting table or create a new table 
    def __init__(self, listName):
        self.dynamodb = boto3.resource('dynamodb')
        self.listName = listName
        if (self.checkTable()==False):
            self.table = self.dynamodb.Table(self.listName) 
            print("The table " + self.listName + " just got created at: " + str(self.table.creation_date_time) + " and has " + str(self.table.item_count) + " items.")
        else:
            self.table = self.dynamodb.Table(self.listName) 
            print("The table " + self.listName + " already exist and has " + str(self.table.item_count) + " items.")
            
    # Query client and list_tables to see if table exists or not
    def checkTable(self):
        # Instantiate your dynamo client object
        client = boto3.client('dynamodb')

        # Get an array of table names associated with the current account and endpoint.
        response = client.list_tables()

        if self.listName in response['TableNames']:
            table_found = True
        else:
            table_found = False
            # Get the service resource.
            dynamodb = boto3.resource('dynamodb')

            # Create the DynamoDB table by the name passed in by the parameter
            table = dynamodb.create_table(
                TableName = self.listName,
                KeySchema =
                [
                    {
                        'AttributeName': 'id',
                        'KeyType': 'HASH'
                    }
                ],
                AttributeDefinitions =
                [
                    {
                        'AttributeName': 'id',
                        'AttributeType': 'S'
                    },
                ],
                BillingMode='PAY_PER_REQUEST', 
            )

            # Wait until the table exists.
            table.meta.client.get_waiter('table_exists').wait(TableName=self.listName)

        return table_found

    def appendItem(self, id, binId, name, type, gps, hits, date):
        resp = self.table.put_item(
            Item={
                "id" : id,
                'binId': binId,
                'name' : name,
                'type': type,
                'location': gps,
                'hits': hits,
                'dateOfInit': date,
            }
        )
        print("The item has been appended with binId: " + id)

        return resp


    def updateItem(self, id, name, type, gps, hits, date):
        self.table.update_item(
            Key={
                'binId': id,
                'name': name, 
                'type': type, 
                'gps': gps, 
                'hits': hits, 
                'date':date, 
            },
            UpdateExpression= updateExp,
            ExpressionAttributeValues= {expAtt}
            )
        print("The item " + id + " has been updated")
        

    def getItem(self, id, name, type, gps, hits, date):
        response = self.table.get_item(
            Key={
                'binId': id,
                'name': name, 
                'type': type, 
                'gps': gps, 
                'hits': hits, 
                'date':date, 
            }
        )

        return response

    def deleteItem(self, id):
        self.table.delete_item(
            Key={
                'binId': id
            }
        )
        print("BinID: " + id + " has been deleted.")

    def deleteTable(self):
        self.table.delete()
        print("Table " + self.listName + " has been deleted.")
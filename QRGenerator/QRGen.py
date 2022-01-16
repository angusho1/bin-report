import qrcode 
from uuid import uuid4
from db import db

#creation of the QR Code begins here:
 
#Base URL
website_name = 'https://www.reportbin.link/'

#dynamoDB table creation starts here: 

#create a ddb table
dbObject = db("DisposalBin-zetfb4bm65ekhk3iuha4doienm-dev")

#checks if table exists or not
dbObject.checkTable()
    
#create the QR codes with unique ID's for each bin
numberQR = int(input("How many QR codes would you like to generate?: "))

#vars
count = 0
success = 0

#creates the QR code and uploads it to the DynamoDB storage
for i in range(numberQR): 
    binID = 'bin' + str(uuid4())[-6:] #gives the bin a randomized ID
    qr = qrcode.QRCode(version=1, box_size=10, border=1)
    qr.add_data(website_name + binID) #gives the QR code the value of the website and the bin ID
    qr.make(fit = True)
    img = qr.make_image(fill = 'black', back_color = 'white')#QR image creation
    img.save(binID + '.png')

    #appends to the table in DDB storage
    resp = dbObject.appendItem(str(uuid4()), binID, None, None, None, None, None)

    print("Uploading QR: ", binID)
    #check for status 200 and report back to user
    #report back if there a different status code
    if resp['ResponseMetadata']['HTTPStatusCode'] == 200:
        success += 1
    else: 
        print(f'This id {count} did not upload: {binID}')
        continue
        
    #completion!
    print(f'Upload to dynamoDB complete!')

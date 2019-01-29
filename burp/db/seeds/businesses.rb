business1 = Business.create(business_name: "Fog Harbor Fish House", address: "Pier 39", city: "San Francisco", state: "CA", zip_code: "94133", latitude: 37.80964, longitude: -122.41025, phone: "(415) 421-2442", website: "fogharbor.com")
business2 = Business.create(business_name: "Marufuku Ramen", address: "1581 Webster St", city: "San Francisco", state: "CA", zip_code: "94115", latitude: 37.78537, longitude: -122.43146, phone: "(415) 872-9786", website: "marufukuramen.com")
business3 = Business.create(business_name: "Uncle Vito's", address: "700 Bush St", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.7903112, longitude: -122.4089665, phone: "(415) 391-5008", website: "unclevitos.com")
business4 = Business.create(business_name: "Del Popolo", address: "855 Bush St", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.789551, longitude: -122.411331, phone: "(415) 589-7940", website: "delpopolosf.com")
business5 = Business.create(business_name: "The House", address: "1230 Grant Ave", city: "San Francisco", state: "CA", zip_code: "94133", latitude: 37.797952, longitude: -122.407148, phone: "(415) 986-8612", website: "thehse.com")

business1.photo.attach(io: File.open('./app/assets/images/business/business1.jpg'), filename: 'business1.jpg')
business2.photo.attach(io: File.open('./app/assets/images/business/business2.jpg'), filename: 'business2.jpg')
business3.photo.attach(io: File.open('./app/assets/images/business/business3.jpg'), filename: 'business3.jpg')
business4.photo.attach(io: File.open('./app/assets/images/business/business4.jpg'), filename: 'business4.jpg')
business5.photo.attach(io: File.open('./app/assets/images/business/business5.jpg'), filename: 'business5.jpg')

business1.pics.attach(io: File.open('./app/assets/images/business/business1.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business10.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business11.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business12.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business13.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business14.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business15.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business16.jpg'), filename: 'business1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business17.jpg'), filename: 'business1.jpg')

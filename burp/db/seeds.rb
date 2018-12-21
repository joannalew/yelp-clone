# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all
Review.destroy_all


demo = User.create(first_name: 'Guest', last_name: 'Umbrella', email: 'noemail@email.com', password: 'password', zip_code: '94018')
user1 = User.create(first_name: 'Mike', last_name: 'Smith', email: 'mikesmith@mail.com', password: 'password', zip_code: '94016')
user2 = User.create(first_name: 'Mary', last_name: 'Poppins', email: 'mary123@mail.com', password: 'password', zip_code: '94012')
user3 = User.create(first_name: 'Jessica', last_name: 'Jones', email: 'jessicaaaaaa@mail.com', password: 'password', zip_code: '94013')
user4 = User.create(first_name: 'Serena', last_name: 'Williams', email: 'ilovetennis@mail.com', password: 'password', zip_code: '94014')
user5 = User.create(first_name: 'Joe', last_name: 'Bruin', email: 'bearbearbear@mail.com', password: 'password', zip_code: '90024')
user6 = User.create(first_name: 'Matt', last_name: 'Miller', email: 'mercerindisguise@mail.com', password: 'password', zip_code: '90210')
user7 = User.create(first_name: 'Finn', last_name: 'Human', email: 'jakethedog@mail.com', password: 'password', zip_code: '94015')
user8 = User.create(first_name: 'Wilson', last_name: 'Coconut', email: 'imlost@mail.com', password: 'password', zip_code: '94019')
user9 = User.create(first_name: 'Sandy', last_name: 'Star', email: 'bobthesponge@mail.com', password: 'password', zip_code: '94017')
user10 = User.create(first_name: 'Elaine', last_name: 'Wong', email: 'tofurkey@mail.com', password: 'password', zip_code: '91001')

demo.photo.attach(io: File.open('./app/assets/images/user/demo.png'), filename: 'demo.png')
user1.photo.attach(io: File.open('./app/assets/images/user/user1.jpg'), filename: 'user1.jpg')
user2.photo.attach(io: File.open('./app/assets/images/user/user2.jpg'), filename: 'user2.jpg')
user3.photo.attach(io: File.open('./app/assets/images/user/user3.jpg'), filename: 'user3.jpg')
user4.photo.attach(io: File.open('./app/assets/images/user/user4.jpg'), filename: 'user4.jpg')
user5.photo.attach(io: File.open('./app/assets/images/user/user5.png'), filename: 'user5.png')
user6.photo.attach(io: File.open('./app/assets/images/user/user6.jpg'), filename: 'user6.jpg')
user7.photo.attach(io: File.open('./app/assets/images/user/user7.png'), filename: 'user7.png')
user8.photo.attach(io: File.open('./app/assets/images/user/user8.jpg'), filename: 'user8.jpg')
user9.photo.attach(io: File.open('./app/assets/images/user/user9.jpg'), filename: 'user9.jpg')
user10.photo.attach(io: File.open('./app/assets/images/user/user10.jpeg'), filename: 'user10.jpeg')


business1 = Business.create(business_name: "Fog Harbor Fish House", address: "Pier 39 Ste A-202", city: "San Francisco", state: "CA", zip_code: "94133", latitude: 37.80964, longitude: -122.41025, phone: "(415) 421-2442", website: "fogharbor.com", price: '$$')
business2 = Business.create(business_name: "Marufuku Ramen", address: "1581 Webster St", city: "San Francisco", state: "CA", zip_code: "94115", latitude: 37.78537, longitude: -122.43146, phone: "(415) 872-9786", website: "marufukuramen.com", price: '$$')
business3 = Business.create(business_name: "Uncle Vito's", address: "700 Bush St", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.7903112, longitude: -122.4089665, phone: "(415) 391-5008", website: "unclevitos.com", price: '$$')
business4 = Business.create(business_name: "Del Popolo", address: "855 Bush St", city: "San Francisco", state: "CA", zip_code: "94108", latitude: 37.789551, longitude: -122.411331, phone: "(415) 589-7940", website: "delpopolosf.com", price: '$$')
business5 = Business.create(business_name: "The House", address: "1230 Grant Ave", city: "San Francisco", state: "CA", zip_code: "94133", latitude: 37.797952, longitude: -122.407148, phone: "(415) 986-8612", website: "thehse.com", price: '$$$')

business1.photo.attach(io: File.open('./app/assets/images/business/business1.jpg'), filename: 'business1.jpg')
business2.photo.attach(io: File.open('./app/assets/images/business/business2.jpg'), filename: 'business2.jpg')
business3.photo.attach(io: File.open('./app/assets/images/business/business3.jpg'), filename: 'business3.jpg')
business4.photo.attach(io: File.open('./app/assets/images/business/business4.jpg'), filename: 'business4.jpg')
business5.photo.attach(io: File.open('./app/assets/images/business/business5.jpg'), filename: 'business5.jpg')

business1.pics.attach(io: File.open('./app/assets/images/business/business1.jpg'), filename: 'business1-1.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business10.jpg'), filename: 'business10.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business11.jpg'), filename: 'business11.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business12.jpg'), filename: 'business12.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business13.jpg'), filename: 'business13.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business14.jpg'), filename: 'business14.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business15.jpg'), filename: 'business15.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business16.jpg'), filename: 'business16.jpg')
business1.pics.attach(io: File.open('./app/assets/images/business/business17.jpg'), filename: 'business17.jpg')

Review.create(business_id: business1.id, user_id: user1.id, rating: 5, body: "Had the best dinner here!! It is right off the pier with great views of the city, the bay, and most importantly, the Golden Gate Bridge! Make sure to get reservations and ask for a seat by the window to get a great sunset view at dinner.")
Review.create(business_id: business1.id, user_id: user2.id, rating: 5, body: "I ate here yesterday as my first meal ever in San Francisco and I was definitely not disappointed! I came at happy hour time (around 4pm) and so I got to take part of some happy hour specials while sitting at the bar. I came here for the sourdough bread bowl of clam chowder, and probably would've been fine with just that - but I couldn't pass up the fried lemon calamari on the happy hour menu for $7, and was very happy that I got that as well! (And some wine, of course).")
Review.create(business_id: business1.id, user_id: user4.id, rating: 3, body: "Came here for dinner last night. Its right on pier 39 overlooking the marina. Seevice was good. Our waitress was nice and attentive. Ambience was inviting. Food though was sub par, especially for the price.")
Review.create(business_id: business1.id, user_id: user5.id, rating: 4, body: "Seafood party! Love that you get on the wait list via Berp and avoid waiting around uncessarily. The clam chowder here was so amazing! It was creamy with pieces of clams and potato and I wanted to lick the bowl. Scallop, crab, and clam risotto was pretty tasty at first bite, but once I had a bite of the seafood penne pasta, it was like move over risotto. Red sauce is better than white sauce BTW.")
Review.create(business_id: business1.id, user_id: user6.id, rating: 4, body: "We made a reservation in advance, so we got the chance to sit by the window. The service was really attentive. We were taken good care of by the waiter all night. Recommended for dating and friends gathering. It is a touristy spot but it won't disappoint.")
Review.create(business_id: business1.id, user_id: user7.id, rating: 3, body: "Stopped in here for some chowder, and literally that was the only thing, although we ended up trying the oysters, too, which were small and not really that good (dry and sticky). Next time will have to ask to see what they have as the half dozen was not worth it. Front had plenty of seats though we still waited for a table.")
Review.create(business_id: business1.id, user_id: user9.id, rating: 5, body: "Outstanding service and great food... My wife and I came to SF for our anniversary and we wanted to try a good selection of the crab places. This restaurant was by far the best! We came back twice especially after our actual anniversary evening dinner was a complete bust at another restaurant.")

Review.create(business_id: business2.id, user_id: user2.id, rating: 5, body: "We went to the place because of the reviews on Berp. There was a big line and we had to wait for a while, but it was completely worth it! Ramen was so spicy and so so good.")
Review.create(business_id: business2.id, user_id: user3.id, rating: 4, body: "Best ramen in SF. The wait is long. We went for lunch and got on the waitlist, but still had to wait around 45 min. Broth was amazing and the egg was cooked perfectly. Definitely recommend this place.")
Review.create(business_id: business2.id, user_id: user6.id, rating: 2, body: "This is the saltiest Ramen we've ever had. My tongue still hurts. Got the special DX sizzling chicken. Chicken was hard and dry. Not sure if it was an off day, but none of the people in my group liked their food.")
Review.create(business_id: business2.id, user_id: user7.id, rating: 5, body: "Definitely the best ramen place I've been to in a long time i would have gotten the pork belly bun small bites (MarufukuBites) but was in a rush to go see a movie. It is located on the second floor of the far western building of Japantown near the theaters.")
Review.create(business_id: business2.id, user_id: user8.id, rating: 4, body: "Was the ramen really good? Yeah. Was it the best ramen I've had in SF? Probably. Was it the best in the Bay Area? Meh. I think there are definitely better ramen spots if you travel outside of SF. Marufuku just makes a solid bowl of ramen, which is pretty much standard fare for anywhere in Japan. There wasn't anything particularly special about it that makes me want to come back and battle the wait time again.")
Review.create(business_id: business2.id, user_id: user10.id, rating: 4, body: "Came here on a Sunday around opening time in hopes of not having to wait for very long, but still ended up having to put my name on a waitlist. Fortunately, we didn't have to wait too long and were seated within 30 mins. Overall, a good bowl of ramen! Would definitely be worth the wait (if the wait isn't too long).")

Review.create(business_id: business3.id, user_id: user1.id, rating: 4, body: "A little pizza parlor near Union Square and Masonic is our go to place when we are in the neighborhood. The seating is a little cozy and people watchers may enjoy sitting near the window.")
Review.create(business_id: business3.id, user_id: user2.id, rating: 4, body: "What a great place! Probably the best pizza I have had in San Francisco.  Very convenient for a late night dinner. Price is very reasonable as well. Very nice overall.")
Review.create(business_id: business3.id, user_id: user3.id, rating: 5, body: "I've always enjoyed their Mountain pizza, which is their version of a combination. It comes with salami, pepperoni, onion, bell peppers, mushrooms and sausage.  I like that they don't skimp on their portions their crust has a nice texture to it and they are very reasonably priced when you compare to other pizza places in SOMA.")
Review.create(business_id: business3.id, user_id: user4.id, rating: 3, body: "Seeing all the reviews at this place made me want to come and check it out. And to be honest, to me, this place wasn't the most exciting pizza place. I have started to become more inclined to eating Neapolitan style of pizzas. I think though, this pizza was just okay.")
Review.create(business_id: business3.id, user_id: user5.id, rating: 4, body: "Can't go wrong with a pepperoni and cheese pizza. The antipasto salad was good, but a tad too much dressing.  They serve Drake's IPA which was good. Service was ok. The server checked on us a couple of times. Just not the friendliest.")
Review.create(business_id: business3.id, user_id: user6.id, rating: 5, body: "The food is good and the prices are very reasonable for the quality. They offer takeout and delivery too. Keep an eye out for the daily specials!")
Review.create(business_id: business3.id, user_id: user7.id, rating: 1, body: "I decided to get a Pizza from Uncle Vito's Pizza while waiting for my laundry to complete across the road. At around 9:30 pm on Sunday it was slammed. The person taking orders was obviously having a bad day. He was out rightly rude to people who were simply placing orders.")

Review.create(business_id: business4.id, user_id: user3.id, rating: 5, body: "Easily one of the best pizza spots in SF. The pizza crust is chewy, slightly sourdoughy, soft, and the perfect amount of bubble and char. We always get the Bianca which is a white pie with kale, garlic, and mozzarella and we do an add-on for sausage.")
Review.create(business_id: business4.id, user_id: user4.id, rating: 5, body: "My favorite pizza! I'm not actually a lover of pizza because I don't like bread. I enjoy pizza once in a while or when I drink, but I love other foods more. But wow, the pizza here is amazing where I'd crave it sober. The dough is so soft but in the best way... most crusts I've had on pizzas are usually dry or hard or empty/airy inside but the crust on these is soft and yummy.")
Review.create(business_id: business4.id, user_id: user5.id, rating: 4, body: "I adored the pizza. A nice thin bubbly crust. And just the right amount of toppings. My favorite pizza is a pepperoni and mushroom, so this hit the spot. Sitting at the counter was a bit uncomfortable, so I recommend trying to get a table if possible. The heat from the pizza oven made it a little too toasty.")
Review.create(business_id: business4.id, user_id: user6.id, rating: 5, body: "This has to be the best pizza in SF. The dough is light , springy and just the right texture for thin crust pizza. The toppings are sophisticated and special. It's not just a marinara pizza: it's toasted garlic and fresh oregano. I had the squash pizza with smoked cheese chili's honey and thyme. Great combination of heat and hearty and herb.")
Review.create(business_id: business4.id, user_id: user8.id, rating: 5, body: "Had dinner and a private event here (covered garden patio in the back) and I was blown away both times. The staff for our private event went above and beyond, catered to different dietary needs seamlessly, were kind, thoughtful and incredibly attentive.  We had a wonderful time and the food was just as amazing as the service. Delicious pizzas and small plates. Felt so lucky to find this gem. Thank you!!!")
Review.create(business_id: business4.id, user_id: user9.id, rating: 3, body: "Very casual ambiance, good service, a bit too expensive. The seating arrangement was uncomfortable. I enjoyed my pizza but it was not one of the best of SF. Burrata appetizer was good but nothing to rave about. Desserts variety is limited.")
Review.create(business_id: business4.id, user_id: user10.id, rating: 5, body: "The pizza is Neapolitan style, cooked perfectly (with deliciously chewy crust), and high-quality ingredients. The pizza is also prepared/cooked quickly (less than 5-10 min). You can make your pizza vegan by omitting cheese...the pizza is so good that won't miss it.")

Review.create(business_id: business5.id, user_id: user1.id, rating: 5, body: "I love this place, and more than being happy, I have an inner sense of peace and joy as I imbibe the whole dining experience. No other restaurant makes me this happy. I hope The House stays this consistent and high quality for years to come.")
Review.create(business_id: business5.id, user_id: user2.id, rating: 5, body: "A perfect date spot for a potential significant other or someone that you've been with for a while, or just a friend. You won't be disappointed with the food that you order here!")
Review.create(business_id: business5.id, user_id: user3.id, rating: 5, body: "Make sure to make a reservation in advance. Place is small inside and gets super packed! Their food!!!! SOOOO GOOD!!! Ordered salmon fried rolls.")
Review.create(business_id: business5.id, user_id: user4.id, rating: 5, body: "We made a reservation (and I highly recommend you do the same, this place is super small and always packed). It was 6 of us at the table and we decided to order a bunch of different things off of their menu and just share it all. I am so glad we did that because everything was so delicious, flavorful and cooked to perfection. We were so excited about our meals, I totally forgot to take photos except for one! We loved our food and I know you will too! This place is a must try!")
Review.create(business_id: business5.id, user_id: user5.id, rating: 5, body: "The House is just exceptional! To be honest, I wasn't expecting much from this place because I assumed it would be a mish mash of glorified asian fusion but it blew me away! I'd definitely come back (either come really early or come with a reservation which can be hard to come by). This is a special occasion meal!")
Review.create(business_id: business5.id, user_id: user6.id, rating: 5, body: "Came by for dinner the other night and the experience was phenomenal as always! Reservations were available via Berp and we were seated upon arrival! The Black Cod was very fresh and perfectly cooked. The avocado roll complemented the dish perfectly!")
Review.create(business_id: business5.id, user_id: user8.id, rating: 5, body: "The House is damn good! With the reviews this restaurant has, I came in with high expectations and they were still exceeded. Definitely worthy of a visit. The restaurant is small, but the food is excellent. I have to say it was the best Asian fusion food I have had in SF. Dishes that stood out were the wasabi noodles with flatiron steak, a Korean short rib special, octopus, deep fried salman roll, and a scallop special. All were excellent!")
Review.create(business_id: business5.id, user_id: user10.id, rating: 5, body: "We were walking around North Beach and decided to check on Berp for a good place for lunch. The House popped up with 5 stars so we walked right over. It was past the usual lunch hour rush so we were seated within a minute of arriving.")

